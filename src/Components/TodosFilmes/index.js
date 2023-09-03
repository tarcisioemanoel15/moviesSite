import { Link } from "react-router-dom";

export function TodosFilmes() {

  return (
    <>
      <h1>Todos os FILMES</h1>

      <Link to='/'>
        <button>back</button>
      </Link>
    </>
  );
} 