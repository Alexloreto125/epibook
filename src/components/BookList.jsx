import React from "react";
import SingleBook from "./SingleBook";
import fantasy from "../data/fantasy.json";
import { Row } from "react-bootstrap";

const BookList = ({ books }) => {
  return (
    <Row>
      {books.map((book, index) => (
        <SingleBook key={index} book={book} />
      ))}
    </Row>
  );
};

export default BookList;
