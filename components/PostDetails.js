import React from "react";
import moment from "moment";
import Link from "next/link";

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
        return (
          <h3 key={index} className="text-lg font-semibold my-2">
            {modifiedText}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="font-serif text-lg my-1">
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
    <section className="my-8">
      <img
        src={post.coverImage.url}
        width="100"
        height="100"
        alt={post.title}
        className="h-72 w-full object-cover"
      />
      <address className="opacity-60 not-italic	mt-2 mb-3 text-sm">
        Written by {post.author.name} <time>{moment(post.createdAt).format("MMM DD, YYYY")}</time>
      </address>
      <ul className="flex space-x-2">
        {post.categories.map((category) => {
          return (
            <li key={category.slug} className="bg-yellow-300 py-1 px-4 text-sm">
              <Link href={`/${category.slug}`}>{category.name}</Link>
            </li>
          );
        })}
      </ul>

      <h1 className="text-3xl font-semibold mt-6 mb-4">{post.title}</h1>
      <p className="italic text-lg mb-8"> {post.excerpt}</p>

      {post.content.raw.children.map((typeObj, index) => {
        const children = typeObj.children.map((item, itemIndex) =>
          formatPostContent(itemIndex, item.text, item)
        );

        return formatPostContent(index, children, typeObj, typeObj.type);
      })}
    </section>
  );
};

export default PostDetails;
