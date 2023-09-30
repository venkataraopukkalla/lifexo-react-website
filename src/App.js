
import Nav from "./navComponents/nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Whychoose from "./components/whychoose";
import Team from "./components/team";


export default function App() {
  return (
    <div className="App">
      <Nav />
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>} />
        <Route path="/whyus" element={<Whychoose/>}/>
        <Route path="/team" element={<Team/>} />
      </Routes>
    </div>
  );
}
