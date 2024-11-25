import Image from "next/image";
import { Checkbox, Link } from "@nextui-org/react";
import { tutoriais } from "@/constants";

const Tutoriais = () => {
  return (
    <>
      <div className="flex flex-wrap md:flex-row flex-col justify-center items-center md:mb-32 mb-10 pt-28 md:px-10 gap-20">
        <div className="flex flex-col padding-y padding-x md:p-0 w-11/12 text-center gap-2 items-center">
          <div className="md:mb-5 w-full">
            <p className="text-sm text-gray-400 md:text-left text-center">
              Primeiro nível
              &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp; Segundo
              nível &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp;
              Terceiro nível
            </p>
          </div>
          <div className="flex flex-row justify-between items-start w-full pb-5">
            <h1 className="text-2xl btn-text-navy font-bold md:mt-0 mt-2">
              Tutoriais
            </h1>
          </div>
          <div className="flex flex-wrap w-full justify-between gap-3">
            {tutoriais.map((tuto) => (
              <div className="flex flex-row justify-between items-center bg-tutoriais">
                <div className="flex flex-col justify-start items-start pl-3 gap-2 w-8/12">
                  <h1 className="btn-text-navy text-lg leading-6">
                    {tuto.pergunta}
                  </h1>
                  <p className="text-gray-500 text-start">{tuto.texto}</p>
                </div>
                <Link href={tuto.link}>
                  <div className="flex flex-row w-max gap-2">
                    <p className="btn-text-navy text-base leading-5 mt-1">
                      Saiba mais
                    </p>
                    <Image
                      src="/ArrowRight.svg"
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tutoriais;
