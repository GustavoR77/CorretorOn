"use client";

import { IEspelhoBloco } from "@/types";
import Image from "next/image";
import Link from "next/link";

const EmpreendimentosEspelhoBlocos = ({blocos, onSelected = (espelho:IEspelhoBloco) => {}}) => {

  return (
    <>
    
    {blocos && 
      <div className="md:mb-32 md:px-10 gap-20 w-full">
        <div className="padding-y padding-x md:p-0 text-center gap-2 items-center">
          <div className="flex flex-wrap items-center">
            {blocos.map((bloco: IEspelhoBloco, i) => (
              <button 
                className={`flex flex-row items-center gap-5 shadow mb-5 py-3 pr-7 mr-3 ${(bloco.unidades_disponiveis ?? 0) < 1 ? 'bg-red-400' : 'bg-green-400'}`} 
                key={i}
                onClick={() => onSelected(bloco)}
                >
                  <div className="flex items-center w-full gap-3 pl-7">
                    <p className="text-white md:text-base text-sm ">
                      {bloco.nome}
                    </p>
                  </div>
                <div className="flex flex-row gap-10 pl-7 p">
                  <p className="text-white  md:text-base text-sm">
                    {bloco.unidades_disponiveis}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    }
    </>
  );
};

export default EmpreendimentosEspelhoBlocos;
