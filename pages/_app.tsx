import { AppProps } from "next/dist/next-server/lib/router/router";
import DivarContextProvider from "../src/components/context/DivarContextProvider";
import { Layout, ConfigProvider } from "antd";
import faIR from "antd/lib/locale/fa_IR";
import "antd/dist/antd.css";
import "../styles/antd.css";
import "../styles/globals.css";
import Navbar from "../src/components/Navbar/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("_app")
  return (
    <DivarContextProvider>
      <ConfigProvider locale={faIR} direction="rtl">
        <Layout>
          <Layout.Content>
            <Navbar />
            <Component {...pageProps} />
          </Layout.Content>
        </Layout>
      </ConfigProvider>
    </DivarContextProvider>
  );
}

export default MyApp;
