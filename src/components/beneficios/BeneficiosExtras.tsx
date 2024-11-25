import Image from "next/image";

const BeneficiosExtras = () => {
  return (
    <div className="flex flex-col max-md:flex-col flex-wrap justify-between mb-20">
      <div className="mt-10 padding-x padding-y max-width text-center md:w-7/12 w-full">
        <h1 className="text-4xl btn-text-navy font-bold">Recursos extras</h1>
        <p className="text-sm text-gray-700 leading-7 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-5 mt-10 text-center">
        <div className="flex flex-col justify-items-start items-center md:w-3/12 w-full px-3 gap-3">
          <div className="bg-homepotencialize rounded-full md:w-24 w-14 md:h-24 h-14 flex justify-center items-center mb-7">
            <Image src="/ChatText.png" alt="ChatText" width={36} height={36} />
          </div>
          <h1 className="text-xl btn-text-navy font-medium">Atendimento 24h</h1>
          <p className="text-sm text-gray-700 leading-7 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
        <div className="flex flex-col justify-items-start items-center md:w-3/12 w-full px-3 gap-3">
          <div className="bg-homepotencialize rounded-full md:w-24 w-14 md:h-24 h-14 flex justify-center items-center mb-7">
            <Image src="/ChatText.png" alt="ChatText" width={36} height={36} />
          </div>
          <h1 className="text-xl btn-text-navy font-medium">Agendamento</h1>
          <p className="text-sm text-gray-700 leading-7 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
        <div className="flex flex-col justify-items-start items-center md:w-3/12 w-full px-3 gap-3">
          <div className="bg-homepotencialize rounded-full md:w-24 w-14 md:h-24 h-14 flex justify-center items-center mb-7">
            <Image src="/ChatText.png" alt="ChatText" width={36} height={36} />
          </div>
          <h1 className="text-xl btn-text-navy font-medium">
            Imóveis exclusivos
          </h1>
          <p className="text-sm text-gray-700 leading-7 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeneficiosExtras;
