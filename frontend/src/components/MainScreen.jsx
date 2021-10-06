import { Container, Row } from "react-bootstrap";
import "./MainScreen.css";

const MainScreen = ({ children, title }) => {
  return (
    <div className="mainScrn">
      <Container>
        <Row>
          <div className="page">
            {title && (
              <>
                {" "}
                <h1 className="heading">{title}</h1>
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainScreen;
