import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Indonesia from "./pages/Covid/Indonesia";
import Provinsi from "./pages/Covid/Provinsi";
import About from "./pages/Covid/About";
import Layout from "./Layout/Index";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import Globalstyle from "./components/Globalstyles";
import { Helmet } from "react-helmet";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" 
        />
      </Helmet>
      <Globalstyle/>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Covid/Indonesia" element={<Indonesia/>}/>
          <Route path="/Covid/Provinsi" element={<Provinsi/>}/>
          <Route path="/Covid/About" element={<About/>}/>
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
