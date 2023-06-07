import { useContext, useEffect } from "react";
import {
  Badge,
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Store } from "../Store";

const NavigationBar = () => {
  const {
    state: { mode, cart, userInfo },
    dispatch,
  } = useContext(Store);

  useEffect(() => {
    //curtesy of bootstrap
    document.body.setAttribute("data-bs-theme", mode);
  }, [mode]);

  const switchModeHandler = () => {
    dispatch({ type: "SWITCH_MODE" });
  };

  const signoutHandler = () => {
    dispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    window.location.href = "/signin";
  };
  return (
    <Navbar expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Siren</Navbar.Brand>
        </LinkContainer>
      </Container>
      <Nav>
        <Button variant={mode} onClick={switchModeHandler}>
          <i className={mode === "light" ? "fa fa-sun" : "fa fa-moon"}></i>
        </Button>
        <Link to="/cart" className="nav-link">
          Cart
          {cart.cartItems.length > 0 && (
            <Badge pill bg="danger">
              {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
            </Badge>
          )}
        </Link>
        {userInfo ? (
          <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
            <Link
              className="dropdown-item"
              to="#signout"
              onClick={signoutHandler}
            >
              Sign Out
            </Link>
          </NavDropdown>
        ) : (
          <Link className="nav-link" to="/signin">
            Sign In
          </Link>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
