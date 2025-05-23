import { Blog } from "@/types/blog";

export const blogData: Blog[] = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    paragraph: "Explore the latest trends in web development, from AI integration to advanced frameworks, and how they're shaping the future of digital experiences.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Mastering Modern JavaScript: Best Practices for 2024",
    paragraph: "Discover essential JavaScript best practices, modern features, and techniques that every developer should know to build robust web applications.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Building Scalable Web Applications: A Comprehensive Guide",
    paragraph: "Learn the key principles and strategies for building scalable web applications that can handle growth while maintaining performance and reliability.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
