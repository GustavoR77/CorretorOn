"use client";

import { Link } from "@nextui-org/react";
import { FormEvent, useState } from "react";
import AuthResource from "@/resources/auth";
import { useRouter } from "next/navigation";
import useFormError from "@/hooks/FormError";
import { CryptoJS } from "crypto-js";
import { encrypt } from "@/libs/crypt";

const EsqueciSenha = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const formError = useFormError();
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    AuthResource.forgotPassword({ email: email })
      .then((data) => {
        router.push(
          "/login/esqueci-senha/" + encodeURIComponent(encrypt(email))
        );
      })
      .catch((error) => {
        formError.showErrors(error.response?.data ?? error.response);
        setLoading(false);
      });
  }

  return (
    <>
      <div className="flex flex-wrap md:flex-row flex-col justify-center md:mb-32 mb-10 pt-28 md:px-5 gap-20">
        <div className="flex flex-col padding-y padding-x md:p-0 w-full text-center md:text-left gap-2">
          {/* <div className="md:mb-5 md:pl-20">
            <p className="text-sm text-gray-400 md:text-left text-center pb-10">
              Primeiro nível
              &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp; Segundo
              nível
            </p>
          </div> */}
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="btn-text-navy text-3xl font-semibold">
              Esqueceu sua senha? 🔒
            </p>
            <p className="text-gray-500 text-sm text-center md:w-4/12 leading-normal">
              Não se preocupe! Insira seu e-mail abaixo para receber o código e
              resetar sua senha.
            </p>
            <div className="pb-20">
              <form
                className="flex flex-col justify-center md:items-start items-center w-full"
                onSubmit={onSubmit}
              >
                <label className="label__email">
                  <input
                    type="email"
                    name="email"
                    className="cadastro__input cadastro__input__mobile"
                    placeholder="E-mail"
                    onChange={(evt) => setEmail(evt.target.value)}
                  />
                </label>
                {formError.ErrorMessage("email")}
                <button
                  type="submit"
                  className="cadastro__submit text-white text-sm gap-3 hover:bg-blue-950"
                >
                  Resetar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EsqueciSenha;
