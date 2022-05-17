import Routers from "./app/routes/Routes";
import "./App.css";
import { GithubProvider } from "./app/context/github/githubContext";
import { GlobalStyle } from "./app/styles";

function App() {
  return (
    <div>
      <GithubProvider>
        <GlobalStyle />
        <Routers />
      </GithubProvider>
    </div>
  );
}

export default App;
