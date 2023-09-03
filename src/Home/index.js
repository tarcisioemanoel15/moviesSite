import Favoritos from '../Components/Favoritos';
import MoviesList from '../Components/MoviesList';
import { Container } from './styled';
import Menu from "../Components/Menu";
export default function Home() {
  return (
    <Container>
      <Menu />
      <p className='paragrafo'>Favoritos</p>
      <Favoritos />
      <p className='paragrafo'>Populares</p>
      <MoviesList />
    </Container>



  );
}