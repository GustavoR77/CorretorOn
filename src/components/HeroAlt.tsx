"use client"
import CustomButtom from "./CustomButton";
import { useRouter } from "next/navigation";

const HeroAlt = (props: {
  bg: string,
  title: React.ReactNode
}) => {
  const router = useRouter();


  return (
    <>
      <div className={props.bg}>
        <div className={"hero "}>
          <div className="flex flew-row flex-wrap">
            <div className="flex flex-col lg:pt-10 md:pt-32 pt-24 lg:pb-0 pb-16 ml-5 padding-x justify-center md:items-start lg:w-5/12 w-full lg:gap-5 md:gap-10 gap-5">
              <p className="lg:text-sm text-xs text-white md:text-start text-center">
                LOREM IPSUM
              </p>
              <div className="flex flex-col lg:gap-3">
                <h1 className="text-white lg:text-4xl text-3xl w-11/12 mt-3 lg:text-start text-center lg:font-normal font-semibold">
                  {props.title}
                </h1>

                <p className="text-white lg:text-base text-sm w-11/12 mt-5 lg:text-start text-center">
                  Tenha acesso exclusivo aos melhores e mais requisitados
                  empreendimentos imobiliários do país, com uma ampla seleção de
                  propriedades de alta qualidade para atender às suas
                  necessidades.
                </p>
              </div>
              <CustomButtom
                title="Cadastre-se"
                containerStyles="bg-white w-11/12 rounded-2xl mt-5 btn-text-navy hover:bg-gray-200"
                handleClick={()=> router.push('/cadastro')}
              />
            </div>
            <div className="xl:flex-[1.5] lg:flex hidden flex-col justify-end items-start w-full">
              <div className="flex flex-col justify-center items-center"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAlt;
