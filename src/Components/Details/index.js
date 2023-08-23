import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { POPULARKEY, COMPLEMENTOURL, DETAIL, DETAILCOMPLEMENTO } from "../key";
import { Container } from "./styled";

export default function Details() {
  const { id } = useParams()
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: POPULARKEY
      }
    };

    fetch(`${DETAIL}${id}${DETAILCOMPLEMENTO}`, options)
      .then(response => response.json())
      .then(res => {
        const { title, poster_path, overview, release_date } = res;
        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${COMPLEMENTOURL}${poster_path}`,
          releaseDate: release_date
        }
        setMovie(movie);
      })
      .catch(err => console.error(err));
  }, [id])

  return (
    <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.sinopse} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>Sinopse: {movie.sinopse}</span>
          <span className='release-date'>Release date: {movie.releaseDate}</span>
          <Link to='/'>
            <button>Go Back</button>
          </Link>
        </div>
      </div>

    </Container>

  )
}