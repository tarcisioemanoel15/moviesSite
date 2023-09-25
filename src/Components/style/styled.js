import styled from "styled-components";

export const SpaceBetween = styled.div`

display: flex;
justify-content: space-between;
width:98%;
margin: auto;

@media screen and (max-width:800px) {
  display: block;
}

`;

export const Borda = styled.div`
    width: 97%;
    /* height: 100%; */
    border: solid;
    margin: 5px;
    padding: 5px;

`;


export const Paragrafo = styled.p`
    display: flex;
    color: #fb0303;
    border: solid white 1px;
    width: 100%;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 5px;
    border-radius: 10px;
    padding: 5px 40px 5px 0px;

    justify-content: end;
    gap: 17px

   
`;

export const Paragrafo2 = styled.p`
    display: flex;
    color: #fb0303;
    border: solid white 1px;
    width: 98%;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 5px;
    border-radius: 10px;
    padding: 5px 40px 5px 0px;

    justify-content: end;
    gap: 17px

   
`;

export const Container = styled.div`
width: 70%;

@media screen and (max-width:800px) {
    width: 100%;

}


`;

export const Container2 = styled.div`
width: 30%;


`;
