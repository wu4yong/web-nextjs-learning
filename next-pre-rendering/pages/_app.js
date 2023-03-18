import React, { useState } from "react";
import '../styles/globals.css';
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  queryClient.setDefaultOptions({
      queries:{
         retry:false,
      }
  })
  return (
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={true}/>
      </QueryClientProvider>
  )
}

export default MyApp
