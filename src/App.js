import "./App.css";
import { Route, Routes } from "react-router-dom";
import CardDetails from "./card_details/CardDetails";
import { useSelector } from "react-redux";
import SignIn from "./signin/SignIn";
import Home from "./Home";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated)
    return (
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    );

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/card/:index" element={<CardDetails />} />
    </Routes>
  );
};

export default App;
