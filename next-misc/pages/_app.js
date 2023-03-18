import Head from "next/head";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import 'styles/layout.css'
import 'styles/globals.css'

function MyApp({ Component, pageProps }) {

    //自定义自己的样式
    if(Component.getLayout){
        return Component.getLayout(<Component {...pageProps} />);
    }

  return (
      <>
          <Head>
              <title>py nextjs learning</title>
              <meta name='description' content='next js learning'/>
          </Head>
          <Header/>
            <Component {...pageProps} />
          <Footer/>
      </>
  )
}

export default MyApp
