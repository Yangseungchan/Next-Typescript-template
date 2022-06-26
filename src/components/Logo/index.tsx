import Typography from "@mui/material/Typography";
import { css } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { titleTheme } from "styles/theme";

export default function Logo() {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <ThemeProvider theme={titleTheme}>
        <Typography variant="h2">SCG</Typography>
      </ThemeProvider>
      <Typography variant="h2">고객센터</Typography>
    </div>
  );
}
