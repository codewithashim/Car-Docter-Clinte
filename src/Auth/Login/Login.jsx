import React from "react";
import { Link } from "react-router-dom";
import login from "../../Assets/images/login/login.svg";
import { FaFacebookF, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import UseFirebase from "../../Hooks/UseFirebase";

const Login = () => {
  const { handelGoogleLogin, handelFacebookLogin, handelEmailSignIn } =
    UseFirebase();
  return (
    <>
      <section>
        <div className="hero min-h-screen w-full mx-auto bg-base-200">
          <div className="hero-content grid md:grid-cols-2">
            <div className="text-center md:w-2/4">
              <img src={login} alt="login now" />
            </div>

            <div className="md:w-3/4 border rounded p-6 shadow">
              <form action="" onSubmit={(e) => handelEmailSignIn(e)}>
                <div>
                  <h2 className="card-title text-center">Login Now</h2>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    required
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div>
                  <Link className="btn btn-link" to="/register">
                    Register Now
                  </Link>
                </div>
                <div className="form-control mt-3">
                  <input
                    type="submit"
                    value="Login Now"
                    className="btn btn-warning"
                  />
                </div>
              </form>
              <div className="socialLogin flex justify-center items-center gap-2 mt-3">
                <Link onClick={handelGoogleLogin}>
                  <FaGoogle className="text-4xl hover:-translate-y-1 transition-all bg-blue-400 text-white p-2 rounded-full"></FaGoogle>
                </Link>
                <Link onClick={handelFacebookLogin}>
                  <FaFacebookF className="text-4xl hover:-translate-y-1 transition-all  bg-blue-400 text-white p-2 rounded-full"></FaFacebookF>
                </Link>
                <Link>
                  <FaTwitter className="text-4xl hover:-translate-y-1 transition-all  bg-blue-400 text-white p-2 rounded-full"></FaTwitter>
                </Link>
                <Link>
                  <FaLinkedin className="text-4xl hover:-translate-y-1 transition-all  bg-blue-400 text-white p-2 rounded-full"></FaLinkedin>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
