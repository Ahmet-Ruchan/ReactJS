import Counter from "./Counter";
import { Col, Container, Row } from "reactstrap";

function App(){
    return(
        <div>
        <Container>
        <Row>
            <Col xs="8">
              <Counter></Counter>
            </Col>
        </Row>
        </Container>
        </div>
    )
}

export default App;