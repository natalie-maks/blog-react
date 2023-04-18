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

  const handleCommentSubmit = (e) => {
    e.preventDefault();
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
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Leave a comment</h2>
      <form onSubmit={handleCommentSubmit}>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <input
            className="border-2 border-zinc-900 block w-full p-2"
            value={formData.name}
            onChange={onInputChange}
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="border-2 border-zinc-900 block w-full p-2"
            value={formData.email}
            onChange={onInputChange}
            type="email"
            placeholder="Email"
            name="email"
          />
        </div>

        <textarea
          className="border-2 border-zinc-900 block w-full p-2 my-4"
          value={formData.comment}
          onChange={onInputChange}
          placeholder="Comment"
          name="comment"
        />

        <div>
          <input
            value={formData.storeData}
            onChange={onInputChange}
            type="checkbox"
            id="storeData"
            name="storeData"
          />
          <label className="pl-2" htmlFor="storeData">
            Save email and name
          </label>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 items-center">
          <button className="my-4 w-full md:w-auto bg-zinc-900 text-white text-lg border-zinc-900 border-2 py-3 px-16 font-semibold hover:bg-yellow-200 hover:text-black transition-all">
            Submit
          </button>
          {successMessage && (
            <span className="text-lime-600 text-lg font-semibold my-2">
              Comment submitted for review
            </span>
          )}
          {error && (
            <p className="text-red-600 text-lg font-semibold my-2">All fields are requiered</p>
          )}
        </div>
      </form>
    </section>
  );
};

export default CommentForm;
