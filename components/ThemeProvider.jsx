import { ThemeProvider as ThemeProviderNext } from 'next-themes'

function ThemeProvider({ props, children }) {
  return (
    <ThemeProviderNext {...props}>
        {children}
    </ThemeProviderNext>
  )
}

export default ThemeProvider