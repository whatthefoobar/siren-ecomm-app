import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <ToastContainer position="top-left" limit={1} />
      <header>
        <NavigationBar />
      </header>

      <main>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
