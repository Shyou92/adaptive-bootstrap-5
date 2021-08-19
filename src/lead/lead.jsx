import LeadPhoto from '../images/lead-polka.jpg';
import { Container, Col, Row } from 'react-bootstrap';

function Lead() {
  return (
    <Container fluid className='lead-container'>
      <section className='lead'>
        <Row className='justify-content-center'>
          <Col lg={9} md={11} sm={10}>
            <h1 className='lead__title'>Путешествия по России</h1>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col lg={9} sm={6} xs={11}>
            <p className='lead__subtitle'>
              Настоящая страна не в выпусках новостей, а здесь.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className='image-Col' xl={10}>
            <img
              src={LeadPhoto}
              alt='Девушка, лежащая на полке в вагоне поезда и смотрящая в окно.'
              className='lead__image'
            />
          </Col>
        </Row>
        <Row>
          <Col sm={10}>
            <p className='lead__caption'>Ваша полка — верхняя</p>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default Lead;
