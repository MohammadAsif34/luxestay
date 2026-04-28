import React, { useState } from "react";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

const default_form = { email: "", password: "", is_email_verified: false };

const LoginPage = () => {
  const [form, setForm] = useState(default_form);
  const [error_msg, setError_msg] = useState("");

  const handleOnChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError_msg("");

    if (form.email === "") {
      setError_msg("invalid-email");
      return;
    }

    if (!form.is_email_verified) {
      setForm((prev) => ({ ...prev, is_email_verified: true }));
      return;
    }

    if (form.password === "") {
      setError_msg("no-password");
      return;
    }

    alert("login success");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-center bg-cover"
      style={{ backgroundImage: "url('/bg-2.png')" }}
    >
      {/* Card */}
      <div className="w-full max-w-sm sm:max-w-lg md:max-w-lg lg:max-w-lg bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300">
        {/* Content */}
        <div className="px-6 py-10 sm:px-10 md:px-14 mx-auto">
          <h2 className="mb-6 text-center text-2xl sm:text-3xl font-medium">
            Login Account
          </h2>

          {/* Google Login */}
          <Button className="secondary">
            <div className="w-full py-2 flex justify-center items-center gap-6">
              <img
                src="/icon/google.png"
                alt=""
                className="w-5 h-5 object-center object-cover"
              />
              <p>Login with Google</p>
            </div>
          </Button>

          {/* Divider */}
          <div className="text-gray-300 my-5 relative">
            <hr />
            <span className="px-4 bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              OR
            </span>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <Input
              type="email"
              name="email"
              placeholder="Email..."
              onChange={handleOnChange}
              required
            />

            {/* Smooth Password Field */}
            <div
              className={`overflow-hidden transition-all duration-300  ${
                form.is_email_verified
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <Input
                type="password"
                name="password"
                placeholder="password..."
                onChange={handleOnChange}
              />
            </div>

            {/* Error */}
            {error_msg != "" && (
              <p className="text-red-500 text-sm text-center h-5">
                {error_msg}
              </p>
            )}

            {/* Button */}
            <Button type="submit" onClick={handleLogin}>
              {form.is_email_verified ? "Login" : "Continue with Email"}
            </Button>
          </form>
          <p className=" mt-2 text-sm text-center text-blue-500">
            {"forget password?"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
