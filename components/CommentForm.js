import React, { useState, useEffect, useRef } from "react";

const CommentForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  const handleCommentSubmit = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };

    if (storeData) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("name", name);
      localStorage.removeItem("email", email);
    }
  };

  return (
    <div>
      CommentForm
      <form onSubmit={handleCommentSubmit}>
        <textarea ref={commentEl} placeholder="Comment" name="comment" />
        <input ref={nameEl} type="text" placeholder="Name" name="name" />
        <input ref={emailEl} type="email" placeholder="Email" name="email" />
        {error && <p>All fields are requiered</p>}
        <label htmlFor="storeData">Save email and name</label>
        <input fer={storeDataEl} type="checkbox" id="storeData" name="storeData" />
        <button>Submit</button>
        {successMessage && <span>Comment submitted for review</span>}
      </form>
    </div>
  );
};

export default CommentForm;
