import { useContext, useEffect } from "react";
import {
  Badge,
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <ToastContainer position="bottom-center" limit={1} />
      <header>
        <NavigationBar />
      </header>
      <main>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </main>
      {/* <Footer /> */}
      <footer className="mt-4">
        <div className="text-center">
          All rights reserved ©{new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}

export default App;
