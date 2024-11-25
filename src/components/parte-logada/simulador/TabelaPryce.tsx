import { Link } from "@nextui-org/react";


const TabelaPryce = () => {
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
          <div className="flex flex-col justify-center text-start items-start w-4/5 pb-5 gap-4">
            <p className="text-2xl btn-text-navy font-bold mt-5 text-start">
              Tabela Pryce
            </p>

            <div className="flex flex-col w-full justify-start items-start gap-5 pt-2">
              <div className="w-full">
                <form className="flex flex-wrap justify-between md:items-start items-center w-full">
                  <label className="label__campos-tabela">
                    <input
                      type="text"
                      name="name"
                      className="cadastro-imobiliaria__input"
                      placeholder="Campo 01"
                    />
                  </label>
                  <label className="label__campos-tabela">
                    <input
                      type="text"
                      name="email"
                      className="cadastro-imobiliaria__input"
                      placeholder="Campo 02"
                    />
                  </label>
                  <label className="label__campos-tabela">
                    <input
                      type="text"
                      name="cnpj-cpf"
                      className="cadastro-imobiliaria__input"
                      placeholder="Campo 03"
                    />
                  </label>
                  <label className="label__campos-tabela">
                    <input
                      type="text"
                      name="creci"
                      className="cadastro-imobiliaria__input"
                      placeholder="Campo 04"
                    />
                  </label>
                  <label className="label__campos-tabela">
                    <input
                      type="text"
                      name="lorem"
                      className="tabela-pryce-campo5__input"
                      placeholder="Campo 05"
                    />
                  </label>
                  <label className="label__campos-tabela">
                    <input
                      type="text"
                      name="cnpj-cpf"
                      className="cadastro-imobiliaria__input"
                      placeholder="Campo 03"
                    />
                  </label>
                  <label className="label__campos-tabela">
                    <input
                      type="text"
                      name="creci"
                      className="cadastro-imobiliaria__input"
                      placeholder="Campo 04"
                    />
                  </label>
                </form>
              </div>
            </div>
            <div className="flex flex-row items-end justify-end w-full gap-3">
              <Link href="">
                <button className="btn-simulador-pryce__cancelar btn-text-navy text-base">
                  Cancelar
                </button>
              </Link>
              <Link href="">
                <button className="btn-simulador-pryce__enviar text-white text-base">
                  Avançar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabelaPryce;
