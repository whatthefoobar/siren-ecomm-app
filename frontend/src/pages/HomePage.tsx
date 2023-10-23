import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Col, Row, Button } from "react-bootstrap";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { ApiError } from "../types/ApiError";
import { getError } from "../utils";
import ProductItem from "../components/ProductItem";
import { useGetProductsQuery } from "../hooks/productHooks";
import { useParams } from "react-router-dom";
import BannerCarousel from "../components/BannerCarousel";

const HomePage = () => {
  const { keyword } = useParams();

  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsQuery(keyword ? keyword : "");

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <Row>
      <Helmet>
        <title>Siren</title>
      </Helmet>
      {!keyword ? (
        <>
          <BannerCarousel />
          <h3
            style={{
              marginTop: "30px",
              marginBottom: "20px",
            }}
          >
            Latest Products
          </h3>
        </>
      ) : (
        <Link to="/" style={{ textDecoration: "none", marginBottom: "20px" }}>
          <Button variant="primary">Back</Button>
        </Link>
      )}

      {products!.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3}>
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  );
};
export default HomePage;
