"use client";

import { red } from "@mui/material/colors";

// app/theme.ts
// import { Roboto } from 'next/font/google';
import { createTheme } from "@mui/material/styles";

// const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

const theme = createTheme({
  // typography: {
  //   fontFamily: roboto.style.fontFamily,
  // },
  palette: {
    primary: {
      main: red[400],
    },
  },
});

export default theme;
