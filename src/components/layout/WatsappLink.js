import Image from "next/image";
import Link from "next/link";
import React from "react";
const WatsappLink = ({ link }) => {
  return (
    <Link
      href={link || "#"}
      target="_blank"
      className="hover:animate-none animate- bounce block lg:size-[3.3vw] sm:size-[45px] size-[35px] fixed lrf2 lg:mx-[1.71875vw] mx-[15px] bottom-[15px] lg:bottom-[1.71875vw] z-[999] whatsappp opacity-0"
    >
      <Image fill alt="watsapp-link" src="/images/icons/sticky-watsapp.svg" />
    </Link>
  );
};

export default WatsappLink;
