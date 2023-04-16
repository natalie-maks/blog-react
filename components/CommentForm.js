import React, { useState, useEffect } from "react";

import { submitComment } from "@/services";

const CommentForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    storeData: false,
  });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem("name") ? window.localStorage.getItem("name") : "",
      email: window.localStorage.getItem("email") ? window.localStorage.getItem("email") : "",
      storeData:
        window.localStorage.getItem("name") || window.localStorage.getItem("email") ? true : false,
      comment: "",
    };

    setFormData(initalFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handleCommentSubmit = () => {
    setError(false);
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
    }

    submitComment(commentObj).then((res) => {
      if (res.createComment) {
        if (!storeData) {
          formData.name = "";
          formData.email = "";
        }
        formData.comment = "";
        setFormData((prevState) => ({
          ...prevState,
          ...formData,
        }));
        setSuccessMessage(true);
        setTimeout(() => {
          setSuccessMessage(false);
        }, 3000);
      }
    });
  };

  return (
    <div>
      CommentForm
      <textarea
        value={formData.comment}
        onChange={onInputChange}
        placeholder="Comment"
        name="comment"
      />
      <input
        value={formData.name}
        onChange={onInputChange}
        type="text"
        placeholder="Name"
        name="name"
      />
      <input
        value={formData.email}
        onChange={onInputChange}
        type="email"
        placeholder="Email"
        name="email"
      />
      {error && <p>All fields are requiered</p>}
      <label htmlFor="storeData">Save email and name</label>
      <input
        value={formData.storeData}
        onChange={onInputChange}
        type="checkbox"
        id="storeData"
        name="storeData"
      />
      <button onClick={handleCommentSubmit}>Submit</button>
      {successMessage && <span>Comment submitted for review</span>}
    </div>
  );
};

export default CommentForm;
