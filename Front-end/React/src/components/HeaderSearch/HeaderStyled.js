import styled from 'styled-components';

export default styled.div`

  @media only screen and (min-width: 1401px){
  #TOP {    
    width: 100%;
    padding: 0 15px 15px 15px;
    background: linear-gradient(0.25turn, #191D1F, black, #191D1F);
    height: 100px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow:  10px 15px 10px -10px #437B98,
                -10px 15px 10px -10px #437B98;
    position: fixed;
    z-index: 1;
    }
  }

  #sign {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 30px;
    right: 4%; 
  }

  .signUpDesktop {
    margin-right: 10px;
  }
 } 

@media only screen and (max-width: 1400px){
  #TOP{
    background: linear-gradient(0.25turn, #191D1F, black, #191D1F);
    height: 100px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow:  10px 15px 10px -10px #1A82AE,
                -10px 15px 10px -10px #1A82AE;
    width: 100%;
    padding-top: 10px;
    position: fixed;
    z-index: 1;
  }

  .topMobile{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  #sign {
    top:unset;
    right: unset;
    bottom: 0px;
    background: linear-gradient(0.25turn, #191D1F, black, #191D1F);
    height: 50px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    box-shadow: 10px -15px 10px -10px #437B98,
                -10px -15px 10px -10px #437B98;
    width: 100%;
    padding: 7px 5px 7px 8px;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    -webkit-justify-content: center;
    justify-content: center;
    position: fixed;
    z-index: 1;
  }
}

`;
