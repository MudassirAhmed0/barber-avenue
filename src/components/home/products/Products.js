import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products = () => {
  const categories = [
    {
      title: "BARBER ESSENTIALS",
      image:
        "https://fadedculture.com/cdn/shop/files/scissor1.jpg?v=1730135092&width=540",
      link: "/",
    },
    {
      title: "Clothing",
      image:
        "https://fadedculture.com/cdn/shop/files/file001_Album_-1.jpg?v=1747415201&width=1080",
      link: "/",
    },
    {
      title: "Cologene AfterShave",
      image:
        "https://fadedculture.com/cdn/shop/files/clay_4.jpg?v=1727901050&width=1080",
      link: "/",
    },
  ];

  return (
    <section>
      <div className="myContainer flex flex-col items-center justify-center">
        <h2 className="text55">Products</h2>

        <div className="flex flex-wrap gap-4 justify-between w-full lg:my-vw60 my-10">
          {categories.map((category, index) => (
            <Link
              href={"/"}
              key={index}
              className="w-full sm:w-[31.5%] shadow-lg"
            >
              <div className="w-full flex flex-col">
                <div className="w-full sm:h-[30vw] h-[300px] relative">
                  <Image fill alt="product" src={category.image} unoptimized />
                </div>
                <span className="uppercase lg:text24 text-center mtext18 font-medium lg:py-vw20 py-3">
                  {category.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
