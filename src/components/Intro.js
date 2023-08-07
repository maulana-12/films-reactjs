import { Container,Row,Col, Button } from "react-bootstrap";

const Intro = () => {
    return ( 
        <div className='intro'>
          <Container className='d-flex justify-content-center align-items-center'>
            <Row>
              <Col className='text-center'>
                <div className='title text-white'>NONTON TERUS</div>
                <div className='title text-white'>SAMPE NGANTUK</div>
                <div className="text-center mt-4">
                    <Button variant="dark">Lihat Selengkapnya..</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
     );
}
 
export default Intro;