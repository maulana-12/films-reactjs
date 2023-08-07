import { Card, Col, Container, Row } from "react-bootstrap";
import duneImg from "../assets/images/trending/dune.jpg"

const Trending = () => {
    return ( 
        <div>
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col lg={12}>
                    <div className="text-white mt-4">
                        <h1>Movie Trending</h1>
                    </div>
                    </Col>
                    <Col lg={4} className="my-2">
                        <Card style={{ 
                            borderRadius: "2em",
                            boxShadow: "0 5px 10px rgba(0,0,0,.2)"
                         }}>
                            <Card.Img variant="top" src={duneImg} width={150} height={300} style={{ 
                                overflow: "hidden",
                                borderTopLeftRadius: "2em",
                                borderTopRightRadius: "2em",
                             }} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                    <span>last update 2023</span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="my-2">
                        <Card style={{ 
                            borderRadius: "2em",
                            boxShadow: "0 5px 10px rgba(0,0,0,.2)"
                         }}>
                            <Card.Img variant="top" src={duneImg} width={150} height={300} style={{ 
                                overflow: "hidden",
                                borderTopLeftRadius: "2em",
                                borderTopRightRadius: "2em",
                             }} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                    <span>last update 2023</span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="my-2">
                        <Card style={{ 
                            borderRadius: "2em",
                            boxShadow: "0 5px 10px rgba(0,0,0,.2)"
                         }}>
                            <Card.Img variant="top" src={duneImg} width={150} height={300} style={{ 
                                overflow: "hidden",
                                borderTopLeftRadius: "2em",
                                borderTopRightRadius: "2em",
                             }} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                    <span>last update 2023</span>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default Trending;