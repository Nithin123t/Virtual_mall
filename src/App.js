import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Movies from "./pages/Movies";
import Shops from "./pages/Shops";
import { AppBar, Toolbar, Button } from "@mui/material";
import Explore from "./pages/Explore";
function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
          </Button>
          <Button color="inherit">
            <Link to="/shops" style={{ color: "white", textDecoration: "none" }}>Shops</Link>
          </Button>
          <Button color="inherit">
            <Link to="/games" style={{ color: "white", textDecoration: "none" }}>Games</Link>
          </Button>
          <Button color="inherit">
            <Link to="/movies" style={{ color: "white", textDecoration: "none" }}>Movies</Link>
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/games" element={<Games />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/explore" element={<Explore />} />

      </Routes>
    </Router>
  );
}

export default App;
