"use client";

import Image from "next/image";
import CustomButtom from "../CustomButton";
import { IEmpreendimento } from "@/types";
import AgendarVisitaModal from "../modals/AgendarVisitaModal";
import { useState } from "react";

const EmpreendimentosHero = ({bg, produto}: {bg: string, produto: IEmpreendimento}) => {
  const [visibleAgendarVisita, setVisibleAgendarVisita] = useState(false);

  return (
    <>
      <div
        className={bg + " bg-[url(" + produto?.foto_fundo_topo + ")]"}
        style={{ backgroundImage: 'url("' + produto?.foto_fundo_topo + '")' }}
      >
        <div className={"hero "}>
          <div className="flex flew-row flex-wrap">
            <div className="flex flex-col pt-32 md:pb-10 pb-5 lg:ml-5 padding-x justify-center lg:items-start lg:w-5/12 w-full md:gap-28 gap-5">
              <div className="flex flex-col justify-center items-center text-white lg:text-left text-center">
                {/* <p className="md:text-sm text-xs">LOREM IPSUM</p> */}
                <h1 className="md:text-4xl text-2xl w-11/12 mt-3 font-bold lg:font-medium">
                  {produto?.nome}
                </h1>

                <p className="md:text-base text-xs w-11/12 mt-5">
                  {produto?.endereco}
                </p>
              </div>
              <div className="max-width flex md:flex-row flex-col justify-start gap-5 text-white">
                <button className="btn-empreendimentos-hero lg:w-64 md:w-48 w-56 flex lg:justify-between justify-around items-center text-sm py-2 lg:px-7 px-2"
                  onClick={() => setVisibleAgendarVisita(true)}
                >
                  Agendar visita{" "}
                  <p className="lg:flex hidden">&nbsp; &nbsp; &gt;</p>
                  <Image src="/Calendar.svg" alt="" width={32} height={32} />
                </button>

                <button className="btn-empreendimentos-hero lg:w-64 md:w-48 w-56 flex lg:justify-between justify-around items-center text-sm py-2 lg:px-7 px-2">
                  Tabela de preços{" "}
                  <p className="lg:flex hidden">&nbsp; &nbsp; &gt;</p>
                  <Image src="/ChartBar.png" alt="" width={32} height={32} />
                </button>
                
                <button className="btn-empreendimentos-hero lg:w-64 md:w-48 w-56 flex lg:justify-between justify-around items-center text-sm py-2 lg:px-7 px-2">
                  Tabela de preços{" "}
                  <p className="lg:flex hidden">&nbsp; &nbsp; &gt;</p>
                  <Image src="/HandCoins.svg" alt="" width={32} height={32} />
                </button>
              </div>
            </div>
            <div className="xl:flex-[1.5] md:flex hidden flex-col justify-end items-start w-full">
              <div className="flex flex-col justify-center items-center"></div>
            </div>
          </div>
        </div>
      </div>

      <AgendarVisitaModal onHide={(value) => setVisibleAgendarVisita(value)} visible={visibleAgendarVisita} empreendimentoId={produto.id?.toString()}/>
    </>
  );
};

export default EmpreendimentosHero;
