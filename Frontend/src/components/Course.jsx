import React, { useEffect, useState } from "react";
import Cards from "./Cards";

function Course() {

  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "} <span className="text-orange-500"> Here! &#128540;</span>
          </h1>
          <p className="mt-12">If the customer is very smart, he or she will be able to achieve the desired result. Moreover, to assume? To be repulsed, this corrupt? At the time of the praisers, we accuse the accusers of being repulsed, but of the architect with hatred, unless the expedients which they do not know are owed by the pain of those who are present are to be assumed by some. We have no one to reject anyone but a great achievement!</p>
          <Link to="/">
            <button className="mt-6 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-300 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
