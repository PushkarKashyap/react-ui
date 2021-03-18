import "./App.css";
import Content from "./components/Content/Content";
import { Container } from "@material-ui/core";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Header />
        <p className="app__invoice">Invoice List</p>
        <Content />
      </Container>
    </div>
  );
}

export default App;
