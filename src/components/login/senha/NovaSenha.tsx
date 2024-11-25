"use client";

import Image from "next/image";
import CustomButton from "../../CustomButton";
import { Checkbox, Link } from "@nextui-org/react";
import AuthResource from "@/resources/auth";
import { FormEvent, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import useFormError from "@/hooks/FormError";
import { InputMask } from 'primereact/inputmask';
import { NotifyContext } from "@/providers/NotifyProvider";

const NovaSenha = ({email}) => {
  const {notify} = useContext(NotifyContext)
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [paswordConfirmation, setPaswordConfirmation] = useState('');
  const [loading, setLoading] = useState(false);
  const formError = useFormError();
  const router = useRouter(); 


  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    AuthResource.resetPassword({
      "code": code,
      "password": password,
      "password_confirmation": paswordConfirmation,
      "email": email
    }).then(data => {
      
      notify?.current?.show({
          severity: 'success', sticky: true, content: (
              <div className="p-flex p-flex-column" style={{flex: '1'}}>
                  <div className="p-text-center">
                      <h4>Senha alterada com sucesso</h4>
                  </div>
              </div>
          ),
          life: 3000,
      });

      router.push('/login');
    }).catch(error => {
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
          <div className="flex flex-col justify-center items-center md:gap-5">
            <p className="btn-text-navy md:text-3xl text-2xl font-semibold">
              Entre com a sua nova senha 🔑
            </p>
            <p className="text-gray-500 text-sm text-center md:w-4/12 leading-normal mb-2 md:mb-0">
              Entre com a sua nova senha nos campos abaixo para finalizar a
              mudança de senha
            </p>
            <div className="pb-20">
              <form className="flex flex-col justify-center md:items-start items-center w-full" onSubmit={onSubmit}>
                {formError.ErrorMessage('code')}
                <InputMask className="cadastro__input" mask="99999" placeholder="Código" onChange={(evt) => setCode(evt.target.value ?? '')}/>
                
                {formError.ErrorMessage('password')}
                <label className="label__password">
                  <input
                    type="password"
                    name="password"
                    className="cadastro__input"
                    placeholder="Senha"
                    onChange={(evt) => setPassword(evt.target.value ?? '')}
                  />
                </label>
                
                <label className="label__password">
                  <input
                    type="password"
                    name="check-password"
                    className="cadastro__input"
                    placeholder="Confirmar Senha"
                    onChange={(evt) => setPaswordConfirmation(evt.target.value ?? '')}
                  />
                </label>
                  <button
                    type="submit"
                    className="cadastro__submit text-white text-sm gap-3 hover:bg-blue-950"
                  >
                    Confirmar
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NovaSenha;
