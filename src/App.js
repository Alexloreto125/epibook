import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import { Container } from "react-bootstrap";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";

function App() {
  const books = fantasy;

  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <BookList books={books} />
        {/* <AllTheBooks /> */}
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
