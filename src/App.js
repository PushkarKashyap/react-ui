import "./App.css";
import Content from "./components/Content/Content";
import { Container } from "@material-ui/core";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Container maxWidth="xl">
        <Header />
        <p className='gridHeader'>Invoice List</p>
        <Content />
      </Container>
    </div>
  );
}

export default App;
