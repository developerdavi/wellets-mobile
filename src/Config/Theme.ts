import { extendTheme } from 'native-base';

const theme = extendTheme({
  fontConfig: {
    Inter: {
      400: {
        normal: 'Inter_400Regular',
      },
      500: {
        normal: 'Inter_500Medium',
      },
      700: {
        normal: 'Inter_700Bold',
      },
    },
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
  colors: {
    primary: {
      100: '#68D391',
      200: '#68D391',
      300: '#68D391',
      400: '#68D391',
      500: '#68D391',
      600: '#68D391',
      700: '#68D391',
      900: '#68D391',
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
});

export default theme;
