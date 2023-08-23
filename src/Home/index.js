import Favoritos from '../Components/Favoritos';
import MoviesList from '../Components/MoviesList';
import { Container } from './styled';

export default function Home() {
  return (
    <Container>
      <p className='paragrafo'>Favoritos</p>
      <Favoritos />
      <p className='paragrafo'>Populares</p>
      <MoviesList />
    </Container>



  );
}