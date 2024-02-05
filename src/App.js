import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from './components/AllTheBooks'
import { Container } from "react-bootstrap";
import BookList from "./components/BookList";

import fantasy from "./data/fantasy.json";
import CommentArea from "./components/CommentArea";
import { Component } from "react";

class App extends Component {
  state = {
    selectedAsin: null,
  };

  handleBookSelect = (asin) => {
    this.setState({ selectedAsin: asin });
  };

  render() {
    return (
      <>
        <MyNav />
        <Container>
          <Welcome />
          <BookList books={fantasy} onBookSelect={this.handleBookSelect} />
        </Container>
        <MyFooter />
      </>
    );
  }
}

export default App;
