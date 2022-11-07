import React, { useEffect } from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Team = () => {
  const [teams, setTeams] = React.useState([]);
  useEffect(() => {
    return () => {
      fetch("Team.json")
        .then((response) => response.json())
        .then((data) => setTeams(data));
    };
  }, []);

  return (
    <>
      <section className="py-6">
        <div className="teamTitle flex justify-center items-center flex-col mb-4 p-4">
          <h3 className="text-2xl font-bold text-red-600 text-center">Team</h3>
          <h1 className="text-5xl my-2 font-bold text-center">Meet Our Team</h1>
          <p className="text-center w-3/4">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <div className="px-4 grid gap-4 md:grid-cols-4">
          {teams.map((team) => {
            const { name, social, position, img } = team;
            return (
              <>
                <div className="card w-70 mx-auto bg-base-200 shadow-xl">
                  <figure>
                    <img src={img} alt={name} className=" object-cover" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{position}</p>
                    <div className="card-actions ">
                      <div className="social flex justify-center items-center gap-4">
                        <Link to={social[0]}>
                          <FaFacebook></FaFacebook>
                        </Link>
                        <Link to={social[1]}>
                          <FaTwitterSquare></FaTwitterSquare>
                        </Link>
                        <Link to={social[2]}>
                          <FaLinkedinIn></FaLinkedinIn>
                        </Link>
                        <Link to={social[3]}>
                          <FaInstagramSquare></FaInstagramSquare>
                        </Link>
                        {/* {social.map((social) => {
                          return (
                            <>
                              <Link>
                                <FaFacebook></FaFacebook>
                              </Link>
                            </>
                          );
                        })} */}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Team;
