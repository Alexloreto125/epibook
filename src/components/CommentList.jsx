import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = ({ commentsToShow, update, setUpdate }) => (
  <ListGroup style={{ color: "black" }} className="mt-2">
    {commentsToShow.map((comment) => (
      <SingleComment
        comment={comment}
        key={comment._id}
        update={update}
        setUpdate={setUpdate}
      />
    ))}
  </ListGroup>
);

export default CommentList;
