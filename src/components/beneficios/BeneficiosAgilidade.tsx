import Image from "next/image";

const BeneficiosAgilidade = () => {
  return (
    <>
      <div className="md:mb-10 md:mt-3 my-10 flex md:flex-wrap md:flex-row flex-col justify-around items-center">
        <div className="lg:flex lg:flex-col hidden md:px-0 padding-y justify-center md:items-start items-center">
          <Image
            src="/beneficios-agilidade.png"
            alt="CorretorOn"
            width={641}
            height={500}
          />
        </div>
        <div className="flex flex-col justify-center items-center md:p-0 w-10/12 md:w-8/12 lg:w-4/12 text-center lg:text-left lg:mr-20">
          <p className="text-sm text-gray-700">LOREM IPSUM</p>
          <h1 className="md:text-4xl text-3xl btn-text-navy font-bold mt-4">
            Agilidade
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
        </div>
        <div className="flex flex-col lg:hidden md:px-0 padding-y justify-center md:items-start items-center">
          <Image
            src="/beneficios-agilidade.png"
            alt="CorretorOn"
            width={641}
            height={500}
          />
        </div>
      </div>
    </>
  );
};

export default BeneficiosAgilidade;
