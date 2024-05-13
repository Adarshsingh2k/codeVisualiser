import React, { useRef } from "react";

const Login = () => {
  // Create refs for email and username inputs
  const emailRef = useRef();
  const usernameRef = useRef();

  // // Function to handle form submission
  // const handleLogin = (event) => {
  //   event.preventDefault(); // Prevent the default form submit action

  //       // Access the input values through the refs
  //   const email = emailRef.current.value;
  //   const username = usernameRef.current.value;

  //   // Simulate a login process (you would typically call an API here)
  //   console.log("Attempting to login with:", email, username);

  //   // You can add any validation or API calls here to complete the login process
  // };

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const username = usernameRef.current.value; // Again, assuming this is actually for the password

    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: username }),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const data = await response.json();
      console.log("Login successful:", data);
      // Handle response
    } catch (error) {
      console.error("Failed to login:", error.message);
      // Handle error
    }
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <div className="card w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                ref={emailRef}
                type="email"
                className="grow"
                placeholder="Email"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                ref={usernameRef}
                type="text"
                className="grow"
                placeholder="Username"
                required
              />
            </label>
            <div className="card-actions justify-end">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
