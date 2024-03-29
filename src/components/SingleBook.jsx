import { Component, useState } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";
import BookList from "./BookList";

const SingleBook = ({ book, selectedBook, changeSelectedBook }) => {
  // state = {
  //   selected: false,
  // }
  const [selected, setSelected] = useState(false);
  // console.log("questo è selectedBook", selectedBook.asin);
  const handleCardClick = () => {
    setSelected(!selected);
    changeSelectedBook(book.asin);
  };

  return (
    <>
      <Card
        data-testid="bootstrap-card"
        // onClick={() => this.setState({ selected: !this.state.selected })}
        onClick={handleCardClick}
        style={{
          border: selectedBook === book.asin ? "3px solid red" : "none",
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
      {/* {selected && <CommentArea asin={book.asin} />} */}
    </>
  );
};

export default SingleBook;
