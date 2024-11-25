"use client";

import Image from "next/image";
//import { ProgressBar } from "@/components";
import { CustomButton } from "@/components";

import { useState } from "react";

const SobreTrajetoria = () => {
  return (
    <div className="lg:py-32 py-10 flex flex-wrap md:flex-row flex-col justify-evenly items-center bg-gray-100">
      <div className="padding-y padding-x md:p-0 w-full lg:w-4/12 md:w-5/12 text-center md:text-left">
        <h1 className="md:text-4xl text-3xl btn-text-navy font-bold mt-4">
          Conheça nossa sólida trajetória
        </h1>
        <p className="text-sm text-gray-700 leading-7 mt-5">
          Bem-vindos à nossa empresa de renome no ramo imobiliário! Desde a
          nossa fundação, temos nos dedicado a fornecer soluções abrangentes e
          inovadoras para atender às necessidades de nossos clientes no mercado
          imobiliário. Com uma trajetória sólida e uma equipe apaixonada pelo
          que faz, estabelecemos um padrão de excelência em todos os aspectos do
          nosso trabalho.
        </p>
      </div>
      <div className="padding-y padding-x md:p-0 w-full md:w-4/12 text-center md:text-left">
        {/* <ProgressBar /> */}
        <h1 className="text-2xl text-gray-700 mt-4">
          Primeira unidade em São Paulo
        </h1>
        <p className="text-sm text-gray-700 leading-7 mt-3">
          Acesse os melhores imóveis do mercado, crie equipes, compartilhe
          agendas, utilize simuladores, registre visitas, gere relatórios de
          atividades, envie propostas e desfrute de diversas outras
          funcionalidades indispensáveis. Simplifique seu trabalho e alcance o
          sucesso no mercado imobiliário.
        </p>
      </div>
    </div>
  );
};

export default SobreTrajetoria;
