import Image from "next/image";
import { Link } from "@nextui-org/react";
import { CustomButton } from "@/components";

const TutoriaisIndividual = () => {
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
          <div className="flex flex-col justify-center text-start items-start w-3/4 pb-5 gap-4">
            <p className="text-2xl btn-text-navy font-bold mt-5 text-start">
              Como agendar uma visita?
            </p>
            <p className="text-base text-gray-700 leading-8">
              Curabitur tempor quis eros tempus lacinia. Nam bibendum
              pellentesque quam a convallis. vulputate nisi. Integer in felis
              sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean
              feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam
              metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris
              sit amet magna non ligula vestibulum eleifend. Nulla varius
              volutpat turpis sed lacinia. Nam eget mi in purus lobortis
              eleifend. Sed nec ante dictum sem condimentum ullamcorper quis
              venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.
            </p>
            <div className="flex justify-center items-center w-full">
              <Image
                src="/PlayCircle.svg"
                alt="media"
                width={134}
                height={134}
              />
            </div>
            <p className="text-base text-gray-700 leading-8">
              Curabitur tempor quis eros tempus lacinia. Nam bibendum
              pellentesque quam a convallis. vulputate nisi. Integer in felis
              sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean
              feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam
              metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris
              sit amet magna non ligula vestibulum eleifend. Nulla varius
              volutpat turpis sed lacinia. Nam eget mi in purus lobortis
              eleifend. Sed nec ante dictum sem condimentum ullamcorper quis
              venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.
            </p>
            <p className="text-base text-gray-700 leading-8">
              Curabitur tempor quis eros tempus lacinia. Nam bibendum
              pellentesque quam a convallis. vulputate nisi. Integer in felis
              sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean
              feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam
              metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris
              sit amet magna non ligula vestibulum eleifend. Nulla varius
              volutpat turpis sed lacinia. Nam eget mi in purus lobortis
              eleifend. Sed nec ante dictum sem condimentum ullamcorper quis
              venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.
            </p>
            <div className="flex flex-row items-end justify-end w-full gap-3">
              {" "}
              <Link href="/home/tutoriais">
                <CustomButton
                  title="Voltar para tutoriais"
                  containerStyles="bg-transparent btn-text-navy border border-navy rounded-2xl text-white hover:bg-sky-100 w-56"
                />
              </Link>
              <Link href="/home">
                <CustomButton
                  title="Voltar para home"
                  containerStyles="background-navy rounded-2xl text-white hover:bg-blue-950 w-56"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutoriaisIndividual;
