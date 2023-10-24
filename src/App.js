import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-content">
        <Outlet />
        {/* App Content */}
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
