"use client";
import Image from "next/image";
import { Checkbox, Link } from "@nextui-org/react";
import AuthResource from "@/resources/auth";
import { FormEvent, useContext, useState } from "react";
import useFormError from "@/hooks/FormError";
import { AuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import ConfigResource from "@/resources/configResource";
import _ from "lodash";
import EmpreendimentoResource from "@/resources/empreendimentoResource";
import LoadingModal from "../loading/LoadingModal";
import { Password } from "primereact/password";

var loaded = false;
const Cadastro = () => {
  const [loading, setLoading] = useState(false);
  const formError = useFormError();
  const router = useRouter();

  const [optPorOndeNosConheceu, setOptPorOndeNosConheceu] = useState([]);
  const [optTipoCadastro, setOptTipoCadastro] = useState({});
  const [optGerente, setOptGerente] = useState({});
  const [optRegiao, setOptRegiao] = useState({});

  const [name, setName] = useState<string>();
  const [sobrenome, setSobrenome] = useState<string>();
  const [telefone, setTelefone] = useState<string>();
  const [creci, setCreci] = useState<string>();
  const [tipocadastro, setTipocadastro] = useState<string>();
  const [regiao, setRegiao] = useState<string>();
  const [gerente, setGerente] = useState<string>();
  const [por_onde_nos_conheceu, setPorOndeNosConheceu] = useState<string>();
  const [outros_por_onde_nos_conheceu, setOutrosPorOndeNosConheceu] =
    useState<string>();
  const [aceito_termos_uso_politica_privacidade, setAceitoTermos] =
    useState<boolean>(false);
  const [email, setEmail] = useState<string>();
  const [senha, setSenha] = useState<string>();
  const [senha_confirmation, setSenhaConfirmation] = useState<string>();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const formData = {
      name: name,
      sobrenome: sobrenome,
      telefone: telefone,
      creci: creci,
      tipocadastro: tipocadastro,
      cidades_atuacao: regiao,
      corretor_resp: gerente,
      por_onde_nos_conheceu: por_onde_nos_conheceu,
      outros_por_onde_nos_conheceu: outros_por_onde_nos_conheceu,
      aceito_termos_uso_politica_privacidade:
        aceito_termos_uso_politica_privacidade,
      email: email,
      senha: senha,
      senha_confirmation: senha_confirmation,
    };

    AuthResource.register(formData)
      .then((data) => {
        router.push("/cadastro/feito");
      })
      .catch((error) => {
        formError.showErrors(error.response?.data ?? error.response);
        setLoading(false);
      });
  }

  if (!loaded) {
    ConfigResource.porOndeNosConheceu().then((response) => {
      setOptPorOndeNosConheceu(response.data);
    });

    ConfigResource.tipoCadastro().then((response) => {
      setOptTipoCadastro(response.data);
    });

    ConfigResource.gerente().then((response) => {
      setOptGerente(_.get(response.data, "data"));
    });

    EmpreendimentoResource.regioes().then((response) => {
      setOptRegiao(response.data);
    });

    loaded = true;
  }

  return (
    <>
      <div className="flex flex-wrap md:flex-row flex-col justify-center md:mb-32 mb-10 pt-28 md:px-5 gap-20">
        <div className="flex flex-col padding-y padding-x md:p-0 lg:w-5/12 md:w-11/12 w-full text-center lg:text-left gap-2 md:ml-14">
          {/* <div className="md:mb-5">
            <p className="text-sm text-gray-400 md:text-left text-center">
              Primeiro nível
              &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp; Segundo
              nível
            </p>
          </div> */}
          <h1 className="lg:text-4xl md:text-3xl text-2xl btn-text-navy font-bold md:mt-0 mt-2">
            Cadastre-se na melhor plataforma 👍
          </h1>
          <p className="text-sm text-gray-700 leading-7 md:w-11/12 md:mt-5 mt-2">
            Tenha acesso exclusivo aos melhores e mais requisitados
            empreendimentos imobiliários do país, com uma ampla seleção de
            propriedades de alta qualidade para atender às suas necessidades.
          </p>
          <div className="text-start flex flex-col justify-center items-center w-full">
            <div className="flex flex-row lg:justify-start justify-center items-center gap-5 mt-3">
              <div className="bg-homepotencialize rounded-full md:w-12 w-20 h-12 flex justify-center items-center">
                <Image
                  src="/ChatText.png"
                  alt="ChatText"
                  width={26}
                  height={26}
                />
              </div>
              <p className="text-sm text-gray-500 leading-7 md:w-7/12">
                Lorem ipsum dolor sit amet swinx admir noptrium gremba admir
                tile.
              </p>
            </div>
            <div className="flex flex-row lg:justify-start justify-center items-center gap-5 mt-3">
              <div className="bg-homepotencialize rounded-full md:w-12 w-20 h-12 flex justify-center items-center">
                <Image
                  src="/ChatText.png"
                  alt="ChatText"
                  width={26}
                  height={26}
                />
              </div>
              <p className="text-sm text-gray-500 leading-7 md:w-7/12">
                Lorem ipsum dolor sit amet swinx admir noptrium gremba admir
                tile.
              </p>
            </div>
            <div className="flex flex-row lg:justify-start justify-center items-center gap-5 mt-3">
              <div className="bg-homepotencialize rounded-full md:w-12 w-20 h-12 flex justify-center items-center">
                <Image
                  src="/ChatText.png"
                  alt="ChatText"
                  width={26}
                  height={26}
                />
              </div>
              <p className="text-sm text-gray-500 leading-7 md:w-7/12">
                Lorem ipsum dolor sit amet swinx admir noptrium gremba admir
                tile.
              </p>
            </div>
          </div>
          <div className="cadastro__shadow md:w-11/12 p-5 mt-10 relative">
            <Image
              src="/aspas.svg"
              alt="aspas"
              width={38}
              height={28}
              className="image-overlay-cadastro"
            />
            <p className="btn-text-navy pt-2">
              CorretorOn revolucionou minha carreira. Acesso a imóveis, agenda
              compartilhada e relatórios impulsionaram minha produtividade.
              Sucesso garantido!
            </p>
            <div className="flex flex-col gap-1 pt-5">
              <p className="btn-text-navy">Pedro Oliveira</p>
              <p className="text-sm text-gray-500">Corretor, ABC imob</p>
            </div>
          </div>
        </div>

        <div className="flex md:px-0 flex-col md:padding-y justify-center items-center gap-4 lg:w-5/12 md:w-11/12 w-full">
          <div className="md:w-full w-10/11 lg:pt-7 md:px-0 px-3 text-center lg:text-left flex flex-col justify-center lg:items-start items-center">
            <p className="text-2xl btn-text-navy">Entre com os seus dados</p>
            <p className="text-lg text-gray-500 lg:w-3/4 md:w-10/12">
              O portal de entrada para o seu sucesso imobiliário! Registre-se
              para ter acesso.
            </p>
          </div>
          <div className="w-full">
            <form
              className="flex flex-col justify-center lg:items-start items-center w-full"
              onSubmit={onSubmit}
            >
              {formError.ErrorMessage("name")}
              <label className="">
                <InputText
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="cadastro__input"
                  name="name"
                  placeholder="Nome"
                />
              </label>

              {formError.ErrorMessage("sobrenome")}
              <label className="">
                <InputText
                  value={sobrenome}
                  onChange={(e) => setSobrenome(e.target.value)}
                  className="cadastro__input"
                  name="sobrenome"
                  placeholder="Sobrenome"
                />
              </label>

              {formError.ErrorMessage("telefone")}
              <label className="">
                <InputMask
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value ?? "")}
                  className="cadastro__input"
                  name="telefone"
                  placeholder="Telefone"
                  mask="(99) 99999-9999"
                />
              </label>

              {formError.ErrorMessage("creci")}
              <label className="">
                <InputText
                  value={creci}
                  onChange={(e) => setCreci(e.target.value)}
                  className="cadastro__input"
                  name="creci"
                  placeholder="Creci"
                  maxLength={10}
                />
              </label>

              {formError.ErrorMessage("tipocadastro")}
              <label className="">
                <select
                  name="tipocadastro"
                  className="cadastro__input"
                  onChange={(e) => setTipocadastro(e.target.value)}
                  value={tipocadastro}
                >
                  <option value="" disabled selected>
                    Tipo de cadastro
                  </option>
                  {_.map(optTipoCadastro, (label, value) => (
                    <option value={value}>{label}</option>
                  ))}
                </select>
              </label>

              {formError.ErrorMessage("cidades_atuacao")}
              <label className="">
                <select
                  name="cidades_atuacao"
                  className="cadastro__input"
                  value={regiao}
                  onChange={(e) => setRegiao(e.target.value)}
                >
                  <option value="" disabled selected>
                    Principal região de atuação
                  </option>
                  {_.map(optRegiao, (regiao) => (
                    <option value={_.get(regiao, "id")}>
                      {_.get(regiao, "nome")}
                    </option>
                  ))}
                </select>
              </label>

              {formError.ErrorMessage("gerente")}
              <label className="">
                <select
                  name="gerente"
                  className="cadastro__input"
                  value={gerente}
                  onChange={(e) => setGerente(e.target.value)}
                >
                  <option value={""}>Gerente de parcerias</option>
                  <option value={""}>Não sou atendido por ninguém</option>
                  {_.map(optGerente, (gerente) => (
                    <option value={_.get(gerente, "id")}>
                      {_.get(gerente, "name")}
                    </option>
                  ))}
                </select>
              </label>

              {formError.ErrorMessage("por_onde_nos_conheceu")}
              <label className="">
                <select
                  name="por_onde_nos_conheceu"
                  className="cadastro__input"
                  value={por_onde_nos_conheceu}
                  onChange={(e) => setPorOndeNosConheceu(e.target.value)}
                >
                  <option value="" disabled selected>
                    Por onde nos conheceu
                  </option>
                  {optPorOndeNosConheceu.map((value) => (
                    <option value={value}>{value}</option>
                  ))}
                </select>
              </label>

              {formError.ErrorMessage("outros_por_onde_nos_conheceu")}
              {por_onde_nos_conheceu == "Outros" && (
                <>
                  <label className="">
                    <InputText
                      value={outros_por_onde_nos_conheceu}
                      onChange={(e) =>
                        setOutrosPorOndeNosConheceu(e.target.value)
                      }
                      className="cadastro__input"
                      name="outros_por_onde_nos_conheceu"
                      placeholder="Outros"
                    />
                  </label>
                </>
              )}
              {formError.ErrorMessage("email")}
              <label className="">
                <InputText
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="cadastro__input"
                  name="email"
                  placeholder="E-mail"
                />
              </label>

              {formError.ErrorMessage("senha")}
              <label className="">
                <Password
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="cadastro__input"
                  name="email"
                  placeholder="Senha"
                />
              </label>

              {formError.ErrorMessage("senha_confirmation")}
              <label className="">
                <Password
                  value={senha_confirmation}
                  onChange={(e) => setSenhaConfirmation(e.target.value)}
                  className="cadastro__input"
                  name="senha_confirmation"
                  placeholder="Confirmação da senha"
                />
              </label>

              <button
                type="submit"
                className="cadastro__submit text-white text-sm gap-3 hover:bg-blue-950"
              >
                Cadastrar
              </button>

              {formError.ErrorMessage("aceito_termos_uso_politica_privacidade")}
              <label className="flex flex-row lg:justify-start justify-center items-center w-full pt-3 gap-3">
                <input
                  className=""
                  type="checkbox"
                  name="aceito_termos_uso_politica_privacidade"
                  checked={aceito_termos_uso_politica_privacidade}
                  onChange={(e) => setAceitoTermos(e.target.checked)}
                />
                <span className="mt-1">Concordo com os termos de uso</span>
              </label>
            </form>
          </div>
          <div className="flex justify-center items-center pt-16">
            <p className="text-gray-500">
              Já tem uma conta?{" "}
              <Link href="/login" className="btn-text-navy">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      <LoadingModal visible={loading} />
    </>
  );
};

export default Cadastro;
