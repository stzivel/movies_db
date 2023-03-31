import "./App.css";

import Navbar from "./containers/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import { WatchlistProvider } from "./context/WatchlistContext";
import Watchlist from "./pages/Watchlist";

function App() {
  return (

<div className="App">

  <WatchlistProvider>

  <Navbar />

   <Routes>
     <Route exact path="/" element={<Home />} />
     <Route path="/results" element={<Results />} />
     <Route path="/watchlist" element={<Watchlist/>}/>
   </Routes>


  </WatchlistProvider>

     
    </div>
  );
}

export default App;
