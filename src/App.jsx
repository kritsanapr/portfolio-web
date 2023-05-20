import { MantineProvider } from "@mantine/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { themes } from "./theme";
import "./App.css";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <MantineProvider theme={themes} withGlobalStyles withNormalizeCSS>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </MantineProvider>
    </>
  );
}

export default App;
