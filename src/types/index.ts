import { IEmptyDataSource } from "@/resources/data/empty-data-source";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface IEmpreendimento{
  id?: number|string,
  foto_fundo_topo?: string,
  foto_capa?: string,
  foto_capa_thumb?: string,
  nome?: string,
  endereco?: string,
  cidade?: string,
  status_obra?: string,
  descricao?: string,
  dorms?: string,
  suites?: string,
  banheiro?: string,
  area?: string,
  terreno?: string,
  vagas?: string,
  torres?: string,
  andares?: string,
  unidades_andar?: string,
  total_unidades?: string,
  realizacao?: string,
  incorporadora?: string,
  projetoarquitetura?: string,
  projetodecoracao?: string,
  projetopaisagistico?: string,
  latitude?: string,
  longitude?: string,
  treinamentos?: string[],
  emailmkt?: string[],
  tabelas?: string[],
  documentos?: string[],
  galeria_plantas?: string[],
  galeria_imagens?: string[],
  galeria_thumb_400?: string[],
  plantas_thumb_400?: string[],
  mensagem_visita?: string,
  mensagem_proposta?: string,
  tourvirtual?: string,
  registro_sistema?: string,
  regulamentos?: string[],
  assessorias?: string[],
  folhetos?: string[]
}

export interface ITabela{
  id?: number|string,
  nome?: string,
  tabelas?: string[],
  endereco?: string,
  cidade_estado?: string,
  planta?: string,
  metragem?: string,
  vagas?: string,
  registro_sistema?: string
}

export interface IEspelho{
  id?: number,
  empreendimento_id: number,
  nome?: string,
  slug?: string,
  unidades_disponiveis?: number,
  blocos: IEspelhoBloco[]
}

export interface IEspelhoBloco{
  id?: number,
  espelho_empreendimento_id: number,
  nome?: string,
  unidades_disponiveis?: number,
  created_at?: string,
  updated_at?: string,
  unidades?: IEmptyDataSource
}

export interface IUser{
  id?: number,
  tipocadastro?: string,
  name?: string,
  sobrenome?: string,
  genero: string,
  nascimento: string,
  rg: string,
  cpf: string,
  cnpj: string,
  razaosocial: string,
  telefone: string,
  celular: string,
  creci: string,
  creci_uf: string,
  cidades_atuacao: number,
  endereco: string,
  complemento: string,
  cidade: string,
  bairro: string,
  numero: string,
  cep: string,
  uf: string,
  email: string,
  login_hash: string,
  foto: string,
  data_registro_sistema: string,
  corretor_resp: number,
  atendente_id: number,
  gerente_atendimento: number,
  data_atribuido_atendente: string,
  novo_registro: number,
  primeiroacessositenovo: number,
  data_update: string,
  id_corretor_editou: number,
  latitude: string,
  longitude: string,
  id_imobiliaria: number,
  por_onde_nos_conheceu: string,
  outros_por_onde_nos_conheceu: string,
  precadastro: number,
  data_usuario_editou: string,
  notification_token: string,
  aceito_termos_uso_politica_privacidade: number,
  reset_password: string,
  observacoes: string,
  cadastrado_por: number,
  arquivospath: string,
  dados_corretor_resp: string
  gerente: {
    id: number,
    name: string,
    username: string,
    email: string,
    foto: string,
    telefone: string,
  },
}