import Image from "next/image";

const FooterAtualizado = () => {
  return (
    <>
      <div className="lg:flex hidden justify-center items-end md:mt-24 mt-10 relative">
        <Image
          src="/arrow.png"
          alt="arrow"
          width={155}
          height={76}
          className="arrow-overlay"
        />
      </div>
      <div className="flex flex-wrap md:flex-row flex-col justify-center md:mb-32 mb-10 px-5">
        <div
          className="padding-y padding-x md:p-0 w-full lg:w-5/12 md:w-9/12 text-center lg:text-left"
          id="HomeGente"
        >
          <h1 className="md:text-4xl text-3xl btn-text-navy font-bold">
            Fique atualizado com as tendências do mercado imobiliário! 📨
          </h1>
          <p className="text-sm text-gray-700 leading-7 mt-3">
            Assine nossa newsletter e receba as últimas tendências, dicas
            valiosas e oportunidades imperdíveis para impulsionar sua carreira
            como corretor de imóveis. Não perca essa chance de estar sempre um
            passo à frente
          </p>
        </div>
        <div className="flex md:px-0 padding-y justify-center items-center">
          <form className="flex flex-col justify-center items-center md:items-end w-full">
            <input type="text" name="name" className="home__input" />
            <input type="email" name="email" className="home__input" />
            <button
              type="submit"
              className="background-navy rounded-2xl w-52 h-14 text-white flex justify-center items-center text-sm py-2 px-6 gap-3 hover:bg-blue-950"
            >
              <Image
                src="/PaperPlaneTilt.svg"
                alt="enviar"
                width={24}
                height={24}
              />
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FooterAtualizado;
