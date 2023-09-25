import { useEffect, useRef, useState } from 'react';
import { Carousell } from "./styled";
import { Paragrafo } from "../style/styled";
import { BASEURLPOPULA, POPULARKEY, COMPLEMENTOURL } from "../key";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

function Carousel() {
  const [data, setData] = useState(null);
  const carouusel = useRef();

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
      .then(response => setData(response.results))
      .catch(err => console.error(err));
  }, [])

  const handleDireitaClick = (e) => {
    e.preventDefault();
    carouusel.current.scrollLeft -= carouusel.current.offsetWidth;
  };

  const handleEsquerdaaClick = (e) => {
    e.preventDefault();
    carouusel.current.scrollLeft += carouusel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return (
    <Carousell>
      <Paragrafo>Favoritos <div className="buttons">
        <button onClick={handleDireitaClick}><IoArrowBackOutline />   </button>
        <button onClick={handleEsquerdaaClick}> <IoArrowForwardOutline />  </button>
      </div></Paragrafo>


      <div className="caixa">
        <div className="container" ref={carouusel}>

          {data.map((item) => {
            return (
              <div key={item.id} className="carousel"  >

                <div className="item" >
                  <div className="foto" >
                    <img src={`${COMPLEMENTOURL}${item.poster_path}`} alt={item.title} />
                  </div>
                  <h6>{item.title}</h6>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </Carousell>
  );
}
export default Carousel;