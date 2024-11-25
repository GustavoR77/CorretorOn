import Image from "next/image";
import { homeQuote } from "@/constants";

const HomeGente = () => {
  return (
    <div className="flex flex-col max-md:flex-col flex-wrap justify-between mb-20">
      <div
        className="lmt-10 padding-x padding-y max-width text-center md:w-9/12"
        id="HomeGente"
      >
        <h1 className="md:text-4xl text-3xl btn-text-navy font-bold">
          O que andam falando da gente? 💬
        </h1>
        <p className="text-sm text-gray-700 leading-7 mt-3">
          Descubra o que nossos usuários estão dizendo sobre nós: depoimentos
          reais que comprovam a excelência do CorretorOn. <br />
          Leia as experiências de sucesso de corretores e descubra por que somos
          a escolha preferida do mercado imobiliário.
        </p>
      </div>
      <div className="flex justify-center flex-wrap md:gap-7 gap-10 mt-10">
        {homeQuote.map((quote) => (
          <div
            className="flex flex-col justify-center items-center md:w-5/12 w-9/12 home__shadow rounded-2xl home__quote relative lg:mt-0 mt-3"
            key={quote.name}
          >
            <Image
              src="/aspas.svg"
              alt="aspas"
              width={75}
              height={56}
              className="absolute image-overlay"
            />
            <div className="px-7">
              <p className="text-lg btn-text-navy leading-7 font-normal mt-16 text-center">
                {quote.text}
              </p>
            </div>
            <hr className="w-11/12 mt-20"></hr>
            <div className="flex justify-center items-center my-5">
              <div>
                <Image src={quote.image} alt="" width={66} height={66} />
              </div>
              <div className="ml-4">
                <p className="text-lg btn-text-navy ">{quote.name}</p>
                <p className="text-sm text-gray-700 leading-7">
                  {quote.job},
                  <br />
                  {quote.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeGente;
