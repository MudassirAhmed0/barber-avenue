"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProductCarousel = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images.length) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // change slide every 3s
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full sm:h-[30vw] h-[300px] relative overflow-hidden">
      {images.map((item, index) => (
        <Link
          key={item.image}
          href={item.link || "#"}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={item.image}
            alt="product"
            fill
            className="object-cover"
            priority={index === 0}
          />
        </Link>
      ))}
    </div>
  );
};

export default ProductCarousel;
