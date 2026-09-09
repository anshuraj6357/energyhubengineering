import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      {/* MAIN FOOTER */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">

        {/* BRAND */}
        <div>
          <a href="#home" className="flex items-center gap-3">
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white shadow-lg">
              <img
                src="/images/energyhublogo.jpeg"
                alt="Solar Goat × EnergyHub"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="leading-none">
              <h2 className="text-lg font-bold tracking-wide">
                SOLAR GOAT
              </h2>

              <p className="mt-1 text-sm font-semibold text-amber-400">
                × ENERGYHUB
              </p>
            </div>
          </a>

          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            Professional solar design, engineering and project support
            services built to make solar projects simpler, faster and
            more reliable.
          </p>

          <a
            href="#project-form"
            className="mt-6 inline-flex rounded-lg bg-amber-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-400"
          >
            Start a Project
          </a>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-base font-bold text-white">
            Quick Links
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
            <a href="#home" className="transition hover:text-amber-400">
              Home
            </a>

            <a href="#services" className="transition hover:text-amber-400">
              Services
            </a>

            <a href="#how-it-works" className="transition hover:text-amber-400">
              How It Works
            </a>

            <a href="#projects" className="transition hover:text-amber-400">
              Projects
            </a>

            <a href="#contact" className="transition hover:text-amber-400">
              Contact
            </a>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-base font-bold text-white">
            Our Services
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
            <a href="#services" className="transition hover:text-amber-400">
              Solar Design
            </a>

            <a href="#services" className="transition hover:text-amber-400">
              Electrical Design
            </a>

            <a href="#services" className="transition hover:text-amber-400">
              Battery Design
            </a>

            <a href="#services" className="transition hover:text-amber-400">
              Engineering
            </a>

            <a href="#services" className="transition hover:text-amber-400">
              PV Analysis
            </a>

            <a href="#services" className="transition hover:text-amber-400">
              Site Survey
            </a>
          </div>
        </div>

        {/* CONTACT */}
        <div id="contact">
          <h3 className="text-base font-bold text-white">
            Contact Us
          </h3>

          <div className="mt-5 space-y-4 text-sm text-slate-400">
            <div>
              <p className="font-semibold text-slate-200">
                Email
              </p>
              <a
                href="mailto:info@energyhub.com"
                className="mt-1 block transition hover:text-amber-400"
              >
                info@energyhub.com
              </a>
            </div>

            <div>
              <p className="font-semibold text-slate-200">
                Support
              </p>
              <p className="mt-1">
                Solar design & engineering support
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-200">
                Working Hours
              </p>
              <p className="mt-1">
                Monday - Saturday
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center text-sm text-slate-500 sm:px-8 md:flex-row">

          <p>
            © {currentYear} Solar Goat × EnergyHub. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="transition hover:text-amber-400"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-amber-400"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;