import React from 'react'
import { Link } from "react-router-dom"



const Navbar = () => {
  return (
    <div>
    <header className="sticky-nav">
        <div className="max-w-[1440px] mx-auto px-8 py-5 lg:px-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-primary font-light">
            grid_view
            </span>
            <h2 className="text-xl font-medium tracking-[0.2em] uppercase">
            Seru Studio
            </h2>
        </div>
        <nav className="hidden lg:flex items-center gap-12">
            <Link to="/" className="text-[10px] font-bold tracking-[0.25em] uppercase hover:text-primary transition-colors">Home</Link>
            <Link to="/work" className="text-[10px] font-bold tracking-[0.25em] uppercase hover:text-primary transition-colors">Work</Link>
            <Link to="/about" className="text-[10px] font-bold tracking-[0.25em] uppercase hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="text-[10px] font-bold tracking-[0.25em] uppercase hover:text-primary transition-colors">Contact Us</Link>
            {/* <Link to="/adminpage" className="text-[10px] font-bold tracking-[0.25em] uppercase hover:text-primary transition-colors">Admin Page</Link> */}
        </nav>
        <div className="flex items-center gap-8">
            <Link to="/contact" className="hidden sm:block text-[10px] font-bold uppercase tracking-[0.2em] border-b border-neutral-charcoal pb-1 hover:text-primary hover:border-primary transition-all">
                Work With Us
            </Link>
            <button className="lg:hidden material-symbols-outlined">menu</button>
        </div>
        </div>
    </header>
    </div>
  )
}

export default Navbar
