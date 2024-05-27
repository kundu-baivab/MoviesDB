import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MovieDisp from "./components/Pages/MovieDisp";
import FavMovDisp from "./components/Pages/FavMovDisp";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<MovieDisp />} />
          <Route path="/favmovies" element={<FavMovDisp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
