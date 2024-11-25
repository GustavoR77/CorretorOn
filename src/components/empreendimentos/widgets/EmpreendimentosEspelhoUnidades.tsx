"use client";

import { IEspelhoBloco } from "@/types";
import Image from "next/image";
import Link from "next/link";

const EmpreendimentosEspelhoUnidades = ({unidades}) => {

  const getColor = (status) => {
    switch (status) {
        case 'Escriturada':
            return '#FF0000';
        case 'Em Negociação':
            return '#99CCFF';
        case 'Disponível':
            return '#66FF99';
        case 'Indisponível':
            return '#ffd1d1';
        case 'Suspensão Helbor':
            return '#FFCC00';
        case 'Reservada com Proposta':
            return '#ff944c';
        case 'Pré-Escritura':
            return '#dfdfff';
        case 'Permutada':
            return '#FF6666';
        default:
            return '#FFF'
    }
  }

  return (
    <>
    
    {unidades.data && 
      <div className="md:mb-32 md:px-10 gap-20 w-full">
        <div className="padding-y padding-x md:p-0 text-center gap-2 items-center">
          <div className="grid grid-cols-6">
            {unidades.data.map((unidade, i) => (
              <div 
                className={`flex flex-col justify-between items-center gap-5 shadow mb-5 py-3 mr-3 `} 
                style={{backgroundColor: getColor(unidade.status)}}
                key={i}
                >
                  <p>{unidade.status}</p>
                  <p className="font-bold">{unidade.nome}</p>
                  <p>{(unidade.area)} m²</p>
                  <p>{unidade.reserva}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    }
    </>
  );
};

export default EmpreendimentosEspelhoUnidades;
