import React, { useState } from "react";

const Newsletter = () => {
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
    }, 4000);
    e.target.reset();
  };

  return (
    <section className="mt-12 w-full sm:w-1/2 lg:w-full">
      <h3 className="border-zinc-900 border-2 text-center font-semibold mb-2 p-2 bg-yellow-300">
        NEWSLETTER
      </h3>
      <form className="flex flex-col space-y-3 mt-6" onSubmit={handleSignUpSubmit}>
        <input
          className="border-zinc-900 border-2 p-2 bg-transparent"
          type="email"
          name="email"
          placeholder="Email address"
          required
          autoComplete="off"
        />

        <button className="bg-zinc-900 text-white border-zinc-900 border-2 py-2 px-4 font-semibold hover:bg-yellow-200 hover:text-black transition-all">
          SIGN UP
        </button>
        {successMessage && (
          <p className="pt-2 text-center font-semibold">You subscribed to our newsletter!</p>
        )}
      </form>
    </section>
  );
};

export default Newsletter;
