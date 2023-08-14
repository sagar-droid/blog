import "./App.css";
import Navbar from "./navbar/Navbar";
import TopDiv from "./top_div/TopDiv";
import Footer from "./footer/Footer";
import Articles from "./articles/Articles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardDetails from "./card_details/CardDetails";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <TopDiv />
                <Articles />
              </>
            }
          />
          <Route path="/card/:index" element={<CardDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
