import React from "react";

type Props = {};

const NewsletterSignup = (props: Props) => {
  return (
    <div className="text-sm w-full mx-auto p-6 border border-gray-200 rounded-lg shadow-sm mt-8">
      <form className="space-y-4">
        {/* Email Field with Button Inside */}
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="mt-1 block w-full border border-gray-300 rounded-full shadow-sm p-2 pr-32 bg-transparent"
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 my-1 mr-1 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 rounded-full transition duration-150"
            style={{ height: "calc(100% - 0.5rem)" }} // Adjust button height to match the input field
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsletterSignup;
