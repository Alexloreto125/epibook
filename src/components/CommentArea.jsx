import { Component, useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [update, setUpdate] = useState(false);

  // console.log("prova asin", asin);
  useEffect(() => {
    if (asin) {
      setIsLoading(true);

      fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMyMzQ1MWRlMzdiYzAwMWEwYmZlMTQiLCJpYXQiOjE3MDcyMjg1NDIsImV4cCI6MTcwODQzODE0Mn0.Jb1uL8S8BmCTHryDuoeH5ookkQueV-5cqD5ESbhc-Ek",
        },
      })
        .then((response) => {
          console.log(response);
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Errore nella richiesta");
          }
        })
        .then((comments) => {
          console.log(comments);
          setComments(comments);
          setIsError(false);
          setIsLoading(false);
        })
        .catch((error) => {
          // console.error(error);
          setIsError(true);
          setIsLoading(false);
        });
    }
  }, [asin, update]);

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} update={update} setUpdate={setUpdate} />
      <CommentList
        commentsToShow={comments}
        update={update}
        setUpdate={setUpdate}
      />
    </div>
  );
};

export default CommentArea;
