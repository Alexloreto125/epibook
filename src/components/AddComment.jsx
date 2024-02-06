import { Component, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = ({ asin, update, setUpdate }) => {
  // state = {
  //   comment: {
  //     comment: '',
  //     rate: 1,
  //     elementId: this.props.asin,
  //   },
  // }

  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);
  const [elementId, setElementId] = useState(asin);

  // componentDidUpdate(prevProps) {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.setState({
  //       comment: {
  //         ...this.state.comment,
  //         elementId: this.props.asin,
  //       },
  //     })
  //   }
  // }

  useEffect(() => {
    setComment("");
    setRate(1);
  }, [asin]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      comment: comment,
      rate: rate,
      elementId: asin,
    };

    if (asin) setElementId(asin);
    fetch("https://striveschool-api.herokuapp.com/api/comments", {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMyMzQ1MWRlMzdiYzAwMWEwYmZlMTQiLCJpYXQiOjE3MDcyMjg1NDIsImV4cCI6MTcwODQzODE0Mn0.Jb1uL8S8BmCTHryDuoeH5ookkQueV-5cqD5ESbhc-Ek",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Recensione inviata!");
          // this.setState({
          //   comment: {
          //     comment: '',
          //     rate: 1,
          //     elementId: this.props.asin,
          //   },
          // })

          setComment("");
          setRate(1);
          setElementId(asin);

          setUpdate(!update);
        } else {
          throw new Error("Qualcosa è andato storto");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
  // })
  // sendComment = async (e) => {
  //   e.preventDefault()
  //   try {
  //     let response = await fetch(
  //       'https://striveschool-api.herokuapp.com/api/comments',
  //       {
  //         method: 'POST',
  //         body: JSON.stringify(comment),
  //         headers: {
  //           'Content-type': 'application/json',
  //           Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMyMzQ1MWRlMzdiYzAwMWEwYmZlMTQiLCJpYXQiOjE3MDcyMjg1NDIsImV4cCI6MTcwODQzODE0Mn0.Jb1uL8S8BmCTHryDuoeH5ookkQueV-5cqD5ESbhc-Ek',
  //         },
  //       }
  //     )
  //     if (response.ok) {
  //       alert('Recensione inviata!')
  //       // this.setState({
  //       //   comment: {
  //       //     comment: '',
  //       //     rate: 1,
  //       //     elementId: this.props.asin,
  //       //   },
  //       // })
  //       setComment(''),
  //       setRate(1),
  //       setElementId(asin)
  //     } else {
  //       throw new Error('Qualcosa è andato storto')
  //     }
  //   } catch (error) {
  //     alert(error)
  //   }
  // }

  return (
    <div className="my-3">
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            value={comment.comment}
            onChange={
              (e) => setComment(e.target.value)
              // this.setState({
              //   comment: {
              //     ...this.state.comment,
              //     comment: e.target.value,
              //   },
              // })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              // this.setState({
              //   comment: {
              //     ...this.state.comment,
              //     rate: e.target.value,
              //   },
              // })
              setRate(e.target.value)
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
