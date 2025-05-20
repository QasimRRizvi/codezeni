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
    title: "Features",
    path: "/features",
    newTab: false,
  },
  {
    id: 3,
    title: "Documentation",
    path: "/docs",
    newTab: false,
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "Resources",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Getting Started",
        path: "/docs/getting-started",
        newTab: false,
      },
      {
        id: 52,
        title: "API Reference",
        path: "/docs/api",
        newTab: false,
      },
      {
        id: 53,
        title: "Examples",
        path: "/docs/examples",
        newTab: false,
      },
      {
        id: 54,
        title: "Community",
        path: "/community",
        newTab: false,
      },
    ],
  },
  {
    id: 6,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
];

export default menuData;

