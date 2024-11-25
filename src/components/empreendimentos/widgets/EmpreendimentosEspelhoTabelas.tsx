"use client";

import { IEspelho } from "@/types";
import Image from "next/image";

const EmpreendimentosEspelhoTabelas = ({espelhos, onSelected = (espelho:IEspelho) => {}}) => {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center pt-10 w-full">
        {espelhos.map((espelho: IEspelho, i) => (
          <button className="flex flex-row w-full items-center gap-5 container-items mb-5 py-3" key={i} onClick={() => onSelected(espelho)}>
            <div className="flex items-center w-full gap-3 pl-7" >
              <Image src="/Buildings.svg" alt="bed" width={30} height={30} />
              <p className="text-gray-600 md:text-base text-sm pt-2 text-left">
                {espelho.nome}
              </p>
            </div>
            <div className="flex flex-row gap-10  w-full pl-7">
              Unidade(s) Livre(s): 
              <p className={`md:text-base text-sm `+ ((espelho.unidades_disponiveis ?? 0) < 1 ? 'text-red-500' : 'text-blue-600')}>
                {espelho.unidades_disponiveis}
              </p>
            </div>
          </button>
        ))}

      </div>
    </>
  );
};

export default EmpreendimentosEspelhoTabelas;
