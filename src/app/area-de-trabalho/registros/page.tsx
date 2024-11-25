import dynamic from "next/dynamic";

import { Registros } from "@/components";

export default function Page() {
  return (
    <div className="overflow-hidden">
      <Registros />
    </div>
  );
}
