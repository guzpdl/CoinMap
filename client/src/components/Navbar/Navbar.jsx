import { Container, Navbar, Nav } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import {LinkContainer} from 'react-router-bootstrap'
import LogInModal from "../LogIn/LogIn";
import RegistryModal from "../SignUp/SignUp";
// import SelectCurrency from "./SelectCurrency/SelectCurrency";

const NavbarCoinMap = () => {
  const { user, isLoggedIn, logOut } = useContext(AuthContext);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>CoinMap</Navbar.Brand>
        <Nav className="me-auto">

          <LinkContainer to='/'>
          <Nav.Link className="pt-3" variant="primary" >
            Home
          </Nav.Link>
          </LinkContainer>

          <Nav.Link as="span">
            {!isLoggedIn ? <RegistryModal /> : null}
          </Nav.Link>
          <Nav.Link as="span">{!isLoggedIn ? <LogInModal /> : null}</Nav.Link>

          {isLoggedIn && (
            <LinkContainer to={`/profile/${user._id}`}>
            <Nav.Link as="span" className="pointer pt-3">
              {user.username}
            </Nav.Link>
            </LinkContainer>
          )}

          {isLoggedIn && (
            <Nav.Link
              as="span"
              className="pointer pt-3"
              onClick={() => logOut()}
            >
              Log out
            </Nav.Link>
          )}
        </Nav>
        {/* <SelectCurrency/> */}
      </Container>
    </Navbar>
  );
};

export default NavbarCoinMap;
