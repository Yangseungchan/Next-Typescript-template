import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
// Create a theme instance.
const palette = {
  primary: {
    main: "#556cd6",
  },
  secondary: {
    main: "#19857b",
  },
  error: {
    main: red.A400,
  },
};

const defaultTheme = createTheme({
  typography: {
    fontFamily: ["Gmarket Sans", "Montserrat", "sans-serif"].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Gmarket Sans';
          font-style: normal;
          font-weight: 300;
          src: url(/fonts/GmarketSans/GmarketSansLight.eot'); /* IE9 Compat Modes */
          src: local(''),
               url(/fonts/GmarketSans/GmarketSansLight.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
               url(/fonts/GmarketSans/GmarketSansLight.woff2') format('woff2'), /* Super Modern Browsers */
               url(/fonts/GmarketSans/GmarketSansLight.woff') format('woff'), /* Modern Browsers */
               url(/fonts/GmarketSans/GmarketSansLight.ttf') format('truetype'), /* Safari, Android, iOS */
        }
        @font-face {
          font-family: 'Gmarket Sans';
          font-style: normal;
          font-weight: 500;
          src: url(/fonts/GmarketSans/GmarketSansMedium.eot'); /* IE9 Compat Modes */
          src: local(''),
               url(/fonts/GmarketSans/GmarketSansMedium.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
               url(/fonts/GmarketSans/GmarketSansMedium.woff2') format('woff2'), /* Super Modern Browsers */
               url(/fonts/GmarketSans/GmarketSansMedium.woff') format('woff'), /* Modern Browsers */
               url(/fonts/GmarketSans/GmarketSansMedium.ttf') format('truetype'), /* Safari, Android, iOS */
        }
        @font-face {
          font-family: 'Gmarket Sans';
          font-style: normal;
          font-weight: 700;
          src: url(/fonts/GmarketSans/GmarketSansMedium.eot'); /* IE9 Compat Modes */
          src: local(''),
               url(/fonts/GmarketSans/GmarketSansBold.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
               url(/fonts/GmarketSans/GmarketSansBold.woff2') format('woff2'), /* Super Modern Browsers */
               url(/fonts/GmarketSans/GmarketSansBold.woff') format('woff'), /* Modern Browsers */
               url(/fonts/GmarketSans/GmarketSansBold.ttf') format('truetype'), /* Safari, Android, iOS */
        }
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 900;
          src: url('/fonts/Montserrat/montserrat-v24-latin-900.eot'); /* IE9 Compat Modes */
          src: local(''),
               url('/fonts/Montserrat/montserrat-v24-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
               url('/fonts/Montserrat/montserrat-v24-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
               url('/fonts/Montserrat/montserrat-v24-latin-900.woff') format('woff'), /* Modern Browsers */
               url('/fonts/Montserrat/montserrat-v24-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
               url('/fonts/Montserrat/montserrat-v24-latin-900.svg#Montserrat') format('svg'); /* Legacy iOS */
        }
      `,
    },
  },
  palette,
});

const titleTheme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 900;
          src: url('/fonts/Montserrat/montserrat-v24-latin-900.eot'); /* IE9 Compat Modes */
          src: local(''),
               url('/fonts/Montserrat/montserrat-v24-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
               url('/fonts/Montserrat/montserrat-v24-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
               url('/fonts/Montserrat/montserrat-v24-latin-900.woff') format('woff'), /* Modern Browsers */
               url('/fonts/Montserrat/montserrat-v24-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
               url('/fonts/Montserrat/montserrat-v24-latin-900.svg#Montserrat') format('svg'); /* Legacy iOS */
        }
      `,
    },
  },
  palette,
});

export { defaultTheme, titleTheme };
