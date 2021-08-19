import { Container } from 'react-bootstrap';
import Header from './header/header';
import Lead from './lead/lead';
import PhotoGrid from './PhotoGrid/PhotoGrid';

function App() {
  return (
    <div className='App'>
      <Container fluid xxl={12}>
        <Header />
        <Lead />
        <PhotoGrid />
      </Container>
    </div>
  );
}

export default App;
