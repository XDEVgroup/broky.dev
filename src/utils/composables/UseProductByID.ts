import { projects } from "../projects";

export const UseProductByID = (id: string) => {
    const product = projects?.filter((item) => item.id === Number(id));
    return product[0]
  };