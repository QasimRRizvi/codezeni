import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/#about",
    newTab: false,
  },
  {
    id: 3,
    title: "Services",
    path: "/#services",
    newTab: false,
  },
  {
    id: 4,
    title: "Testimonials",
    path: "/#testimonials",
    newTab: false,
  },
  // {
  //   id: 5,
  //   title: "Resources",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 51,
  //       title: "Getting Started",
  //       path: "/docs/getting-started",
  //       newTab: false,
  //     },
  //     {
  //       id: 52,
  //       title: "API Reference",
  //       path: "/docs/api",
  //       newTab: false,
  //     },
  //     {
  //       id: 53,
  //       title: "Examples",
  //       path: "/docs/examples",
  //       newTab: false,
  //     },
  //     {
  //       id: 54,
  //       title: "Community",
  //       path: "/community",
  //       newTab: false,
  //     },
  //   ],
  // },
  {
    id: 6,
    title: "Contact",
    path: "/#contact",
    newTab: false,
  },
];

export default menuData;

