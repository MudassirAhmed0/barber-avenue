import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCarousel from "./ProductCarousel";

const Products = () => {
  const categories = [
    {
      title: "BARBER ESSENTIALS",
      images:
       [
        {
        image:"/images/home/products/1.jpg",
        link:"#"
       },
        {
        image:"/images/home/products/2.jpg",
        link:"#"
       },
        {
        image:"/images/home/products/3.jpg",
        link:"#"
       },
        {
        image:"/images/home/products/4.jpg",
        link:"#"
       },
        {
        image:"/images/home/products/5.jpg",
        link:"#"
       },
        {
        image:"/images/home/products/6.jpg",
        link:"#"
       },
        {
        image:"/images/home/products/7.jpg",
        link:"#"
       },
        {
        image:"/images/home/products/8.jpg",
        link:"#"
       },
        {
        image:"/images/home/products/9.jpg",
        link:"#"
       },
        {
        image:"/images/home/products/10.jpg",
        link:"#"
       },
        {
        image:"/images/home/products/11.jpg",
        link:"#"
       },
        {
        image:"/images/home/products/12.jpg",
        link:"#"
       },
      ],
      link: "/",
      carousel:true
    },
    {
      title: "Merchandise",
      image:
        "https://fadedculture.com/cdn/shop/files/file001_Album_-1.jpg?v=1747415201&width=1080",
      link: "/",
    },
    {
      title: "Accessories",
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
              className="w-full sm:w-[31.5%] bg-white"
            >
              <div className="w-full flex flex-col">
                  {category.carousel ?
                  <ProductCarousel images={category.images}/>
                 :
                <div className="w-full sm:h-[30vw] h-[300px] relative">
                  <Image fill alt="product" src={category.image} unoptimized />
                </div>
                  }
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
