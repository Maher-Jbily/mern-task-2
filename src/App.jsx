import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home"
import Properties from "./Pages/Properties/Properties"
import SingleProperty from "./Pages/SingleProperty/SingleProperty"
import ContactUs from "./Pages/ContactUs/ContactUs"
function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/SingleProperty" element={<SingleProperty />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
    </Router>
  )
}

export default App
