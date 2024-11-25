import dynamic from "next/dynamic";

import { CadastroEquipe } from "@/components";

export default function Page() {
  return (
    <div className="overflow-hidden">
      <CadastroEquipe />
    </div>
  );
}
