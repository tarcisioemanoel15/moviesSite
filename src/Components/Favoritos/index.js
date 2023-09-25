import { useEffect } from 'react';
import { Container } from './styled';
import { POPULARKEY, BASEURLPOPULA, COMPLEMENTOURL } from "../key";
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

    fetch(`${BASEURLPOPULA}`, options)
      .then(response => response.json())
      .then(response => setMovies(response.results))
      .catch(err => console.error(err));
  }, [])
  console.log(movies)

  return (
    <Container>

      {
        movies.map(e => {
          return (

            <div className='containerIMG' key={e.id}>


              <div className="item">
                <img src={`${COMPLEMENTOURL}${e.poster_path}`} alt={e.title} />
                <h6>{e.title}</h6>
              </div>

            </div>

          )
        })
      }
    </Container>
  )
}

export default Favoritos;