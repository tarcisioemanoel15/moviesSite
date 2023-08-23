import styled from "styled-components";

export const MovieList = styled.ul`

background-color: bisque;
  color: black;
margin: auto;
margin-top: 5px;
margin-bottom: 30px;

width: 98%;
font-family: sans-serif;

list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Movie = styled.li`
display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  
img{
  width: 188px;
  border-radius: 1rem;
  margin-bottom: 2rem;
}

span{
color: yellow;
font-size: 120%;
text-align: center;
}

a{transition: all 0.3s;}

a:hover{transform: scale(1.1);}

`;

