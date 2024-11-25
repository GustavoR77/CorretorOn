import Image from "next/image";
import { CustomButton } from "@/components";

const SobreParceria = () => {
  return (
    <>
      <div className="lg:pt-16 pt-10 flex flex-wrap md:flex-row flex-col justify-evenly items-center px-5">
        <div className="padding-y padding-x md:p-0 w-full lg:w-5/12 text-center lg:text-left">
          <p className="text-sm text-gray-700">LOREM IPSUM</p>
          <h1 className="md:text-4xl text-3xl btn-text-navy font-bold mt-4">
            Parcerias com Helbor
          </h1>
          <p className="text-sm text-gray-700 leading-7 mt-7">
            Acesse os melhores imóveis do mercado, crie equipes, compartilhe
            agendas, utilize simuladores, registre visitas, gere relatórios de
            atividades, envie propostas e desfrute de diversas outras
            funcionalidades indispensáveis. Simplifique seu trabalho e alcance o
            sucesso no mercado imobiliário.
          </p>
          <p className="text-sm text-gray-700 leading-7 mt-7">
            Acesse os melhores imóveis do mercado, crie equipes, compartilhe
            agendas, utilize simuladores, registre visitas, gere relatórios de
            atividades, envie propostas e desfrut.
          </p>
        </div>
        <div className="flex md:px-0 padding-y justify-center items-center">
          <Image src="/helbor.png" alt="helbor" width={456} height={610} />
        </div>
      </div>
    </>
  );
};

export default SobreParceria;
