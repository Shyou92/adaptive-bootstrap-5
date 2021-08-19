import { Container, Col, Row } from 'react-bootstrap';
import Logo from '../images/header-logo.svg';

function Header() {
  return (
    <Container fluid>
      <Row>
        <header className='header'>
          <Col sm={1}>
            <img
              src={Logo}
              alt="Маленькая Карта России и подпись 'Россия'."
              className='header__logo'
            />
          </Col>
          <Col sm={1} className='d-flex justify-content-end'>
            <ul className='header__lang-list'>
              <li className='header__lang-item'>
                <a
                  href='#'
                  className='header__lang-link header__lang-link_state-active'
                >
                  Ru
                </a>
              </li>
              <li className='header__lang-item'>
                <a href='#' className='header__lang-link'>
                  En
                </a>
              </li>
            </ul>
          </Col>
        </header>
      </Row>
    </Container>
  );
}

export default Header;
