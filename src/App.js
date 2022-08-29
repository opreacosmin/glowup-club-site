import './App.css';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";


function Home() {
        return null;
}

function App() {
  return (
      <>
              <Router>
                      <Header/>
                      <NavBar/>
                      <Routes>
                              <Route path='/' exact element={<Home/>}/>
                      </Routes>

              </Router>

      </>
  )
}

export default App;
