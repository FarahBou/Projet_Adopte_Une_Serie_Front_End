import styled from 'styled-components';

export default styled.div`
min-height: 90vh;
.search {
  padding: 210px 50px 30px 50px;
}

.style {
  font-size: 1.8em;
  color: black;
  font-family: "Rajdhani", cursive;
  animation: neons 3s ease infinite;
  -moz-animation: neons 3s ease infinite;
  -webkit-animation: neons 3s ease infinite;
}

@keyframes neons {
  0%,
  100% {
    text-shadow: 
    0 0 1vw #FA1C16, 
    0 0 3vw #FA1C16, 
    0 0 10vw #FA1C16, 
    0 0 10vw #FA1C16, 
    0 0 .4vw #FED128, 
    .5vw .5vw .1vw #806914;
    color: #FED128;
  }
  50% {
    text-shadow: 
    0 0 .5vw #800E0B, 
    0 0 1.5vw #800E0B, 
    0 0 5vw #800E0B, 
    0 0 5vw #800E0B, 
    0 0 .2vw #800E0B, 
    .5vw .5vw .1vw #40340A;
    color: #806914;
  }
}

`;
