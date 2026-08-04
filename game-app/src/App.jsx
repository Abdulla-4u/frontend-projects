import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Api from "./Api/Api";

const App = () => {

  const {GetGameCategory, GetGameListByGenreId} = Api

  const [theme, setTheme] = useState(true);

  const getGameByGenreId = (id)=>{
    GetGameListByGenreId(id).then(data => console.log(data) )
  }
  const [gameCategory, setGameCategory] = useState([]);
  
  useEffect(() => {
      GetGameCategory(4).then(data => setGameCategory(data))
      getGameByGenreId()

  }, []);

 

  return (
    <div
    className={`max-w-screen-xl mx-auto transition-all duration-700 ease-in-out ${
      theme && "dark"
    }`}
  >
    <Navbar theme={theme} setTheme={setTheme} />
    <Home />
  </div>
  );
};

export default App;
















 