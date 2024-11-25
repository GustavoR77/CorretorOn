import { EmpreendimentosPreco } from "@/components";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Tabelas - CorretorOn",
  description: "CorretorOn",
};

export default function Page() {
  return (
    <div className="overflow-hidden">
      <EmpreendimentosPreco />
    </div>
  );
}
