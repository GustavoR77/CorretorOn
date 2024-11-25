import Image from "next/image";
import { CustomButton } from "@/components";

const BeneficiosInovacao = () => {
  return (
    <>
      <div className="md:mb-10 md:mt-3 my-10 flex md:flex-wrap md:flex-row flex-col justify-around items-center">
        <div className="lg:flex lg:flex-col hidden md:px-0 padding-y justify-center md:items-start items-center">
          <Image
            src="/beneficios-inovacao.png"
            alt="CorretorOn"
            width={640}
            height={500}
          />
        </div>
        <div className="flex flex-col justify-center items-center lg:p-0 w-10/12 md:w-9/12 lg:w-4/12 text-center lg:text-left lg:mr-20">
          <p className="text-sm text-gray-700">LOREM IPSUM</p>
          <h1 className="md:text-4xl text-3xl btn-text-navy font-bold mt-4">
            Inovação
          </h1>
          <p className="text-sm text-gray-700 leading-7 mt-7">
            Tenha acesso exclusivo aos melhores e mais requisitados
            empreendimentos imobiliários do país, com uma ampla seleção de
            propriedades de alta qualidade para atender às suas necessidades.
          </p>
          <p className="text-sm text-gray-700 leading-7 mt-5">
            seleção de propriedades de alta qualidade para atender às suas
            necessidades.
          </p>
          <CustomButton
            title={"Cadastre-se agora"}
            containerStyles="background-navy rounded-2xl text-white hover:bg-blue-950 w-72 mt-7"
          />
        </div>
        <div className="flex flex-col lg:hidden md:px-0 padding-y justify-center md:items-start items-center">
          <Image
            src="/beneficios-inovacao.png"
            alt="CorretorOn"
            width={640}
            height={500}
          />
        </div>
      </div>
    </>
  );
};

export default BeneficiosInovacao;
