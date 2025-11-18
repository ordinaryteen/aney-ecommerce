import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      500: '#34b27b',
      600: '#2a8f63',
    },
    dark: '#11181c',
    light: '#f8f9fa',
  },
  styles: {
    global: {
      body: {
        bg: '#11181c',
        color: '#f8f9fa',
      },
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
})

export default theme