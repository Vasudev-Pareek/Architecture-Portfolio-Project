import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="bg-neutral-charcoal text-white py-16 px-8 lg:px-16 border-t border-white/5">
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-2xl text-primary font-light">
                    grid_view
                </span>
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em]">
                    SB Studio
                    </p>
                    <p className="text-[9px] text-neutral-500 uppercase tracking-widest mt-1">
                    © 2026 Architectural Design Studio
                    </p>
                </div>
                </div>
                <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                <a className="hover:text-white transition-colors" href="#">
                    Privacy Policy
                </a>
                <a className="hover:text-white transition-colors" href="#">
                    Terms of Service
                </a>
                <a className="hover:text-white transition-colors" href="#">
                    Careers
                </a>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
