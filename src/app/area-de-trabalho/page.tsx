import { HomeLogado } from "@/components";
import EmpreendimentoResource from "@/resources/empreendimentoResource";
import _ from 'lodash'

export default async function Page() {
  const responseDestaques = await EmpreendimentoResource.search({destaque: true});
  const responseLancamentos = await EmpreendimentoResource.search({fase_construcao: 'LAN'});


  return (
    <div className="overflow-hidden">
      <HomeLogado 
        produtosDestaques={_.get(responseDestaques.data, 'data')} 
        produtosLancamentos={_.get(responseLancamentos.data, 'data')} 
        />
    </div>
  );
}
