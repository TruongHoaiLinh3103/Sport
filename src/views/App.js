import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Home from "../components/Home";
import Sport from "../components/Sport";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} exact/>
                <Route path="/parkour" element={<Sport />} />
                <Route path="/kungfu" element={<Sport />} />
                {/* <Route path="*" element={<NotPage />}/> */}
            </Routes>
        </Router>
    );
};

export default App;