
import type { AppProps, } from "next/app";
import dynamic from "next/dynamic";


const Layout = dynamic(() => import("../app/layout"), { ssr: true });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}


