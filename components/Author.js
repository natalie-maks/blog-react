import React from "react";

const Author = ({ author }) => {
  return (
    <section className="my-8 flex justify-between">
      <div className="flex flex-col justify-around">
        <h2 className="italic font-semibold opacity-80 mb-1">Written by</h2>
        <p className="font-semibold text-lg">{author.name}</p>
      </div>
      <img
        width="100"
        height="100"
        src={author.photo.url}
        alt={author.name}
        className="w-16 h-16 object-cover"
      />
    </section>
  );
};

export default Author;
