import MainNotes from "./Components/MainNotes/MainNotes";
import NavBar from "./Components/NavBar/NavBar";
import UserContext from "./Context/UserContext";
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <div id="app">
      <UserContext>
        <GlobalStyle />
        <NavBar />
        <MainNotes />
      </UserContext>
    </div>
  );
}

export default App;
