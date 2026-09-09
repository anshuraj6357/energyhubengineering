import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import AuthLayout from "./AuthLayout";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const update = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    setMessage("");

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      await api.post("/auth/signup", {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      navigate("/login");
    } catch (err) {
      setMessage(
        err.response?.data?.message ||
          "Unable to create account."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3.5 text-[15px] text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100";

  return (
    <AuthLayout>

      {/* HEADING */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          Create your account
        </h2>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">
          Register with your details to manage your Solar Goat projects.
        </p>
      </div>

      {/* FORM */}
      <form onSubmit={submit} className="space-y-4">

        {/* FULL NAME */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={update}
            placeholder="Enter your full name"
            required
            className={inputClass}
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={update}
            placeholder="you@example.com"
            required
            className={inputClass}
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={update}
              placeholder="Create password"
              required
              minLength={6}
              className={`${inputClass} pr-20`}
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-orange-500 transition hover:text-orange-600"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* CONFIRM PASSWORD */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Confirm Password
          </label>

          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={update}
            placeholder="Confirm your password"
            required
            minLength={6}
            className={inputClass}
          />
        </div>

        {/* REGISTER BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-full rounded-lg bg-orange-500 py-3.5 text-sm font-bold tracking-wide text-white shadow-md transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Creating account..." : "REGISTER"}
        </button>

        {/* MESSAGE */}
        {message && (
          <div className="rounded-lg bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-600">
            {message}
          </div>
        )}
      </form>

      {/* LOGIN */}
      <p className="mt-7 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-orange-500 transition hover:text-orange-600 hover:underline"
        >
          Login
        </Link>
      </p>

    </AuthLayout>
  );
}

export default Signup;