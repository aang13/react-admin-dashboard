import './App.css';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <main className="content">
        </main>
        </div>
    </ThemeProvider>   
  );
}

export default App;
