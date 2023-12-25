import "@styles/globals.css";
import type { AppProps } from "next/app";

//Components
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen mt-auto">
      <Navbar />
      <div className="mt-20"></div>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
