import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Navbar/>
      <HomePage />
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
