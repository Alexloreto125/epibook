import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";

class SingleBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    };
  }

  handleToggleSelected = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const { img, title } = this.props.book;
    const { selected } = this.state;

    return (
      <Col md={3} className="mb-4">
        <Card
          style={{
            width: "18rem",
            border: selected ? "2px solid red" : "",
          }}
          onClick={this.handleToggleSelected}
        >
          <Card.Img
            variant="top"
            src={img}
            alt={title}
            style={{ width: "100%", height: "auto" }}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
