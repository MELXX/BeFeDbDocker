import { BrowserRouter, Route, Routes} from "react-router-dom";
import {MyProvider} from './state/MyContext'
import Home from "./components/Home";
import Order from "./components/Order";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/Navbar";

function App() {
  return (
    <>
      <MyProvider>
        <BrowserRouter>
          <AppNavbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </BrowserRouter>
      </MyProvider>
    </>
  );
}

export default App;
