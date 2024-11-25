"use client";

import Image from "next/image";
import CustomButton from "../CustomButton";
import { Checkbox, Link } from "@nextui-org/react";
import { empreendimentosTabelaPrecos } from "@/constants";
import EmpreendimentosTabelas from "./widgets/EmpreendimentosTabelas";

const EmpreendimentosPreco = () => {
  return (
    <>
      <div className="flex flex-wrap md:flex-row flex-col justify-center items-center md:mb-32 mb-10 pt-28 md:px-10 gap-20">
        <div className="flex flex-col padding-y padding-x md:p-0 w-11/12 text-center gap-2 items-center">
          {/* <div className="md:mb-5 w-full">
            <p className="text-sm text-gray-400 md:text-left text-center">
              Primeiro nível
              &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp; Segundo
              nível &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp;
              Terceiro nível
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="md:text-4xl text-2xl btn-text-navy font-bold md:mt-0 mt-2">
              Tabelas de Preço 📑
            </h1>
          </div> */}
          <EmpreendimentosTabelas />
        </div>
      </div>
    </>
  );
};

export default EmpreendimentosPreco;
