import styled from "styled-components";

export const Container = styled.div`
   display: flex;
  background-color: cadetblue;
  width: 98%;
  height: 250px;
  /* overflow-y: auto; */
  position: inherit;
   
   
   .containerIMG{
     display: flex;
     align-items: center;
     background-color: red;
     position: relative;
     
     animation-duration: 100s;
     animation-name: slidein;
     animation-iteration-count: infinite;
     animation-direction: alternate;
    }
    
    .item{
    height: 230px;
    width: 160px;
    margin: 10px;
    text-align: center;
   }

   img{
  width: 100%;
    }

    h6{
      background-color: #0000008f;
    position: relative;
    font-size: 70%;
    margin-top: -40px;
    height: 36px;
    align-items: center;
    display: flex;
    justify-content: center;
    color: white;
    }







  

@keyframes slidein {
  from {
    right:0px

  }
  
  to {
    right:3050px
    
  }
}

`;