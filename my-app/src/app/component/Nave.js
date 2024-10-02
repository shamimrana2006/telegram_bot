"use client";

import {
  faCircleCheck,
  faDiamond,
  faGamepad,
  faHome,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect } from "react";

const nav_item = (icon, name, url = "/",default_classList = "") => {
  return (
    <Link
      href={url}
      className={`rounded-xl cursor-pointer nav_item overflow-hidden text-gray-400 hover:text-white  transition  duration-300 flex flex-col justify-center items-center px-4 py-3 gap-2 ${default_classList} `}
    >
      <button className="flex flex-col gap-2 items-center">
        <span >{icon}</span>
        <span className="text-wrap text-sm">{name}</span>
      </button>
    </Link>
  );
};



function Nave() {
  useEffect(() => {
    let allItems = document.querySelectorAll(".nav_item");

    for (let element of allItems) {
      element.addEventListener("click", (e) => {
        allItems.forEach((element) => {
          element.classList.remove("bg-gray-900", "text-white");
          element.classList.add("text-gray-400");
        });
        e.currentTarget.classList.remove("text-gray-400");
        e.currentTarget.classList.add("bg-gray-900", "text-white");
      });
    }
  }, []);

  return (
    <div className="z-10 absolute bottom-0 left-0 w-full text-center bg-gray-700 text-black uppercase grid  grid-cols-5 gap-3  p-3 overflow-hidden">
      {nav_item(
        <img className="w-5"  src="/binance.png"></img>,
        "Home","/","bg-gray-900"
      )}
      {nav_item(
        <FontAwesomeIcon className="" icon={faGamepad} />,
        <spa>Game</spa>,"/game"
      )}
      {nav_item(
        <FontAwesomeIcon className="" icon={faCircleCheck} />,
        "Airdrop","/","!text-green-500"
      )}
      {nav_item(<FontAwesomeIcon icon={faUserGroup} />, "Friend")}
      {nav_item(
        <FontAwesomeIcon className="" icon={faDiamond} />,
        "Earn",
        "https://facebook.com"
      )}
    </div>
  );
}

export default Nave;
