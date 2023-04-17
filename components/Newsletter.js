import React from "react";

const Newsletter = () => {
  return (
    <section className="mt-12">
      <h3 className="border-black border-2 text-center font-semibold my-2 p-2 bg-yellow-300">
        NEWSLETTER
      </h3>
      <form className="flex flex-col space-y-3 mt-6">
        <input
          className="border-black border-2 p-2 bg-transparent"
          type="email"
          name="email"
          placeholder="Email address"
        />

        <button className="bg-black text-white border-black border-2 py-2 px-4 font-semibold hover:bg-yellow-200 hover:text-black transition-all">
          SIGN UP
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
