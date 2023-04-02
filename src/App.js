import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from './pages/global/Topbar';
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />

        </main>
        </div>
    </ThemeProvider>   
  );
}

export default App;
