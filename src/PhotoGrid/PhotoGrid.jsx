import { Container, Col, Row, Image } from 'react-bootstrap';
import Train from '../images/photo-grid-train.jpg';
import Atharva from '../images/photo-grid-atharva-tulsi.jpg';
import Tuman from '../images/photo-grid-tuman.jpg';
import Sochi from '../images/photo-grid-sochi.jpg';
import Arisa from '../images/photo-grid-arisa.jpg';
import Baikal from '../images/photo-grid-baikal.jpg';

function PhotoGrid() {
  return (
    <Container fluid>
      {/* <section className='photo-grid'> */}
      <Row className='d-flex justify-content-center'>
        <Col className='column-grid px-sm-2 py-2' sm={6} lg={3}>
          <Image
            src={Train}
            className='photo-grid__image'
            alt='Вид из окна поезда'
          />
        </Col>
        <Col className='column-grid px-sm-2 py-2' sm={6} lg={3}>
          <Image
            src={Atharva}
            className='photo-grid__image'
            alt='Вид с высоты на горы'
          />
        </Col>
        <Col className='column-grid px-sm-2 py-2' sm={6} lg={3}>
          <Image
            src={Tuman}
            className='photo-grid__image'
            alt='Собака, стоящая на снопе сена и смотрящая на туман'
          />
        </Col>
      </Row>
      <Row className='d-flex justify-content-center'>
        <Col className='column-grid px-sm-2 py-2' sm={6} lg={3}>
          <Image
            src={Sochi}
            className='photo-grid__image'
            alt='Лес в районе города Сочи'
          />
        </Col>
        <Col className='column-grid px-sm-2 py-2' sm={6} lg={3}>
          <Image
            src={Arisa}
            className='photo-grid__image'
            alt='Машина, стоящая на прощрачном толстом льду'
          />
        </Col>
        <Col className='column-grid px-sm-2 py-2' sm={6} lg={3}>
          <Image
            src={Baikal}
            className='photo-grid__image'
            alt='Вид на озеро Байкал'
          />
        </Col>
      </Row>
      {/* </section> */}
    </Container>
  );
}

export default PhotoGrid;
