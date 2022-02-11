import { Container, Spinner } from './styles';

function LoadingPage() {
  return (
    <Container>
      <Spinner>
        <div className="double-bounce1" />
        <div className="double-bounce2" />
      </Spinner>
    </Container>
  );
}

export default LoadingPage;