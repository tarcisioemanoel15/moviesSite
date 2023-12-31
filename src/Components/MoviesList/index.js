import { useEffect, useState } from 'react';
import { POPULARKEY, BASEURLPOPULA, COMPLEMENTOURL } from '../key';
import { MovieList, Movie } from './styled';
import { Link } from 'react-router-dom';
import ComponentePopulares from '../ComponentePopulares';
import { Container, Container2, SpaceBetween, Paragrafo2 } from '../style/styled';

export default function MoviesList() {

  const [popula, setPopula] = useState([])

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: POPULARKEY
      }
    };

    fetch(BASEURLPOPULA, options)
      .then(response => response.json())
      .then(response => setPopula(response.results))
      .catch(err => console.error(err));
  }, [])

  return (
    <>
      <SpaceBetween>

        <Container>
          <Paragrafo2> asasasa </Paragrafo2>
          <MovieList>
            {
              popula.map(e => {
                return (
                  <Movie key={e.id}>
                    < Link to={`/details/${e.id}`}>
                      <img src={`${COMPLEMENTOURL}${e.poster_path}`} alt={e.title} />
                    </Link>
                    <h1 >{e.title}</h1>
                  </Movie>
                )
              })
            }
          </MovieList>
        </Container>



        <Container2>
          <Paragrafo2>asasasa</Paragrafo2>
          <ComponentePopulares />
        </Container2>


      </SpaceBetween>
    </>


  );
}