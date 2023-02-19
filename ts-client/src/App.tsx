import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import './App.css';
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import ProfilePage from "./pages/profile";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { StateType } from "./model";

function App() {


  const mode = useSelector((state: StateType) => state.mode);


  const theme = createTheme(themeSettings(mode));
  //const theme = useMemo(() => createTheme(themeSettings(mode), [mode]));

  const isAuth = Boolean(useSelector((state: StateType) => state.token));
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
