import React from "react";
import { FaCalendarAlt, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";

const Event = () => {
  return (
    <>
      <section className="bg-slate-800 w-4/5 mx-auto mb-4 rounded p-8">
        <div className="eventContainer md:flex justify-center items-center gap-8">
          <div className="event flex gap-4 justify-center items-center m-4">
            <FaCalendarAlt className="text-4xl"></FaCalendarAlt>
            <div className="text-white">
              <h3>We are open monday-friday</h3>
              <p className="font-bold text-2xl">7:00 am - 9:00 pm</p>
            </div>
          </div>
          <div className="event flex gap-4 justify-center items-center m-4">
            <FaPhoneAlt className="text-4xl"></FaPhoneAlt>
            <div className="text-white">
              <h3>Have a question?</h3>
              <p className="font-bold text-2xl">+2546 251 2658</p>
            </div>
          </div>
          <div className="event flex gap-4 justify-center items-center m-4">
            <FaLocationArrow className="text-4xl"></FaLocationArrow>
            <div className="text-white">
              <h3>Need a repair? our address</h3>
              <p className="font-bold text-2xl">Liza Street, New York</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Event;
