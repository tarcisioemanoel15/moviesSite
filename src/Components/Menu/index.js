import { useState } from 'react';
import { CssMenu, InputWrapper } from "./styled";
import { IoSearch, IoReorderFour, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";



export default function Menu() {

  const [active, setActive] = useState(false)

  const toggleMenu = () => {
    setActive(!active);
  }


  return (
    <CssMenu >

      <header className="header">
        <div className="bituwin">

          <div className="logo">
            <a href="https://tarcisioemanoel15.github.io/Area-Musical/">
              <h1>movies</h1>
            </a>
          </div>


          < button className='btn-menu' onClick={toggleMenu}>
            {active ? <IoClose /> : <IoReorderFour />}
          </button>




          <nav>
            <ul role="menu" className={`${active ? "menu close" : "menu open"}`} >

              <li><Link to='/'>Inicio</Link></li>
              <li><Link to='/todosfilmes'> Todos os filmes </Link></li>


              <li>
                <Link to='/series'>
                  Series
                </Link>

              </li>

              <li>
                <Link to='/genero'>
                  Generos
                </Link>
              </li>

            </ul>
          </nav>

        </div>

        <div className="logo-1">
          <h1>
            filmes
          </h1>
        </div>



        <InputWrapper>
          <input type="text" placeholder='Pesquisar' />
          <IoSearch />
        </InputWrapper>


      </header>

    </CssMenu >

  );

}













