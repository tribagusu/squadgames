import React from "react";
import Image from "next/image";
import Link from "next/link";
import { gamesData } from "@/config/games";
import { HiArrowLongRight } from "react-icons/hi2";

const GamesCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:mx-[10rem]">
      {gamesData.map((game, i) => (
        <div
          key={i}
          className="bg-white rounded-3xl overflow-hidden shadow-md relative"
        >
          <Image
            src={game.pic}
            alt="foto"
            className="w-full h-56 object-cover"
          />
          <div className="py-4 px-10 flex flex-col lg:h-48">
            <Image src={game.logo} alt="logo" className="max-w-[200px] mb-4" />
            <p className=" text-base">{game.desc}</p>
            {/* <div className="flex mx-auto py-2"> */}

            {/* </div> */}
          </div>
          <div className="flex py-[2rem] px-10 text-darkPurple">
            <Link
              href={game.link}
              className="flex items-center gap-2 hover:translate-x-2 ease-in-out duration-300"
            >
              <span className="hover:underline">Lihat studi kasus</span>
              <span className="text-lg scale-x-150">
                <HiArrowLongRight />
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GamesCard;
