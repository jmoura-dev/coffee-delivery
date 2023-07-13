import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { Router } from './Routes'
import { CoffeeContextProvider } from './contexts/CoffeeContext'
import { FormContextProvider } from './contexts/FormContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <FormContextProvider>
            <Router />
          </FormContextProvider>
        </CoffeeContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
