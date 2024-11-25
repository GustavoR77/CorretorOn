import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "@/components";

import { mapaDoSite } from "@/constants";

const Mapa = () => {
  return (
    <>
      <div className="lg:pt-32 pt-20 px-5 w-full text-center flex flex-col lg:justify-center items-center lg:h-screen pb-20">
        {/* <p className="text-sm text-gray-700">LOREM IPSUM</p> */}
        <div className="flex justify-center items-center">
          <h1 className="text-4xl btn-text-navy font-bold lg:py-2 py-7">
            Mapa do Site
          </h1>
        </div>
        <div className="flex flex-wrap lg:justify-center justify-around md:w-10/12 w-full gap-5">
          {mapaDoSite.map((mapa) => (
            <div
              key={mapa.title}
              className="flex flex-col lg:justify-center items-center text-center mt-5 btn-text-navy gap-1 md:px-5 px-1 md:w-5/12 w-2/4"
            >
              <h1 className="text-2xl font-bold">{mapa.title}</h1>
              {mapa.links.map((mapas) => (
                <Link href={mapas.url}>
                  <p className="text-sm leading-7 font-normal">{mapas.title}</p>
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Link href="/">
            <CustomButton
              title={"Home"}
              containerStyles="background-navy rounded-2xl text-white hover:bg-blue-950 w-72 pb-20"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Mapa;
