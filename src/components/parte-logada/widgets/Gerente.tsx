"use client";

import Image from "next/image";

const Gerente = () => {
  return (
    <>
      <div className="bg-logado-material-apoio flex justify-center items-center">
        <div className="flex flex-col gap-5">
          <h1 className="btn-text-navy text-xl font-medium text-start">
            Entre em contato com o gerente
          </h1>
          <div className="flex flex-row gap-24">
            <div className="flex flex-row">
              <Image src="/profile.png" alt="perfil" width={60} height={60} />
              <div className="flex flex-col">
                <h1 className="btn-text-navy text-lg">Luís Henrique</h1>
                <p className="text-gray-500">luishenrique@helbor.com.br</p>
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <button className="btn-empreendimentos-whatsapp-logado text-white text-base">
                <Image
                  src="/Whatsapp-white.svg"
                  alt="Whatsapp"
                  width={24}
                  height={24}
                />
                Whatsapp
              </button>
              <button className="btn-empreendimentos-telefone-logado btn-text-navy text-base">
                <Image src="/PhoneCall.svg" alt="" width={24} height={24} />
                Telefone
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gerente;
