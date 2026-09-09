import React, { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import AuthLayout from "./AuthLayout";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      const { data } = await api.post(
        "/auth/forgot-password",
        { email }
      );

      setMessage(
        data.message ||
          "Password reset instructions sent."
      );
    } catch (err) {
      setMessage(
        err.response?.data?.message ||
          "Unable to send reset link."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>

      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900">
          Forgot Password?
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Enter your registered email and we'll send you
          password reset instructions.
        </p>
      </div>

      <form onSubmit={submit} className="space-y-5">

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-orange-500 py-4 font-bold text-white shadow-lg transition hover:bg-orange-600 disabled:opacity-60"
        >
          {loading ? "Sending..." : "SEND RESET LINK"}
        </button>

        {message && (
          <p className="text-center text-sm text-slate-500">
            {message}
          </p>
        )}
      </form>

      <div className="mt-8 text-center">
        <Link
          to="/login"
          className="font-bold text-orange-500"
        >
          ← Back to Login
        </Link>
      </div>

    </AuthLayout>
  );
}

export default ForgotPassword;