import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Profile from "./pages/profiles";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profiles/:username" element={<Profile />} />
    </Routes>
  );
};

export default App;