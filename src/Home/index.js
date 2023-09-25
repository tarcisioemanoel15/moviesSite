// import Favoritos from '../Components/Favoritos';
import MoviesList from '../Components/MoviesList';
import { Container } from './styled';
import Menu from "../Components/Menu";
import Carousel from '../Components/Carrousel';
import Carousel2 from '../Components/Carousel2';
import { Footer } from '../Components/Footer';
import { Borda } from '../Components/style/styled';
export default function Home() {
  return (

    <Borda>

      <Container>
        <Menu />
        <Carousel />
        <MoviesList />
        <Carousel2 />
        <Footer />
      </Container>

    </Borda>


  );
}