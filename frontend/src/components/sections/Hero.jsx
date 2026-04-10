import React from 'react'
// import HeroImg from "../../assets/hero_section.png";
import HeroImg from "../../assets/Hero_Image.png";
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <>
    {/* Hero Section  */}
        <section
            className="relative h-screen flex items-center justify-center overflow-hidden"
            id="home">
            <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-neutral-charcoal/40 z-10" />
            <img
                alt="Hero Interior"
                className="w-full h-full object-cover"
                src={HeroImg}
                // src="https://lh3.googleusercontent.com/aida-public/AB6AXuD13mtNWm9e8XrGNQD-TrEI2Vmz9gZ0gg1bR7OYnutkcv8XV9tVG_QZLW9Z87QvnR6K7zyUylnF5eZzdiP8aO6Acrsa5x1-a-Ey2tR_5lmWp9GLnvhm-FIc594haUEQ-o3TIDjmm8GKHFI2ktLDjsA3qsTd8C3UTjDYyT72GTTQ1ewTeI2oQAFRKn1CrC4Fgw8cjmSQsAOruAsjE_GCqJBwPmLhr5obJMcOJogJiQZlZn5g0cbQt-f3TQL-b5cAot12g_YP203GR_8"
            />
            </div>
            <div className="relative z-20 text-center px-6 max-w-6xl">
            <p className="text-white text-xs uppercase tracking-[0.8em] mt-[280px] font-light">
                Architectural Excellence • Since 2010
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center mt-5 gap-8">
                <Link to="/work"
                className="group relative px-12 py-5 overflow-hidden border border-white text-white transition-all hover:text-neutral-charcoal rounded-xl"
                href="#work"
                >
                <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.3em]">
                    Explore Work
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
            </div>
            </div>
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-70">
            <span className="text-[9px] uppercase tracking-[0.4em] text-white rotate-90 mb-4">
                Scroll
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
            </div>
        </section>
    </>

  )
}

export default Hero
