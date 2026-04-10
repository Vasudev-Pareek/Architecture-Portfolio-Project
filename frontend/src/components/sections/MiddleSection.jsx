import React from 'react'

const MiddleSection = () => {
  return (
    <>
    <section className="py-32 px-8 lg:px-16 bg-white" id="about">
        <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-xl">
                <img
                alt="Designer Portrait"
                className="w-full h-full object-cover grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5rtWibUcqFeT86OstZ6WmFCx09Ef5u917WRjt4_zmlvmZvSDY8vuwdoajmnrbf88zC7Hbo_IKXXGGI9nGRX5gwF33PVDwhxRjt1vxBWv3BbaK4oWk7_BupKCjETnqWZUVP3nSjPOi0Y_ISOsibUROhcHFVEdoB2Kh5V6czdEVafKXnrGTfd-cQ0AJih0vRvOilGAh5cKYP09BS36lAF6Zcdod5B8H9tcHd4MFywa8qSteL680fs4gqCro5q4gNCiVimlJy3VtTkU"
                />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-neutral-soft-grey -z-10" />
            <div className="absolute top-10 -right-10 w-24 h-24 border border-primary/20 -z-10" />
            </div>
            <div className="lg:col-span-7">
            <h2 className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-primary" /> The Studio
            </h2>
            <h3 className="font-serif text-5xl md:text-7xl text-neutral-charcoal leading-tight mb-10">
                Designing with <br />
                <span className="italic">Intention &amp; Purpose.</span>
            </h3>
            <p className="text-neutral-500 text-lg leading-relaxed max-w-2xl mb-16">
                We believe the most profound spaces are those that reflect the soul
                of their inhabitants. Our practice focuses on the intersection of
                heritage craftsmanship and contemporary minimalism, creating
                timeless environments that elevate the everyday experience.
            </p>
            <div className="relative timeline-track py-12">
                <div className="flex flex-col md:flex-row justify-between gap-12 relative z-10">
                <div className="flex-1 bg-white">
                    <div className="w-3 h-3 rounded-full bg-primary mb-6 ring-8 ring-white" />
                    <span className="text-primary font-bold text-xs tracking-widest">
                    2020 — PRESENT
                    </span>
                    <h5 className="font-serif text-xl text-neutral-charcoal mt-3">
                    Principal Partner
                    </h5>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-widest mt-2">
                    Aura Studio, London
                    </p>
                </div>
                <div className="flex-1 bg-white">
                    <div className="w-3 h-3 rounded-full bg-neutral-mid-grey mb-6 ring-8 ring-white" />
                    <span className="text-neutral-400 font-bold text-xs tracking-widest">
                    2016 — 2020
                    </span>
                    <h5 className="font-serif text-xl text-neutral-charcoal mt-3">
                    Senior Designer
                    </h5>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-widest mt-2">
                    Metropolitan Works, NY
                    </p>
                </div>
                <div className="flex-1 bg-white">
                    <div className="w-3 h-3 rounded-full bg-neutral-mid-grey mb-6 ring-8 ring-white" />
                    <span className="text-neutral-400 font-bold text-xs tracking-widest">
                    2013 — 2016
                    </span>
                    <h5 className="font-serif text-xl text-neutral-charcoal mt-3">
                    Junior Architect
                    </h5>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-widest mt-2">
                    Nordic Spaces, Oslo
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    <section className="py-32 px-8 lg:px-16 bg-neutral-soft-grey" id="categories">
        <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
            <h2 className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-6">
                Expertise
            </h2>
            <h3 className="font-serif text-5xl md:text-6xl text-neutral-charcoal">
                Core Focus
            </h3>
            </div>
            <p className="text-neutral-500 text-sm max-w-xs tracking-wide">
            Specializing in high-end environments across multiple sectors of
            architectural design.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-xl">
            <img
                alt="Residential"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAcBbc07FiENGanE1DqlbCKr3bTXQaGpW-dunquRtfcxUFj4h0NSbwSBU3IA0S0A2eFHH_lit04ePw5B3DIcJ7WIt12mhbinasYWC8_zg8WZNCGpsC-to55uXPCA129UzyXKlfog6gQlugLVvNhena5ofAbBss-3zLWnAq_00_NX1-w4rvshw6Pm3hSrUuv24tteCbQ6RBJqXQkmtTKi_cLpQ1dDIJVHJ0pOssoS9YfspGdfPkoz-VxWSWi3jPajmX6d7Jl178mTw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-charcoal/80 via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white z-20">
                <span className="text-[10px] uppercase tracking-[0.3em] mb-4 opacity-50 font-bold">
                Project Type 01
                </span>
                <h4 className="font-serif text-3xl mb-2">Residential</h4>
                <div className="w-0 group-hover:w-full h-px bg-primary transition-all duration-500" />
            </div>
            </div>
            <div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-xl">
            <img
                alt="Commercial"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1UIXzPTQ6F5wxwADMQQnndzTcA1H0b57-U9NFjksq9TE2ZSL4HT2NHqsEUg6XwwV0To6G2bir0BT4YcB_EtwpTk1LuAg9gPNuEX_NIXKnUp94bnPEdo1WrUR45vq4wNswpMtqFx-3GNX3xCDoLoyx5r1UymaEQ4Ij_nqItf5eKKOcslv2Kmgmp-ywBYjUL3nCu8qOqBOoOdU14hC__1EEFbhPCzAkHsLe6HprW59ClSRBSihZr1RvkpmIy8WALdCLv1y7xlJCn9I"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-charcoal/80 via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white z-20">
                <span className="text-[10px] uppercase tracking-[0.3em] mb-4 opacity-50 font-bold">
                Project Type 02
                </span>
                <h4 className="font-serif text-3xl mb-2">Commercial</h4>
                <div className="w-0 group-hover:w-full h-px bg-primary transition-all duration-500" />
            </div>
            </div>
            <div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-xl">
            <img
                alt="Hospitality"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrAGMtBqnE5YzvbYrZqh8-7jEuCPTzuK5KPUDEfQGhYYowcx8nHt1t3yJPtAu8HTT7s1RmoLYSwfnQ5KKY6FmGF4EVeDS1s6RkVW2rz64Hms4RCVeDUHZrjnj5XAsep-fmOY20dwShwiCBjVNGQnVaPhhaDkKAXkvO38LGZ3MZytySW8jcxI72vv6WsrjGWNRc1N6IAmDCaqAL2CL4d3smeLy8Esb6krxMtAprTXkfwhr7q7ucayB-hjPtj-GMu6NsN1aU_zU56W4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-charcoal/80 via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white z-20">
                <span className="text-[10px] uppercase tracking-[0.3em] mb-4 opacity-50 font-bold">
                Project Type 03
                </span>
                <h4 className="font-serif text-3xl mb-2">Hospitality</h4>
                <div className="w-0 group-hover:w-full h-px bg-primary transition-all duration-500" />
            </div>
            </div>
            <div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-xl">
            <img
                alt="Furniture"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD13mtNWm9e8XrGNQD-TrEI2Vmz9gZ0gg1bR7OYnutkcv8XV9tVG_QZLW9Z87QvnR6K7zyUylnF5eZzdiP8aO6Acrsa5x1-a-Ey2tR_5lmWp9GLnvhm-FIc594haUEQ-o3TIDjmm8GKHFI2ktLDjsA3qsTd8C3UTjDYyT72GTTQ1ewTeI2oQAFRKn1CrC4Fgw8cjmSQsAOruAsjE_GCqJBwPmLhr5obJMcOJogJiQZlZn5g0cbQt-f3TQL-b5cAot12g_YP203GR_8"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-charcoal/80 via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white z-20">
                <span className="text-[10px] uppercase tracking-[0.3em] mb-4 opacity-50 font-bold">
                Project Type 04
                </span>
                <h4 className="font-serif text-3xl mb-2">Bespoke</h4>
                <div className="w-0 group-hover:w-full h-px bg-primary transition-all duration-500" />
            </div>
            </div>
        </div>
        </div>
    </section>
    </>

  )
}

export default MiddleSection
