import { useEffect } from 'react';
import { Container } from './styled';
import { POPULARKEY, FAVORITMOVIE } from "../key";
import { useState } from 'react';
function Favoritos() {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: POPULARKEY
      }
    };

    fetch(`${FAVORITMOVIE}`, options)
      .then(response => response.json())
      // .then(response => console.log(response.results))
      .then(response => setMovies(response.results))
      .catch(err => console.error(err));

  }, [])

  console.log(movies);

  // console.log(movies)



  return (
    <Container>
      {
        movies.map(e => {
          return (
            <div key={e.id}>
              <p>{e.id}</p>
              <h1>{e.title}</h1>
            </div>
          )
        })
      }
    </Container>

  )
}

export default Favoritos;