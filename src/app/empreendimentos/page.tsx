import { EmpreendimentosLista } from "@/components";
import { Metadata } from "next";
import _ from 'lodash';

export const metadata:Metadata = {
  title: "Produtos - Corretor ON",
  description: "CorretorOn",
};


export default async function Page({searchParams}: {searchParams: {}}) {
  
  return (
    <div className="overflow-hidden">
      <EmpreendimentosLista searchParams={searchParams}/>
    </div>
  );
}
