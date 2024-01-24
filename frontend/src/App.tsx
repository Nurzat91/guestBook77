import {Route, Routes} from "react-router-dom";
import UserPage from "./components/UserPage/UserPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./theme";



function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<UserPage/>} />
            <Route path="*" element={<ErrorPage/>} />
          </Routes>
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default App
