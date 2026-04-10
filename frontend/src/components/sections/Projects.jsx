import React from 'react'
import { Link } from "react-router-dom"

const Projects = () => {
  return (
    <main className="py-32 px-8 lg:px-16 bg-neutral-soft-grey">
    {/* Section Header */}
    <div className="flex flex-col gap-4 mb-12">
        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
        <span className="w-8 h-[2px] bg-primary" />
        Portfolio Index
        </div>
        <h1 className="text-slate-900 dark:text-slate-100 text-5xl md:text-6xl font-black leading-tight tracking-tight max-w-2xl">
        Curation of refined spaces.
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl font-medium">
        Explore our diverse portfolio ranging from intimate residential retreats
        to expansive commercial environments.
        </p>
    </div>
    {/* Filter Tabs */}
    <div className="mb-10 overflow-x-auto no-scrollbar">
        <div className="flex border-b border-slate-200 dark:border-slate-800 gap-10 min-w-max">
        <a
            className="flex flex-col items-center justify-center border-b-[3px] border-primary text-slate-900 dark:text-slate-100 pb-4"
            href="#"
        >
            <p className="text-sm font-bold tracking-wide">All Perspectives</p>
        </a>
        <a
            className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 pb-4 transition-all"
            href="#"
        >
            <p className="text-sm font-bold tracking-wide">Residential</p>
        </a>
        <a
            className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 pb-4 transition-all"
            href="#"
        >
            <p className="text-sm font-bold tracking-wide">Commercial</p>
        </a>
        <a
            className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 pb-4 transition-all"
            href="#"
        >
            <p className="text-sm font-bold tracking-wide">Sustainable</p>
        </a>
        <a
            className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 pb-4 transition-all"
            href="#"
        >
            <p className="text-sm font-bold tracking-wide">Hospitality</p>
        </a>
        </div>
    </div>
    {/* Visual Directory Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {/* Project 1: Large Featured */}
        <div className="lg:col-span-2 group relative overflow-hidden rounded-xl aspect-[16/9] cursor-pointer">
        <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            data-alt="Modern minimalist living room with floor to ceiling windows"
            style={{
            backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAuf7oTlcIGDE-F4o_faYrKtqBsP-N_T0iL7AFxk4Pn8QWxoWbcyFe-_xMal1Xvphv-BNZWKnuckDR9mK-0ip2zR1Lo41b0wsJZKYmEmaZ3AEexKiDWyZbj8h6w4GsxSNRn1Dafypdi4J4whdwMM1fJGr_Armnqn2XV2TqZjM3A5Odtns5jxYHkhCmO5I_CBJy2o0qiiM_JOSUqv7xTiDTc9WHEq7AF-fV7ayCQiv6Ue7LWJp7iGPopzSrTzGKqYnJjtThhR6l6hWg")'
            }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
            <div className="flex flex-col gap-2">
            <span className="text-primary text-xs font-black uppercase tracking-[0.2em]">
                Featured Selection
            </span>
            <h3 className="text-white text-3xl font-bold">The Glass Pavilion</h3>
            <p className="text-slate-300 text-sm font-medium">
                Residential • Sonoma Valley
            </p>
            </div>
            <button className="bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white hover:text-black transition-all">
            <span className="material-symbols-outlined">arrow_outward</span>
            </button>
        </div>
        </div>
        {/* Project 2 */}
        <div className="group relative overflow-hidden rounded-xl aspect-square lg:aspect-auto cursor-pointer">
        <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            data-alt="Monochromatic modern office meeting space"
            style={{
            backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAEWmaqAwjNNjBWLgGs5r_ZSkELVdTCO6iKIjEhiQe8PRcgg8QbJVL3jvf-nQ44cyMU30mruzQuFfWJaXwV2kwCcLY8g7FXtOMGTNiW5lBQuGul9j3elsHmAIGDKLylj1U9XRIixTNxKIJw7VGBupU2tG9jJicpcLNa6hf_VxvvjnSIBmY_y2BdnzxIJXt_RmBAMubpeHWuRsWze76dToRifsW-GtXopHey0YZnY1VyDN9bjK7jjuSMSYX2DiBmC5oIyvCfSUQeXDs")'
            }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
            <span className="text-primary text-xs font-black uppercase tracking-[0.2em]">
            Commercial
            </span>
            <h3 className="text-white text-xl font-bold mt-1">NXT Workspace</h3>
            <p className="text-slate-300 text-xs font-medium">
            Interior Branding • Berlin
            </p>
        </div>
        </div>
        {/* Project 3 */}
        <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
        <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            data-alt="Warm wood accents in a master bedroom design"
            style={{
            backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC6-Y2xcAXa9yH27HyoQfPgMA35T_z8htExdrRtXCS2POelwllaX8dn6i2Zt3ImScHCSmGZOKgvw7KPYwYDDPEQ4VTnhVSd2CElMLlDPoNBDJJnvQneNGhtLQQh9Sc8zVxxKXMsemfvfpXa7Ryobx-ufrFx_75RitAd0YNUAPPNlH5HgVXSiT4eOqDJjK5T5Hww8-00TsQ9-XQtVzMZvoL_nzrO5JYPgEZAIbI7jC79Puop2i6K0Ckb-eTS2pEp3I0ph4mnWx5URis")'
            }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
            <span className="text-primary text-xs font-black uppercase tracking-[0.2em]">
            Residential
            </span>
            <h3 className="text-white text-xl font-bold mt-1">
            Oak &amp; Stone Villa
            </h3>
            <p className="text-slate-300 text-xs font-medium">
            Holistic Living • Kyoto
            </p>
        </div>
        </div>
        {/* Project 4 */}
        <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
        <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            data-alt="Luxury boutique hotel suite with balcony view"
            style={{
            backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDORKEaGIPO61zw8n599ts5VhXG4V3wlrXsYGKmOa5U9CmjCsXGWssNTV3HBO5hJss09NVwqV0PZqT9UODYYFULndgr_hLo1_KBrkDv-9l257wGH6p0zMDsS10L7oRs7ysFpBKs55StoksoHxgeyF5ETknvlSVfNMvymiuKHjAm42JKECoV0R1o8OF0d9OyXmCYiV4uWdf7DvC5NAl53u0PrYKVYpxJirLt8eM85xGNN2_KkhOmV8KfHCifMIY-kIHNv8z0t_mG-LU")'
            }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
            <span className="text-primary text-xs font-black uppercase tracking-[0.2em]">
            Hospitality
            </span>
            <h3 className="text-white text-xl font-bold mt-1">Azure Heights</h3>
            <p className="text-slate-300 text-xs font-medium">
            Boutique Hotel • Santorini
            </p>
        </div>
        </div>
        {/* Project 5 */}
        <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
        <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            data-alt="Sustainable kitchen design with natural materials"
            style={{
            backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDp4mDcwsSnJ34bWst-FVYkBB3JkjM5lTUgziojN1egCGDNbi6Ql_VCZusPVdUo7D49CPI-8FZW0LBR9w8bITQLgwTfq5Q8om84gCcZO3-rEVcuqIGEjmt59Nb60Blm5P7Tid6UZmuc_82cyblmm-z7fQjrVCfWV0a_M2ylbl54AUtNRVke7H-AGsKRno4yrQML58V-Ac75CtzgaHhIscIT_SfgojmKfpvkE4wIhzTMn8YPM-PG1AYBeu9cajMC7l2ZHybnL8475fg")'
            }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
            <span className="text-primary text-xs font-black uppercase tracking-[0.2em]">
            Sustainable
            </span>
            <h3 className="text-white text-xl font-bold mt-1">Eco-Loft Concept</h3>
            <p className="text-slate-300 text-xs font-medium">
            Net Zero • Portland
            </p>
        </div>
        </div>
        {/* Project 6: Call to Action Card */}
        <div className="bg-primary/10 dark:bg-primary/5 rounded-xl flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-primary/30">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary">
            <span className="material-symbols-outlined text-4xl">architecture</span>
        </div>
        <h3 className="text-slate-900 dark:text-slate-100 text-2xl font-bold mb-3">
            Your Vision Next?
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xs">
            We are currently accepting new commissions for the next creative
            quarter.
        </p>
        <Link to="/work"  className="text-[10px] font-bold tracking-[0.25em] uppercase hover:text-primary transition-colors">
            <button className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2">
            Load More Projects
            <span className="material-symbols-outlined text-sm">
                trending_flat
            </span>
            </button>
        </Link>
        </div>
    </div>
    {/* Detailed Grid List */}
    <div className="border-t border-slate-200 dark:border-slate-800 pt-16">
        <div className="flex justify-between items-end mb-10">
        <h2 className="text-3xl font-black tracking-tight">Full Archive</h2>
        <p className="text-slate-500 font-bold text-sm">
            Showing 12 of 48 Projects
        </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
        {/* Project List Item 1 */}
        <div className="flex items-center justify-between py-6 border-b border-slate-200 dark:border-slate-800 group cursor-pointer">
            <div className="flex items-center gap-6">
            <span className="text-slate-300 dark:text-slate-700 font-black text-xl">
                01
            </span>
            <div>
                <h4 className="text-lg font-bold group-hover:text-primary transition-colors">
                Vanguard Corporate HQ
                </h4>
                <p className="text-sm text-slate-500">
                Commercial Architecture • London
                </p>
            </div>
            </div>
            <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-all group-hover:translate-x-1">
            arrow_forward
            </span>
        </div>
        {/* Project List Item 2 */}
        <div className="flex items-center justify-between py-6 border-b border-slate-200 dark:border-slate-800 group cursor-pointer">
            <div className="flex items-center gap-6">
            <span className="text-slate-300 dark:text-slate-700 font-black text-xl">
                02
            </span>
            <div>
                <h4 className="text-lg font-bold group-hover:text-primary transition-colors">
                The Serenity Spa
                </h4>
                <p className="text-sm text-slate-500">Hospitality • Maldives</p>
            </div>
            </div>
            <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-all group-hover:translate-x-1">
            arrow_forward
            </span>
        </div>
        {/* Project List Item 3 */}
        <div className="flex items-center justify-between py-6 border-b border-slate-200 dark:border-slate-800 group cursor-pointer">
            <div className="flex items-center gap-6">
            <span className="text-slate-300 dark:text-slate-700 font-black text-xl">
                03
            </span>
            <div>
                <h4 className="text-lg font-bold group-hover:text-primary transition-colors">
                Urbane Penthouse
                </h4>
                <p className="text-sm text-slate-500">Residential Interior • NYC</p>
            </div>
            </div>
            <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-all group-hover:translate-x-1">
            arrow_forward
            </span>
        </div>
        {/* Project List Item 4 */}
        <div className="flex items-center justify-between py-6 border-b border-slate-200 dark:border-slate-800 group cursor-pointer">
            <div className="flex items-center gap-6">
            <span className="text-slate-300 dark:text-slate-700 font-black text-xl">
                04
            </span>
            <div>
                <h4 className="text-lg font-bold group-hover:text-primary transition-colors">
                Botanical Garden Center
                </h4>
                <p className="text-sm text-slate-500">
                Sustainable Public • Singapore
                </p>
            </div>
            </div>
            <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-all group-hover:translate-x-1">
            arrow_forward
            </span>
        </div>
        </div>
        {/* <div class="flex justify-center mt-12">
            <button
            class="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-bold border-2 border-slate-200 dark:border-slate-800 px-8 py-3 rounded-lg hover:border-primary transition-all"
            >
            Load More Projects
            <span class="material-symbols-outlined">expand_more</span>
            </button>
        </div> */}
    </div>
    </main>

  )
}

export default Projects
