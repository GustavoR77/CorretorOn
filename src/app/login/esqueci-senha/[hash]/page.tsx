import dynamic from "next/dynamic";

import { NovaSenha } from "@/components";
import { decrypt } from "@/libs/crypt";

export default function Page({params}) {
  const {hash} = params;
  return (
    <div className="overflow-hidden">
      <NovaSenha email={decrypt(decodeURIComponent(hash))}/>
    </div>
  );
}
