import { Router } from "./routes";
import { GlobalStyle } from "./styles/Global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export { App };
