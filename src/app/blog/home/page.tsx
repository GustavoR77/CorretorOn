import dynamic from "next/dynamic";

import { BlogHome } from "@/components";

export default function Page() {
  return (
    <div className="overflow-hidden">
      <BlogHome />
    </div>
  );
}
