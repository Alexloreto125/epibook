import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment, onDeleteComment }) => {
  const deleteComment = (asin) => {
    if (asin) {
      fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMyMzQ1MWRlMzdiYzAwMWEwYmZlMTQiLCJpYXQiOjE3MDcyMjg1NDIsImV4cCI6MTcwODQzODE0Mn0.Jb1uL8S8BmCTHryDuoeH5ookkQueV-5cqD5ESbhc-Ek",
        },
      })
        .then((response) => {
          if (response.ok) {
            alert("La recensione è stata elimata!");
            onDeleteComment(comment._id);
          } else {
            throw new Error("La recensione non è stata eliminata!");
          }
        })

        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        Elimina
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
