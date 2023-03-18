import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css' //全局导入bootstrap样式
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#355c7D'
  }
}

//wrap component for every page
function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
