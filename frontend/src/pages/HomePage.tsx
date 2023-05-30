import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { sampleProducts } from "../data";

const HomePage = () => {
  return (
    <Row>
      {sampleProducts.map((product) => (
        //small screens one product occupies 6/12 so 2 items per page
        //xsmal screens product is full screen
        <Col key={product.slug} sm={6} md={4} lg={3}>
          <Link to={"/product/" + product.slug}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default HomePage;
