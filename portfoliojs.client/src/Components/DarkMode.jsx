import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const customTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#4E4D5E',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      {}
    </ThemeProvider>
  );
}

