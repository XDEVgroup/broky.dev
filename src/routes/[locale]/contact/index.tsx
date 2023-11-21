import { component$ } from "@builder.io/qwik";
import { Form, routeAction$ } from "@builder.io/qwik-city";
import nodemailer from "nodemailer";
import Header from "~/components/header";

const sendEmail = async (message: string, email: string) => {
  const transporter = nodemailer.createTransport({
    host: "mail.trenddad.site",
    port: 465,
    secure: true,
    auth: {
      user: "info@trenddad.site", // generated ethereal user
      pass: process.env.EMAILPASS, // generated ethereal password
    },
  });

  await transporter.sendMail({
    from: "Broky.dev <info@trenddad.site>", // sender address
    to: "mark.teekens@outlook.com", // list of receivers
    subject: `Contact Request`, // Subject line
    text: `email: ${email}</h1><p>\n\nmessage: ${message}`, // plain text body
    html: `<h1>email: ${email}</h1><p>\n\nmessage: ${message}</p>`,
  });

  await transporter.sendMail({
    from: "Broky.dev <info@trenddad.site>", // sender address
    to: email, // list of receivers
    subject: `Thank you!`, // Subject line
    text: `Mark will contact you as soon as possible!`, // plain text body
    html: `<p>Mark will contact you as soon as possible!</p>`,
  });
};

export const useSendContact = routeAction$(async (data, { status }) => {
  const message = data.message.toString();
  const email = data.email.toString();
  status(201);
  await sendEmail(message, email);
  //   redirect(302, "/");
  status(200);
  return {
    success: true,
    review: "Send succesfully",
  };
});

export default component$(() => {
  const action = useSendContact();
  console.log(action.isRunning);
  return (
    <div>
      <Header />
      <div class="bg-black w-screen">
        <div class="m-auto  flex min-h-screen text-white items-center justify-center flex-col bg-gradient-to-b from-sky-800/[.60] via-sky-800/[.10] w-screen">
          <Form class="mt-10 flex w-80 flex-col gap-2 " action={action}>
            <div class="py-6">
              {" "}
              <h1 class="text-4xl">Contact / Hire me</h1>
            </div>
            <label class="font-bold">Your Email:</label>
            <input
              placeholder="Email"
              class="border-white text-black  p-2.5 rounded-lg w-full text-sm placeholder-gray-400  focus:border-blue-500  focus:ring-blue-500 "
              type="email"
              name="email"
            />

            <label class="font-bold">Your message (max 200 char.):</label>
            <textarea
              placeholder="Message"
              class="w-full rounded-lg border text-black border-white   p-2.5 text-sm   placeholder-gray-400  focus:border-blue-500  focus:ring-blue-500"
              rows={6}
              name="message"
              required
              maxLength={200}
            />
            {!action.value?.success ? (
              <button
                class="bg-white rounded-lg px-4 py-2 text-black"
                type="submit"
              >
                Send
              </button>
            ) : (
              <span class="px-4">Thank you!</span>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
});
