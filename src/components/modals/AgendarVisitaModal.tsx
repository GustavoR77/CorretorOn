"use client";
import { AuthContext } from "@/providers/AuthProvider";
import {Dialog} from "primereact/dialog";
import { FormEvent, useContext, useEffect, useState } from "react";
import useFormError from "@/hooks/FormError";
import { useRouter, useSearchParams } from "next/navigation";
import { InputText } from "primereact/inputtext";
import AgendaResource from "@/resources/agendaResource";
import { Calendar } from "primereact/calendar";
import { localePtBR } from "@/libs/primereact";
import { InputTextarea } from "primereact/inputtextarea";
import EmpreendimentoResource from "@/resources/empreendimentoResource";
import _ from 'lodash';
import { NotifyContext } from "@/providers/NotifyProvider";
import { InputMask } from "primereact/inputmask";

localePtBR();
var loaded = false;

const AgendarVisitaModal = ({visible, onHide, empreendimentoId}: {visible: boolean, onHide: (value) => void, empreendimentoId?: string}) => {
  const {notify} = useContext(NotifyContext);
  const [loading, setLoading] = useState(false);
  const formError = useFormError()
  const [empreendimentos, setEmpreendimentos] = useState([]);
  const [empreendimento_id, setEmpreendimentoId] = useState<string>();
  const [data_visita, setDataVisita] = useState<Date>();
  const [cliente_nome, setClienteNome] = useState<string>();
  const [cliente_rg, setClienteRg] = useState<string>();
  const [cliente_cpf, setClienteCpf] = useState<string>();
  const [mensagem, setMensagem] = useState<string>();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const formData = {
      empreendimento_id: empreendimento_id,
      data_visita: data_visita ? `${data_visita?.getFullYear()}-${data_visita?.getMonth() + 1}-${data_visita?.getDate()} ${data_visita?.getHours()}:${data_visita?.getMinutes()}` : '',
      cliente_nome: cliente_nome,
      cliente_rg: cliente_rg,
      cliente_cpf: cliente_cpf,
      mensagem: mensagem,
    }

    AgendaResource.agendarVisita(formData).then(response => {
      notify?.current?.show({
        severity: 'success', sticky: true, content: (
          <div className="p-flex p-flex-column" style={{flex: '1'}}>
            <div className="p-text-center">
              <h4>Solicitação de visita enviado</h4>
            </div>
          </div>
        ),
        life: 3000,
      });

      onHide(false);
    }).catch(error => {
      formError.showErrors(error.response?.data ?? error.response);
      setLoading(false);
    });
  }
    

  if(!loaded){
    loaded = true;
    EmpreendimentoResource.empreendimentos().then(response => {
      setEmpreendimentos(response.data);
    }).catch(error => {
      formError.showErrors(error.response?.data ?? error.response);
      setLoading(false);
    });
  }

  useEffect(() => {
    if(visible){
      
      setClienteNome('');
      setClienteRg('');
      setClienteCpf('');
      setMensagem('');

      if(empreendimento_id != empreendimentoId) {
        setEmpreendimentoId(empreendimentoId);
      }
    }
  }, [visible])

  useEffect(() => {
    if(empreendimento_id != empreendimentoId) {
      setEmpreendimentoId(empreendimentoId);
    }
  }, [empreendimentoId])

  return <>
    <Dialog header='Agendar Visita' visible={visible} style={{ width: '30vw' }} onHide={() => onHide(false)}>
      <form className="flex flex-col justify-center md:items-start items-center w-full" onSubmit={onSubmit}>
        {formError.ErrorMessage('tipocadastro')}
        <label className="">
          <select name="tipocadastro" className="cadastro__input" onChange={(e) => setEmpreendimentoId(e.target.value)} value={empreendimento_id}>
            <option value="" disabled selected>Empreendimento</option>
            {_.map(empreendimentos, (empreendimento, i) => (
              <option value={_.get(empreendimento, 'id')} key={i}>{_.get(empreendimento, 'nome')}</option>
            ))}
          </select>
        </label>


        {formError.ErrorMessage('data_visita')}
        <label>
          <Calendar dateFormat="dd/mm/yy" showTime hourFormat="24" value={data_visita} onChange={(e) => setDataVisita(e.value)} className="cadastro__input"/>
        </label>

        {formError.ErrorMessage('cliente_nome')}
        <label>
          <InputText
            type="text"
            name="cliente_nome"
            className="cadastro__input"
            placeholder="Nome do cliente"
            onChange={(e) => setClienteNome(e.target.value ?? '')}
            value={cliente_nome}
            maxLength={100}
          />
        </label>

        {formError.ErrorMessage('cliente_rg')}
        <label>
          <InputText
            type="text"
            name="cliente_rg"
            className="cadastro__input"
            placeholder="Rg do cliente"
            onChange={(e) => setClienteRg(e.target.value ?? '')}
            value={cliente_rg}
            maxLength={50}
          />
        </label>

        {formError.ErrorMessage('cliente_cpf')}
        <label>
          <InputMask
            type="text"
            name="cliente_cpf"
            className="cadastro__input"
            placeholder="CPF do cliente"
            onChange={(e) => setClienteCpf(e.target.value ?? '')}
            value={cliente_cpf}
            mask="999.999.999-99"
          />
        </label>

        {formError.ErrorMessage('mensagem')}
        <label>
          <InputTextarea
            name="mensagem"
            className="cadastro__input"
            placeholder="Mensagem"
            onChange={(e) => setMensagem(e.target.value ?? '')}
            value={mensagem}
            maxLength={300}
          />
        </label>
        

        <button
          type="submit"
          className="cadastro__submit text-white text-sm gap-3 hover:bg-blue-950">
          Agendar
        </button>
      </form>

    </Dialog>
  </>
}


export default AgendarVisitaModal