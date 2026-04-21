import React from 'react'
import Shreya_Profile_Image from '../../public/Shreya_Profile.png'

const About = () => {
  return (
    <>
    {/* Hero Section  */}
    <main className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10 lg:py-20">
        <section className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative group">
            <div className="absolute -inset-4 rounded-xl bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-slate-200 dark:bg-slate-800 aspect-[4/5]">
            <img
                alt="Professional portrait of architect"
                className="h-full w-full object-cover"
                data-alt="Professional portrait of a female interior designer in a minimalist studio"
                src="/Shreya_Profile.png"
            />
            </div>
        </div>
        <div className="flex flex-col gap-8">
            <div className="space-y-4">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                About Me
            </span>
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                Design with <span className="text-primary italic">Purpose.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Architect specializing in hospitality and interior design, with hands-on experience in design development, client coordination, and execution-stage drawings. Skilled in translating concepts into practical, buildable solutions, with experience handling freelance and on-site projects independently. Focused on functional planning, aesthetics, and timely project delivery.
            </p>
            </div>
            <div className="grid grid-cols-2 gap-6 border-t border-slate-200 dark:border-slate-800 pt-8">
            <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                Location
                </p>
                <p className="mt-1 font-medium">Bijapur, Karnataka, India</p>
            </div>
            <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                Experience
                </p>
                <p className="mt-1 font-medium">1.5+ Years</p>
            </div>
            <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                Specialization
                </p>
                <p className="mt-1 font-medium">Hospitality & Interior Design</p>
            </div>
            <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                Education
                </p>
                <p className="mt-1 font-medium">Bachelor of Architecture (B.Arch)</p>
            </div>
            </div>
                <div className="flex gap-4 pt-4">
                    <a href="/Shreya_Bagewadi_CV.pdf" download>
                        <button className="flex items-center gap-2 rounded-lg border-2 border-primary px-6 py-3 font-bold text-primary hover:bg-primary hover:text-white transition-all">
                        <span className="material-symbols-outlined">download</span>
                        Download CV
                        </button>
                    </a>
                    <a href="/Shreya_Portfolio.pdf" download>
                        <button className="flex items-center gap-2 rounded-lg border-2 border-primary px-6 py-3 font-bold text-primary hover:bg-primary hover:text-white transition-all">
                        <span className="material-symbols-outlined">download</span>
                        Download Portfolio
                        </button>
                    </a>
                </div>
        </div>
        </section>
        <section className="mt-24 lg:mt-32">
        <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
            Professional Journey
            </h2>
            <div className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-primary" />
        </div>
        <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-8 top-0 h-full w-0.5 bg-slate-200 dark:bg-slate-800 md:left-1/2" />
            <div className="space-y-12">
            <div className="relative flex flex-col md:flex-row md:items-center">
                <div className="flex items-center md:w-1/2 md:justify-end md:pr-12">
                <div className="hidden md:block text-right">
                    <h3 className="text-xl font-bold">Architect</h3>
                    <p className="text-primary font-medium">Nile Hotel Management Company</p>
                    <p className="text-sm text-slate-500">Nov 2025 – Apr 2026 | Gandhidham, Gujarat</p>
                </div>
                </div>
                <div className="absolute left-8 z-10 flex size-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-white shadow-xl md:left-1/2">
                <span className="material-symbols-outlined text-sm">work</span>
                </div>
                <div className="pl-20 md:w-1/2 md:pl-12">
                <div className="md:hidden mb-2">
                    <h3 className="text-xl font-bold">Senior Architect</h3>
                    <p className="text-primary font-medium">Studio Luxe</p>
                    <p className="text-sm text-slate-500">2018 - Present</p>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                    Developed layout planning and design concepts for hospitality projects. Produced working drawings, 3D models, and client presentations. Coordinated with consultants and assisted in material selection and detailing.
                </p>
                </div>
            </div>
            <div className="relative flex flex-col md:flex-row md:items-center">
                <div className="pl-20 md:w-1/2 md:pr-12 md:pl-0 md:text-right">
                <div className="mb-2">
                    <h3 className="text-xl font-bold">Interior & Architecture</h3>
                    <p className="text-primary font-medium">Freelance</p>
                    <p className="text-sm text-slate-500">Apr 2025 – Nov 2025 | Remote</p>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                    Handled end-to-end residential and small commercial projects. Created concept designs, layouts, and 3D visualizations. Managed client discussions and presentations independently.
                </p>
                </div>
                <div className="absolute left-8 z-10 flex size-10 -translate-x-1/2 items-center justify-center rounded-full bg-white dark:bg-slate-900 border-2 border-primary text-primary shadow-xl md:left-1/2">
                <span className="material-symbols-outlined text-sm">
                    architecture
                </span>
                </div>
                <div className="md:w-1/2" />
            </div>
            <div className="relative flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2" />
                <div className="absolute left-8 z-10 flex size-10 -translate-x-1/2 items-center justify-center rounded-full bg-white dark:bg-slate-900 border-2 border-primary text-primary shadow-xl md:left-1/2">
                <span className="material-symbols-outlined text-sm">school</span>
                </div>
                <div className="pl-20 md:w-1/2 md:pl-12">
                <div className="mb-2">
                    <h3 className="text-xl font-bold">Bachelor of Architecture (B.Arch)</h3>
                    <p className="text-primary font-medium">
                    BLDEA’s V.P. Dr. P.G. Halakatti College of Engineering & Technology, Vijayapura
                    </p>
                    {/* <p className="text-sm text-slate-500">2011 - 2014</p> */}
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                    Built a strong foundation in architectural design, spatial planning, and sustainable development.
                </p>
                </div>
            </div>
            <div className="relative flex flex-col md:flex-row md:items-center">
                <div className="pl-20 md:w-1/2 md:pr-12 md:pl-0 md:text-right">
                <div className="mb-2">
                    <h3 className="text-xl font-bold">
                    Interior Designer
                    </h3>
                    <p className="text-primary font-medium">
                    Andspaces
                    </p>
                    <p className="text-sm text-slate-500">Dec 2024 – Apr 2025 | Pune, Maharashtra</p>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                    Worked on residential and commercial interiors. Developed space planning, mood boards, and 3D visuals while collaborating with senior designers and clients.
                </p>
                </div>
                <div className="absolute left-8 z-10 flex size-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-white shadow-xl md:left-1/2">
                <span className="material-symbols-outlined text-sm">
                    emoji_events
                </span>
                </div>
                <div className="md:w-1/2" />
            </div>
            </div>
        </div>
        </section>
        <section className="mt-24 lg:mt-32 rounded-2xl bg-white dark:bg-slate-900 p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span className="material-symbols-outlined">auto_awesome</span>
            </div>
            <h3 className="text-xl font-bold">Visual Aesthetics</h3>
            <p className="text-slate-600 dark:text-slate-400">
                Mastery of color theory, texture layering, and light manipulation to
                create emotive atmospheres.
            </p>
            </div>
            <div className="flex flex-col gap-4">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span className="material-symbols-outlined">eco</span>
            </div>
            <h3 className="text-xl font-bold">Eco-Sourcing</h3>
            <p className="text-slate-600 dark:text-slate-400">
                Commitment to sustainable supply chains and the integration of
                low-impact, local materials.
            </p>
            </div>
            <div className="flex flex-col gap-4">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span className="material-symbols-outlined">view_in_ar</span>
            </div>
            <h3 className="text-xl font-bold">Spatial Strategy</h3>
            <p className="text-slate-600 dark:text-slate-400">
                Expertise in AutoCAD, Revit, and Rhino for precise architectural
                planning and 3D visualization.
            </p>
            </div>
        </div>
        </section>
    </main>
    </>

  )
}

export default About
