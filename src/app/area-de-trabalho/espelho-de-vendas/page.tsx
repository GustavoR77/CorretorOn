import dynamic from "next/dynamic";

import { EmpreendimentosEspelho } from "@/components";

export default function Page({searchParams}) {

  
  return (
    <div className="overflow-hidden">
      <EmpreendimentosEspelho searchParams={searchParams} />
    </div>
  );
}
