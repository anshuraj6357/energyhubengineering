import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import AuthLayout from "./AuthLayout";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const update = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      const { data } = await api.post("/auth/login", form);

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      navigate("/");
    } catch (err) {
      setMessage(
        err.response?.data?.message ||
          "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>

      {/* HEADING */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900">
          Log in to Solar Goat
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Welcome back! Login with your registered details.
        </p>
      </div>

      {/* DIVIDER */}
      <div className="mb-7 flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="text-xs text-slate-400">
          LOGIN
        </span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <form onSubmit={submit} className="space-y-5">

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
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
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
              placeholder="Enter password"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 pr-20 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-orange-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <Link
            to="/forgot-password"
            className="text-sm font-semibold text-orange-500 hover:text-orange-600"
          >
            Forgot your password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-orange-500 py-4 font-bold text-white shadow-lg transition hover:bg-orange-600 disabled:opacity-60"
        >
          {loading ? "Logging in..." : "LOGIN"}
        </button>

        {message && (
          <p className="text-center text-sm text-red-500">
            {message}
          </p>
        )}
      </form>

      <p className="mt-8 text-center text-sm text-slate-500">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="font-bold text-orange-500"
        >
          Register
        </Link>
      </p>

    </AuthLayout>
  );
}

export default Login;