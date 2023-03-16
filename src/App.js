import "./App.css";
import RewardsPointsReport from "./components/RewardsPointsReport";
import { createTheme, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <RewardsPointsReport />
      </ThemeProvider>
    </div>
  );
};

export default App;
