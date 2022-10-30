export const MENUITEMS = [
  { title: "About Us", type: "link", path: "/about-us" },
  {
    title: "Our Services",
    type: "sub",
    children: [
      { title: "IT", type: "link", path: "/it" },
      { title: "Education", type: "link", path: "/education" },
      { title: "Recruitment", type: "link", path: "/recruitment" },
    ],
  },

  { title: "Contact Us", type: "link", path: "/contact-us" },
];
