import React from "react";

function AuthLayout({ children }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-white to-amber-50 px-4 py-8 sm:px-6 lg:px-8">

      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />

      {/* MAIN AUTH CARD */}
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.14)]">

        {/* TOP ACCENT */}
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400" />

        <div className="p-7 sm:p-9">

          {/* BRAND HEADER */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3">

              <div className="h-14 w-14 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
                <img
                  src="/images/energyhublogo.jpeg"
                  alt="EnergyHub Logo"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="text-left">
                <h1 className="text-2xl font-black tracking-wide text-slate-900">
                  SOLAR GOAT
                </h1>

                <p className="mt-0.5 text-xs font-extrabold tracking-wider text-amber-500">
                  × ENERGYHUB
                </p>
              </div>
            </div>

            <p className="mx-auto mt-3 max-w-xs text-xs font-medium leading-5 text-slate-500">
              Smarter Solar Solutions For Better Projects
            </p>
          </div>

          {/* DIVIDER */}
          <div className="my-7 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          {/* AUTH CONTENT */}
          <div>
            {children}
          </div>

          {/* FOOTER */}
          <div className="mt-7 border-t border-slate-100 pt-5 text-center">
            <p className="text-[11px] text-slate-400">
              © {new Date().getFullYear()} Solar Goat × EnergyHub
            </p>

            <p className="mt-1 text-[10px] text-slate-400">
              Secure • Reliable • Professional
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AuthLayout;