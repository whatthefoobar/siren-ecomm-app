import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Container className="mt-3">
        <Outlet />
      </Container>
    </Layout>
  );
}

export default App;
