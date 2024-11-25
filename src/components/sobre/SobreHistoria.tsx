import Image from "next/image";
import { CustomButton } from "@/components";

const SobreHistoria = () => {
  return (
    <>
      <div className="lg:mb-24 md:mt-3 my-10 flex md:flex-wrap md:flex-row flex-col justify-center items-center">
        <div className="flex flex-col md:px-0 padding-y justify-center md:items-start items-center lg:gap-20 md:gap-10 gap-5">
          <p className="text-sm text-gray-400 text-left">
            Home &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp; Sobre nós
          </p>
          <Image
            src="/sobre-historia.png"
            alt="helbor"
            width={648}
            height={440}
            className="rounded-2xl"
          />
        </div>
        <div className="md:ml-10 md:p-0 w-10/12 lg:w-4/12 text-center lg:text-left">
          <h1 className="md:text-4xl text-3xl btn-text-navy font-bold mt-4">
            Conheça nossa história
          </h1>
          <p className="text-sm text-gray-700 leading-7 mt-7">
            Acesse os melhores imóveis do mercado, crie equipes, compartilhe
            agendas, utilize simuladores, registre visitas, gere relatórios de
            atividades, envie propostas e desfrute de diversas outras
            funcionalidades indispensáveis.
          </p>
          <p className="text-sm text-gray-700 leading-7 mt-7">
            Acesse os melhores imóveis do mercado, crie equipes, compartilhe
            agendas, utilize simuladores, registre visitas, gere relatórios
          </p>
        </div>
      </div>
    </>
  );
};

export default SobreHistoria;
