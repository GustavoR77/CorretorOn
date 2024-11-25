import Image from "next/image";
import { CustomButton } from "@/components";
import Link from "next/link";

const BeneficiosRevolucao = () => {
  return (
    <>
      <div className="md:mb-24 md:mt-0 md:py-7 py-10 flex md:flex-wrap md:flex-row flex-col justify-evenly items-center bg-beneficios">
        <div className="lg:ml-10 md:p-0 w-11/12 lg:w-4/12 text-center md:text-left flex flex-col justify-center md:items-start items-center gap-10">
          <div className="flex flex-col justify-center items-center lg:w-9/12 w-full">
            <h1 className="md:text-4xl text-3xl btn-text-navy font-bold mt-4">
              Faça parte da revolução 🤝
            </h1>
            <p className="text-sm text-gray-700 leading-7 mt-5">
              Acesse o sistema e descubra como a tecnologia pode facilitar o seu
              trabalho de corretor.
            </p>
          </div>
          <div className="flex justify-center md:flex-row flex-col items-center text-center w-full mb-10 gap-5">
            <Link href="/login">
              <CustomButton
                title="Login"
                containerStyles="bg-transparent btn-text-navy border border-navy rounded-2xl text-white hover:bg-sky-100 w-64"
              />
            </Link>
            <Link href="/cadastro">
              <CustomButton
                title="Cadastre-se agora"
                containerStyles="background-navy rounded-2xl text-white hover:bg-blue-950 w-64"
              />
            </Link>
          </div>
        </div>

        <div className="lg:flex lg:flex-col md:px-5 md:py-20 py-5 justify-center md:items-start items-center">
          <Image
            src="/beneficios-revolucao.png"
            alt="CorretorOn"
            width={452}
            height={281}
          />
        </div>
      </div>
    </>
  );
};

export default BeneficiosRevolucao;
