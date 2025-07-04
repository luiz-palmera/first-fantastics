import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme.ts'
import { GlobalStyle } from './styles/GlobalStyle.ts'
import { CustomThemeProvider } from './context/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomThemeProvider>
      <GlobalStyle/>
      <App />
    </CustomThemeProvider>
  </StrictMode>,
)
