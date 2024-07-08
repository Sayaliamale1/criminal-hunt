import styled from "styled-components";

const Wrapper = styled.article`
  /* min-height: 100vh;
  display: grid;
  align-items: center; */
  main {
    min-height: 100vh;
    display: grid;
    place-items: center;
  }
  .name {
    text-align: center;
    margin-bottom: 4rem;
  }
  .underline {
    height: 0.25rem;
    width: 5rem;
    background: var(--clr-primary-5);
    margin-left: auto;
    margin-right: auto;
  }
  .container {
    width: 80vw;
    max-width: var(--fixed-width);
  }
  .cities {
    background: var(--clr-white);
    padding: 1.5rem 2rem;
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    text-align: center;
  }
  .cities:hover {
    box-shadow: var(--dark-shadow);
  }
  

`;
export default Wrapper;
