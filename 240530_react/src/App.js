// import 'minireset.css';
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset}
    /* 내가 작성하는 reset */
    a {
      color:inherit;
      text-decoration: none;
    }
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <h1><a href="#">리액트 연습</a></h1>
    </div>
  );
};

export default App;