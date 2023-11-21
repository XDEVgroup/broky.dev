const ts = "/stack/ts.png";
const react = "/stack/react.png";
const next = "/stack/next.png";
const nuxt = "/stack/nuxt.svg";
const go = "/stack/go.png";
const vue = "/stack/vue.png";
const qwik = "/stack/qwik.png";
const css = "/stack/css.png";
const html = "/stack/html.png";

export const logos = [ts, react, next, nuxt, go, vue, qwik, css, html];

export const projects = [
  {
    id: 1,
    title: "Veta network",
    category: "web-app",
    image: "/websites/vetaappwebsite.webp",
    stack: [next, react, ts],
    website: "https://veta-zackcgl.vercel.app/",
    desc: `${$localize`:@@vetadesc:`}`,
    desc2: `${$localize`:@@vetadesc2:`}`,
  },

  {
    id: 2,
    title: "Kippie kasstaat",
    category: "Web-app",
    image: "/websites/kasstaatapp.png",
    stack: [nuxt, vue, ts],
    website: "https://kasstaat.krs.nl",
    desc: "Wegens privacy redenen is er geen story, dit project is niet uitgevoerd door TSX, maar behoord wel tot de ervaring van een van haar medewerkers.",
    desc2: "",
  },

  {
    id: 3,
    title: "Trend Dad",
    category: "Applicatie",
    image: "/websites/trenddadwebsite.png",
    stack: [nuxt, vue, ts, go],
    website: "https://trenddad.com/",
    desc: "Trend Dad is een webshop startup dat producten verkoopt op basis van de laatste trends en ontwikkelingen in de wereld. Het bedrijf verkoopt producten in een goedkoop segment, maar ook een duurdere prijsklasse. Dit kan alles zijn, van brillen, kleding tot aan apparatuur.",
    desc2:
      "Trend Dad heeft ons gevraagd een interactieve webshop te maken die performant moet zijn, en schaalbaar voor de toekomst. Als stack is er gekozen voor het Nuxt framework met een serverless architecture. Nuxt zorgt er voor dat de website een zeer goede performance heeft. En door serverless konden we de kosten laag houden en de applicatie snel online zetten. Onderliggend maken we gebruik van een sql database, stripe voor de payments, en golang voor de backend.",
  },
  {
    id: 4,
    title: "Ruby Finance",
    category: "Website & admin panel",
    image: "/websites/rubywebsite.webp",
    stack: [ts, react, next],
    website: "https://rubylanding.vercel.app",
    desc: "Ruby Finance is een boekhoudkantoor dat zich specialiseerd in het helpen van zzp-ers met de boekhouding en administratie. Het was van belang een landing page te maken die niet alleen bestaande klanten van informatie kon voorzien, maar ook nieuwe bezoekers kon overtuigen klant te worden van het bedrijf. De landing page bestaat uit een aantal secties en een contact deel. Het tweede deel van het werk dat door ons is gedaan had betrekking op het maken en onderhouden van een blog area.",
    desc2:
      "Door de blogs te koppelen aan een headless CMS kunnen de werknemers van Ruby Finance blogs op een vrij gemakkelijke manier aanmaken. De blogs laden snel waardoor deze door crawlers van Google gemakkelijk te vinden zijn. De website is in twee talen, namelijk Engels en Nederlands. Daarnaast worden nieuwe aanvragen niet alleen gestuurd per email, maar worden deze ook opgeslagen in een sql database.",
  },
  {
    id: 5,
    title: "Online with you",
    category: "website",
    image: "/websites/owy.webp",
    stack: [html, css],
    website: "https://onlinewithyou.nl/",
    desc: "Online with you is een onderneming dat zich heeft gespecialiseerd in het helpen van startups doormiddel van een uitgebreide website met wordpress, daarnaast investeerd het in scripting technologieen als python en django. Het werkt samen met klanten om data via verschillende manieren van het web te scrapen om zo een goed beeld te krijgen in de status van toepassingen.",
    desc2:
      "Online with you heeft ons gevraagd een website te maken, omdat wij een verfrissende kijk hebben op het bedrijf vanuit een ander standpunt als die zij voor oog hadden",
  },
  {
    id: 6,
    title: "Cheap Software Licence",
    category: "Application",
    image: "/websites/cheapsoftwarelicenceapp.png",
    stack: [nuxt, vue, ts],
    website: "https://cheapsoftwarelicence.com",
    desc: "Wegens privacy redenen is er geen story. Je kunt de website gewoon bezoeken.",
    desc2: "",
  },
  {
    id: 7,
    title: "Course God",
    category: "Application",
    image: "/websites/coursegod.png",
    stack: [qwik, ts],
    website: "https://coursegod.com",
    desc: "Coursegod is een project die zich focust op het verkopen van online courses, en dat met name in de money making branche. Het bedrijf heeft ons gevraagt een super snel framework te gebruiken, namelijk QwikJS. Doordat qwik alleen javascript execute in de browser wanneer het noodzakelijk is. Is deze website direct geladen en interactief.",
    desc2:
      "Naast de landing page, bestaat het uit een dashboard, waar gebruikers kunnen inloggen, en abonnementen kunnen kopen doormiddel van de api van stripe. Ook kun je hier cursussen bekijken en blogs lezen.",
  },
  {
    id: 8,
    title: "Broky",
    category: "Website",
    image: "/websites/brokydev.png",
    stack: [qwik, ts],
    website: "https://broky.dev/",
    desc: "Mark is Software developer en geboren in Gouda, in Nederland. Deze website gaat over zijn portfolio en projecten. De applicatie is gemaakt met Qwik. Qwik is een lightning fast Javascript framework die bekend staat om haar resumability. Dit betekend dat het executen van javascript wordt gepauzeerd. Javascript wordt alleen ingeladen als het nodig is waardoor je extreem snelle resultaten krijgt.",
    desc2: "",
  },
  {
    id: 9,
    title: "Crew stars",
    category: "Website",
    image: "/websites/crewstarswebsite.jpg",
    stack: [html, css],
    website: "http://crewstars.nl/",
    desc: "Crew Stars is een Nederlands bedrijf die zich heeft gespecialiseerd in het aanleveren van personeel in de festivalbranche en kan door haar expertise in het vinden van de juiste mensen snel schakelen en heeft daarom een goede marktpositie weten te krijgen in de markt.",
    desc2:
      "Het bedrijf heeft TSX de opdracht gegeven een landing page te maken die interactief is voor nieuwe potentiele werknemers, maar ook informatie biedt aan toekomstige partners of huidige partners. Door de animaties en simpele layout hebben wij een interactieve website kunnen maken waar crewstars op heeft kunnen bouwen.",
  },
  {
    id: 10,
    title: "Babachoulz",
    category: "Applicatie",
    image: "/websites/babachoulzpage.png",
    stack: [nuxt, vue, ts],
    website: "https://babachoulz.com/",
    desc: "Babachulz is een kunstenaar die een frisse kijk heeft op artwork. Verkleed in een zwart outfit met bivakmuts staat hij op foto's van een groot aantal kunstwerken. Zijn collectie bestaat vooral uit met kleur geverfde schilderijen, maar ook digitale fictieve figuren of personen.",
    desc2:
      "Het bedrijf heeft TSX de opdracht gegeven een interactieve webshop te bouwen die een aantal van zijn kunstwerken ten toon kon stellen. Kunst kan worden georderd en meteen worden afgerekend via de stripe payment intergratie. De webapplicatie is uiters performant en is gemaakt met Nuxt3, Typescript en onderliggend Vue.",
  },
  {
    id: 11,
    title: "Salud Care",
    category: "Website & admin panel",
    image: "/websites/ultracura.png",
    stack: [next, react, ts],
    website: "https://saludcare.nl",
    desc: "SaludCare is een Nederlands bedrijf die zich heeft gespecialiseerd in het aanleveren van zorgpersoneel aan grote instanties. SaludCare kan door haar netwerk geschikte partijen vinden voor de juiste mensen. Door snel te schakelen  heeft het bedrijf daarom een goede marktpositie weten te krijgen in de Nederlandse markt.",
    desc2:
      "Het bedrijf heeft TSX de opdracht gegeven om een landing page te bouwen met meerdere contact pagina's. Er is gekozen voor groene en roze kleuren om de style van de onderneming aan te houden. De applicatie is gemaakt met NextJS en Typescript. Ondernemers kunnen via het inlogpartaal inloggen om gegevens bij te houden. Er is tijdens het maken van de website veel bedacht en gediscusseerd om het zo goed mogelijk naar wens te maken, en iedereen was zeer blij met het eindresultaat.",
  },

  {
    id: 12,
    title: "VETA NETWORK V2",
    category: "Application / Dashboard",
    image: "/websites/veta-network2.webp",
    stack: [next, react, ts],
    website: "https://veta-synergy.vercel.app/",
    desc: "Veta network is een internationaal bedrijf dat zich heeft gefocust op het connecten van muziekartiesten met influencers en visa versa. Daarnaast helpt het artiesten om zich te promoten via haar netwerk aan social media en spotify. Het bedrijf heeft zich gespecialiseerd in video en audio en heeft internationale ervaring met het aanleveren van artiesten over de hele wereld. ",
    desc2:
      "De applicatie die TSX heeft gemaakt voor VETA is gebaseerd op het connecten van artiesten en influencers. Je kunt door het gebruik van de applicatie muziek albums uploaden en aanvragen, die vervolgens worden goedgekeurd en na een procedure van meerdere weken op Spotify kunnen worden toegevoegd. De artiest kan een influencer uit de connecties van VETA uitzoeken om zo tot een geweldig resultaat te komen.",
  },
  {
    id: 13,
    title: "Empty Store",
    category: "Application / Dashboard",
    image: "/websites/voorbeeldstore.webp",
    stack: [next, react, ts],
    website: "https://cannabis-pink.vercel.app/",
    desc: "No description available",
    desc2: "",
  },
  {
    id: 14,
    title: "TSX Tech",
    category: "Landing page",
    image: "/websites/tsxtech.webp",
    stack: [next, react, ts],
    website: "https://tsxtech.nl",
    desc: "No description available",
    desc2: "",
  },
  {
    id: 9999,
    title: "Your website?",
    category: "By Mark Teekens",
    image: "/websites/yourproject.webp",
    stack: [vue, go, react, ts],
    website: "https://www.linkedin.com/in/markteekens/",
    desc: "Hire me now by pressing the link.",
    desc2: "",
  },
];
