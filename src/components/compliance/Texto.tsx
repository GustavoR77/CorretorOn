import { decode } from "html-entities";

const Texto = ({ data }) => {
  return (
    <>
      <div className="md:mb-20 md:mt-0 md:py-2 py-10 flex md:flex-wrap md:flex-row flex-col justify-around items-start gap-9">
        <div className="md:p-0 w-full md:w-10/12 text-center md:text-left flex flex-col justify-center md:items-start items-center md:gap-28 gap-10">
          {/* <div className="md:mt-5">
            <p className="md:pt-20 pt-24 md:text-sm text-xs text-gray-400 text-left">
              Primeiro nível
              &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp; Segundo
              nível &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp;
              Terceiro nível
            </p>
          </div> */}
          <div className="flex flex-col md:px-0 px-7 items-center justify-center pt-20">
            <h1 className="text-3xl btn-text-navy font-medium mt-4 text-center">
              {data.title}
            </h1>
            <p dangerouslySetInnerHTML={{ __html: decode(data.text) }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Texto;
