import EmpreendimentosListagem from "./widgets/EmpreendimentosListagem";

const EmpreendimentosLista = ({ searchParams }: { searchParams: any }) => {
  return (
    <>
      <div className="flex flex-wrap md:flex-row flex-col justify-center items-center md:mb-32 mb-10 md:pt-28 pt-20 md:px-10 gap-20">
        <div className="flex flex-col padding-y padding-x md:p-0 w-11/12 text-center gap-2 items-center">
          {/* <div className="md:mb-5 w-full">
            <p className="text-sm text-gray-400 md:text-left text-center">
              Primeiro nível
              &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp; Segundo
              nível &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp;
              Terceiro nível
            </p>
          </div> */}
          <div className="flex flex-col justify-center items-center">
            <h1 className="md:text-4xl text-2xl btn-text-navy font-bold md:mt-0 mt-2">
              Empreendimentos Helbor
            </h1>
            <p className="text-sm text-gray-700 leading-7 md:w-7/12 md:mt-5 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu.
            </p>
          </div>
          <EmpreendimentosListagem searchParams={searchParams} />
        </div>
      </div>
    </>
  );
};

export default EmpreendimentosLista;
