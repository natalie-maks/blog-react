import React from "react";
import moment from "moment";

const PostDetails = ({ post }) => {
  const formatPostContent = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }
    }

    switch (type) {
      case "heading-two":
        return <h3 key={index}>{modifiedText}</h3>;
      case "paragraph":
        return (
          <p key={index}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div>
      PostDetails
      <img src={post.coverImage.url} className="w-80" />
      <time>{moment(post.createdAt).format("MMM DD, YYYY")}</time>
      <h1>{post.title}</h1>
      {post.content.raw.children.map((typeObj, index) => {
        const children = typeObj.children.map((item, itemIndex) =>
          formatPostContent(itemIndex, item.text, item)
        );

        return formatPostContent(index, children, typeObj, typeObj.type);
      })}
    </div>
  );
};

export default PostDetails;
