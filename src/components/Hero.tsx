"use client";

import Image from "next/image";
import CustomButtom from "./CustomButton";
import { useRouter } from "next/navigation";

const Hero = (props: {bg: string}) => {
  const router = useRouter();


  return (
    <>
      <div className={props.bg}>
        <div className={"hero "}>
          <div className="flex flew-row flex-wrap">
            <div className="flex flex-col pt-5 md:ml-5 padding-x justify-center items-center lg:w-5/12">
              <h1 className="text-white md:text-4xl text-2xl md:w-11/12 lg:text-start text-center w-full pt-24 font-semibold md:font-medium">
                Cadastre-se e desfrute das vantagens do nosso app.👌
              </h1>

              <p className="text-white md:text-base text-sm md:w-11/12 mt-5 text-center lg:text-start">
                Tenha acesso exclusivo aos melhores e mais requisitados
                empreendimentos imobiliários do país, com uma ampla seleção de
                propriedades de alta qualidade para atender às suas necessidades.
              </p>
              <CustomButtom
                title="Cadastre-se"
                containerStyles="bg-white w-11/12 rounded-2xl mt-5 btn-text-navy hover:bg-gray-200"
                handleClick={()=> router.push('/cadastro')}
              />
              <div className="flex lg:justify-between justify-evenly md:mt-7 mt-5 w-11/12">
                <Image
                  src="/google.png"
                  alt="Google Play"
                  width={167}
                  height={56}
                />
                <Image src="/apple.png" alt="App Store" width={167} height={56} />
              </div>
            </div>
            <div className="xl:flex-[1.5] flex flex-col justify-end lg:items-start w-full">
              <div className="flex flex-col justify-center items-center pt-2 lg:pt-0">
                <Image
                  src="/rolar.png"
                  alt="rolagem"
                  width={32}
                  height={32}
                  className=""
                />
                <p className="text-white text-xs mb-5">Role para ver mais</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
