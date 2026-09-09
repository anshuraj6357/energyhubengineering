import React, { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className=" top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* ================= LOGO ================= */}
                <a
                    href="#home"
                    onClick={closeMenu}
                    className="flex items-center gap-3"
                >
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg">
                        <img
                            src="/images/energyhublogo.jpeg"
                            alt="EnergyHub Logo"
                            className="h-full w-full object-contain p-1"
                        />
                    </div>

                    <div className="flex flex-col leading-none">
                        <span className="text-base font-bold tracking-wider text-white">
                            SOLAR GOAT
                        </span>

                        <span className="mt-1 text-xs font-semibold tracking-wide text-amber-400">
                            × ENERGYHUB
                        </span>
                    </div>
                </a>

                {/* ================= DESKTOP NAVIGATION ================= */}
                <div className="hidden items-center gap-8 lg:flex">
                    <a
                        href="/"
                        className="text-sm font-medium text-slate-300 transition hover:text-amber-400"
                    >
                        Home
                    </a>

                    {/* <a
                        href="#services"
                        className="text-sm font-medium text-slate-300 transition hover:text-amber-400"
                    >
                        Services
                    </a>

                    <a
                        href="#process"
                        className="text-sm font-medium text-slate-300 transition hover:text-amber-400"
                    >
                        How It Works
                    </a>

                    <a
                        href="#project-form"
                        className="text-sm font-medium text-slate-300 transition hover:text-amber-400"
                    >
                        Projects
                    </a>

                    <a
                        href="#contact"
                        className="text-sm font-medium text-slate-300 transition hover:text-amber-400"
                    >
                        Contact
                    </a> */}
                </div>

                {/* ================= RIGHT BUTTONS ================= */}
                <div className="hidden items-center gap-3 md:flex">

                    {/* Login */}
                    <a
                        href="/login"
                        className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-400"
                    >
                        Login
                    </a>
                </div>

                {/* ================= MOBILE MENU BUTTON ================= */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-xl text-white transition hover:border-amber-400 hover:text-amber-400 lg:hidden"
                    aria-label="Toggle navigation"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* ================= MOBILE MENU ================= */}
            {menuOpen && (
                <div className="border-t border-white/10 bg-slate-950 px-4 pb-6 pt-3 lg:hidden">

                    <div className="mx-auto flex max-w-7xl flex-col">

                        <a
                            href="#home"
                            onClick={closeMenu}
                            className="border-b border-white/5 py-4 text-sm font-medium text-slate-300 transition hover:text-amber-400"
                        >
                            Home
                        </a>

                        <a
                            href="#services"
                            onClick={closeMenu}
                            className="border-b border-white/5 py-4 text-sm font-medium text-slate-300 transition hover:text-amber-400"
                        >
                            Services
                        </a>

                        <a
                            href="#process"
                            onClick={closeMenu}
                            className="border-b border-white/5 py-4 text-sm font-medium text-slate-300 transition hover:text-amber-400"
                        >
                            How It Works
                        </a>

                        <a
                            href="#project-form"
                            onClick={closeMenu}
                            className="border-b border-white/5 py-4 text-sm font-medium text-slate-300 transition hover:text-amber-400"
                        >
                            Projects
                        </a>

                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="border-b border-white/5 py-4 text-sm font-medium text-slate-300 transition hover:text-amber-400"
                        >
                            Contact
                        </a>

                        {/* Mobile buttons */}
                        <div className="mt-5 flex flex-col gap-3 sm:flex-row">

                            <a
                                href="/login"
                                onClick={closeMenu}
                                className="rounded-lg border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-400"
                            >
                                Login
                            </a>

                            <a
                                href="#project-form"
                                onClick={closeMenu}
                                className="rounded-lg bg-amber-500 px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-amber-400"
                            >
                                Start Project
                            </a>

                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;