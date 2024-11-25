"use client";

import Image from "next/image";
import { Checkbox, Link } from "@nextui-org/react";
import { tutoriais } from "@/constants";
import { CustomButton, Gerente } from "@/components";

const PropostaConcluida = () => {
  return (
    <>
      <div className="flex flex-wrap md:flex-row flex-col justify-center items-center md:mb-32 mb-10 pt-28 md:px-10 gap-20">
        <div className="flex flex-col padding-y padding-x md:p-0 w-11/12 text-center gap-2 items-center">
          <div className="w-full">
            <p className="text-sm text-gray-400 md:text-left text-center">
              Primeiro nível
              &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp; Segundo
              nível &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp;
              Terceiro nível
            </p>
          </div>
          <div className="flex flex-col justify-center text-start items-center w-full pb-5 gap-4">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/CheckCircle.svg"
                alt="check"
                width={100}
                height={100}
              />
              <p className="btn-text-navy text-2xl font-semibold pt-4">
                Proposta enviada com sucesso!
              </p>
              <p className="text-gray-500 text-lg text-center leading-normal pt-2">
                Sua proposta foi enviada
              </p>
              <Link href="/">
                <CustomButton
                  title={"Home"}
                  containerStyles="background-navy rounded-2xl text-white hover:bg-blue-950 w-64 mt-7 pb-20"
                />
              </Link>
              <div className="flex flex-row justify-center items-center mt-4">
                <Gerente />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropostaConcluida;
