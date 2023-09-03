import styled from "styled-components";

export const CssMenu = styled.aside`

background-color: #f0f8ff29;
height: 70px;
width: 98%;
margin: auto;

.header{
  display: flex;
    justify-content: space-between;
    height: 101%;
    text-align: center;
    align-items: center;
}

.bituwin{
  display: flex;
}

.logo{
  background-color: burlywood;
  height: 50px;
  width: 90px;
  margin-left: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-menu{
  display: none;
 
}

.menu{
  display: flex;
  align-items: center;
  height: 50px;
}

.logo-1{
  display:none;
}

li{
  list-style: none;
  padding-left: 10px;
}

a{
  color: white ;
  text-decoration: none;
}


@media screen and (max-width: 600px){
  .bituwin{
    justify-content: space-between;
  }
  .logo{display: none;}

  .btn-menu{
    display: block;
    display: block;
    margin: 15px;
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    color: white;
  }

  .menu{
    display: none;
  }

  .close{
    display: block;
    background-color: white;
    width: 175px;
    height: auto;
    margin-top: 41px;
    margin-left: -54px;
    border-radius: 7px 7px 20px 20px;
    padding: 10px;
    position: fixed;
  
  }
  
 .close li{
    background-color: #00000030;
    margin: 17px;
    color: black;
    border-radius: 20px;
  }


  .logo-1{
    display:block;
    color: red;
    background-color: azure;
    padding: 12px;
  }
  
}

`;





















export const InputWrapper = styled.div`

padding: 8px 12px;
display: flex;
align-items: center;
gap: 6px;
cursor: pointer;
width: 225px;
background-color: #bbb9b938;
border-radius: 20px;
margin-right: 10px;

input{
  background-color: transparent;
  font-size: 12px;
  border:none;
  color:white;
  text-decoration: none;
}

svg{
  margin: 0px 0px 0px 30px;
  color: red;
  text-align: right;
  width:35px

}

input:focus-visible {
  outline: none;
}



`;
