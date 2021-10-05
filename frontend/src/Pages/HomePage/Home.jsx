import { Container, Button, Row } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="welcome-text">
            <div>
              <h1 className="title">Welcome to Record Request Manager</h1>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="homeButton">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button size="lg" className="homeButton" variant="warning">
                  Register
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
