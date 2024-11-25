
import { NavBar, Footer } from "@/components";
import "./globals.css";
import { Metadata } from "next";
// import LoadingProvider from "@/providers/LoadingProvider";
import NotifyProvider, { NotifyContext } from "@/providers/NotifyProvider";
import AuthProvider, { AuthContext } from "@/providers/AuthProvider";
import GlobalsProvider from "@/providers/GlobalsProvider";
// import { useContext } from "react";
import { PrimeReactProvider } from 'primereact/api';



// export const metadata:Metadata = {
//   title: "CorretorOn",
//   description: "CorretorOn",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    // <GlobalsProvider>
      <AuthProvider>
        <NotifyProvider>
          <PrimeReactProvider>
          {/* // <LoadingProvider> */}
              <html lang="en">
                <body className="relative">
                  <NavBar />
                  {children}
                  <Footer />
                </body>
              </html>
          {/* // </LoadingProvider> */}
          </PrimeReactProvider>
        </NotifyProvider>
      </AuthProvider>
    // </GlobalsProvider>
  );
}