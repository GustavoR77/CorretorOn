import Image from "next/image";
import CustomButtom from "../CustomButton";
import Link from "next/link";
import { homeCrescimento } from "@/constants";

const HomeFunciona = () => {
  return (
    <div className="flex flex-col max-md:flex-col flex-wrap justify-between">
      <div
        className="flex flex-col lg:mt-28 mt-10 justify-center items-center padding-x padding-y text-center w-full"
        id="homeFunciona"
      >
        <h1 className="md:text-4xl text-3xl btn-text-navy font-bold">Como funciona</h1>
        <p className="text-sm text-gray-700 leading-7 mt-3 lg:w-5/12 w-11/12">
          Descubra o poder do CorretorOn: a ferramenta que revoluciona o
          trabalho dos corretores de imóveis. Explore suas funcionalidades
          inovadoras e alcance o máximo desempenho em suas vendas.
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-5 mt-10">
        <div className="flex justify-items-start items-center w-5/12 home__shadow rounded-2xl home__rectangle">
          <div className="px-4">
            <div className="background-navy rounded-full w-14 p-3">
              <Image src="/SignIn.png" alt="" width={32} height={32} />
            </div>
          </div>
          <div className="px-3">
            <h1 className="text-xl btn-text-navy font-medium">Cadastre-se</h1>
            <p className="text-sm text-gray-700 leading-7 font-normal">
              Cadastre-se e garanta acesso a diversos benefícios
            </p>
          </div>
        </div>
        <div className="flex justify-items-start items-center w-5/12 home__shadow rounded-2xl home__rectangle">
          <div className="px-4">
            <div className="background-navy rounded-full w-14 p-3">
              <Image src="/UsersFour.png" alt="" width={32} height={32} />
            </div>
          </div>
          <div className="px-3">
            <h1 className="text-xl btn-text-navy font-medium">
              Monte a sua equipe
            </h1>
            <p className="text-sm text-gray-700 leading-7 font-normal">
              Convoque o seu time de corretores e comece a alavancar as vendas
            </p>
          </div>
        </div>
        <div className="flex justify-items-start items-center w-5/12 home__shadow rounded-2xl home__rectangle">
          <div className="px-4">
            <div className="background-navy rounded-full w-14 p-3">
              <Image src="/Buildings-white.svg" alt="" width={32} height={32} />
            </div>
          </div>
          <div className="px-3">
            <h1 className="text-xl btn-text-navy font-medium">
              Tenha acesso aos melhores imóveis
            </h1>
            <p className="text-sm text-gray-700 leading-7 font-normal">
              Cadastre-se e garanta acesso aos melhores imóveis
            </p>
          </div>
        </div>
        <div className="flex justify-items-start items-center w-5/12 home__shadow rounded-2xl home__rectangle">
          <div className="px-4">
            <div className="background-navy rounded-full w-14 p-3">
              <Image src="/CalendarCheck.png" alt="" width={32} height={32} />
            </div>
          </div>
          <div className="px-3">
            <h1 className="text-xl btn-text-navy font-medium">
              Agende visitas e feche vendas!
            </h1>
            <p className="text-sm text-gray-700 leading-7 font-normal">
              Agende visitas, tenha acesso a todos os registros, simuladores e
              muito mais
            </p>
          </div>
        </div>
      </div>
      <div className="mt-24 padding-x padding-y max-width text-center w-11/12 bg-homepotencialize rounded-2xl">
        <h1 className="md:text-4xl text-2xl btn-text-navy font-bold mt-12">
          Acompanhe o nosso crescimento 🌱
        </h1>
        <p className="text-sm text-gray-700 leading-7 mt-3">
          Venha fazer parte desse sucesso
        </p>
        <div className="flex justify-center flex-wrap text-center w-full mt-10">
          {homeCrescimento.map((item, i) => (
            <div className="lg:w-1/4 home__square" key={i}>
              <div className="px-10">
                <h1 className="md:text-7xl text-6xl btn-text-navy font-bold">
                  {item.qty}
                </h1>
                <p className="text-sm text-gray-700 leading-7 font-normal">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center md:flex-row flex-col text-center w-full mt-10 mb-10 gap-7">
          <Link href="/login">
            <CustomButtom
              title="Login"
              containerStyles="bg-transparent btn-text-navy border border-navy rounded-2xl text-white hover:bg-sky-100 lg:w-80 w-52"
            />
          </Link>
          <Link href="/cadastro">
            <CustomButtom
              title="Cadastre-se agora"
              containerStyles="background-navy rounded-2xl text-white hover:bg-blue-950 lg:w-80 w-52"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeFunciona;
