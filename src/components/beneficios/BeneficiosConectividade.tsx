import Image from "next/image";

const BeneficiosConectividade = () => {
  return (
    <>
      <div className="md:mb-24 lg:mt-0 pt-10 flex md:flex-wrap md:flex-row flex-col justify-around items-center bg-beneficios">
        <div className="md:ml-10 md:p-0 w-full md:w-9/12 lg:w-4/12 text-center lg:text-left flex flex-col justify-center md:items-start items-center md:gap-28 gap-10">
          <div>
            <p className="text-sm text-gray-700">LOREM IPSUM</p>
            <h1 className="md:text-4xl text-3xl btn-text-navy font-bold mt-4">
              Conectividade
            </h1>
            <p className="text-sm text-gray-700 leading-7 mt-7">
              Tenha acesso exclusivo aos melhores e mais requisitados
              empreendimentos imobiliários do país, com uma ampla seleção de
              propriedades de alta qualidade para atender às suas necessidades.
            </p>
            <p className="text-sm text-gray-700 leading-7 mt-7">
              seleção de propriedades de alta qualidade para atender às suas
              necessidades.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:px-5 lg:py-20 py-5 justify-center md:items-start items-center">
          <Image
            src="/beneficios-conectividade.png"
            alt="CorretorOn"
            width={639}
            height={500}
          />
        </div>
      </div>
    </>
  );
};

export default BeneficiosConectividade;
