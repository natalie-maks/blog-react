import React from "react";

const Author = ({ author }) => {
  return (
    <div>
      Author
      <img width="100" height="100" src={author.photo.url} />
      <p>{author.name}</p>
    </div>
  );
};

export default Author;
