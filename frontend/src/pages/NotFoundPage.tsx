import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleHomeRedirect = () => {
    navigate("/");
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <Button onClick={handleHomeRedirect} variant="primary">
            Go to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
