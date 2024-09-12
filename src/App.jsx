import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home"
import Properties from "./Pages/Properties/Properties"
import SingleProperty from "./Pages/SingleProperty/SingleProperty"
import ContactUs from "./Pages/ContactUs/ContactUs"
function App() {

  return (
      <Router>
        <Routes>
          <Route path="/mern-task-2/" element={<Home />} />
          <Route path="/mern-task-2/properties" element={<Properties />} />
          <Route path="/mern-task-2/SingleProperty" element={<SingleProperty />} />
          <Route path="/mern-task-2/contact" element={<ContactUs />} />
        </Routes>
    </Router>
  )
}

export default App
