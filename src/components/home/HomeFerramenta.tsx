"use client"
import Image from "next/image";
import CustomButtom from "../CustomButton";
import { homeFerramenta } from "@/constants";
import { useRouter } from "next/navigation";

const HomeFerramenta = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col max-md:flex-col flex-wrap justify-between">
      <div
        className="lg:mt-28 mt-8 padding-x padding-y max-width text-center lg:w-7/12"
        id="homeFerramenta"
      >
        <h1 className="md:text-4xl text-2xl btn-text-navy font-bold">
          CorretorOn: a melhor ferramenta para corretores de imóveis
        </h1>
        <p className="text-sm text-gray-700 leading-7 mt-3">
          Acesse os melhores imóveis do mercado, crie equipes, compartilhe
          agendas, utilize simuladores, registre visitas, gere relatórios de
          atividades, envie propostas e desfrute de diversas outras
          funcionalidades indispensáveis. Simplifique seu trabalho e alcance o
          sucesso no mercado imobiliário.
        </p>
      </div>
      <div className="flex justify-center flex-wrap text-center w-full">
        {homeFerramenta.map((item, i) => (
          <div className="md:w-5/12" key={i}>
            <Image
              src={item.image}
              alt={item.imageAlt}
              width={528}
              height={330}
              className="inline-block"
            />
            <div className="px-10">
              <h1 className="text-xl btn-text-navy font-medium">
                {item.title}
              </h1>
              <p className="text-sm text-gray-700 leading-7 font-normal">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-14 mb-14 padding-x padding-y max-width text-center">
        <CustomButtom
          title={"Cadastre-se agora"}
          containerStyles="background-navy rounded-2xl text-white hover:bg-blue-950 w-80"
          handleClick={()=> router.push('/cadastro')}
        />
      </div>
    </div>
  );
};

export default HomeFerramenta;
