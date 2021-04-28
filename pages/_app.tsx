import { AppProps } from 'next/dist/next-server/lib/router/router'
import { AppType } from 'next/dist/next-server/lib/utils'
import '../styles/globals.css'
import 'antd/dist/antd.css'
import DivarContextProvider from "../src/components/context/divarContext"
import { Layout, Menu, Breadcrumb, ConfigProvider } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import faIR from 'antd/lib/locale/fa_IR'
import Navbar from '../src/components/Navbar/Navbar'
import Divar from '../src/components/Divar/Divar'



function MyApp({ Component, pageProps } : AppProps) {
  return (
    <DivarContextProvider>
      <ConfigProvider locale={faIR} direction="rtl">
        <Component {...pageProps} />
        <Divar />
      </ConfigProvider>
    </DivarContextProvider>
  ) 
}

export default MyApp




  
