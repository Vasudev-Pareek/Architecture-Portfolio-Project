import React, { useState } from "react";
import axios from "axios";

const ContactSection = () => {

    const [formData, setFormData] = useState({
        FullName: "",
        EmailAddress: "",
        Deadline: "",
        MobileNumber: "",
        Subject: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.FullName || !formData.EmailAddress) {
            alert("Please enter full name and email address");
            return;
        }

        try {

            const res = await axios.post(
                `https://architecture-portfolio-project-backend.onrender.com/api/projects/addcustomerResponses`,
                formData,
                { headers: { "Content-Type": "application/json" } }
            );

            alert(res.data.message);

            setFormData({
                FullName: "",
                EmailAddress: "",
                Deadline: "",
                MobileNumber: "",
                Subject: "",
                description: ""
            });

        } catch (error) {
            console.error(error);
            alert("Error submitting form");
        }
    };
    
  return (
    <>
        <section className="py-32 px-8 lg:px-16 bg-neutral-charcoal text-white"id="contact">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                <div>
                    <h2 className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-8">
                    Get in Touch
                    </h2>
                    <h3 className="font-serif text-5xl md:text-7xl mb-14 leading-[1.1]">
                    Let's shape your <br />
                    <span className="italic font-normal">vision</span>
                    together.
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-4">
                        Studio Location
                        </h4>
                        <p className="text-neutral-300 text-sm leading-relaxed">
                            Bijapur, Karnataka, India
                        </p>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-4">
                        New Business
                        </h4>
                        <p className="text-neutral-300 text-sm leading-relaxed">
                         Ar.shreyab.2002@gmail.com
                        <br />
                            (+91) 87339 88913
                        </p>
                    </div>
                    </div>
                    <div className="flex gap-8">
                    <a
                        className="text-[10px] font-bold uppercase tracking-widest text-white hover:text-primary transition-colors"
                        href="https://www.instagram.com/ar.shreya_bagewadi?igsh=MWszYXNnOWt4bm9vcQ=="
                    >
                        Instagram
                    </a>
                    <a
                        className="text-[10px] font-bold uppercase tracking-widest text-white hover:text-primary transition-colors"
                        href="https://www.linkedin.com/in/shreya-bagewadi-17952121b/"
                    >
                        LinkedIn
                    </a>
                    {/* <a
                        className="text-[10px] font-bold uppercase tracking-widest text-white hover:text-primary transition-colors"
                        href="#"
                    >
                        Pinterest
                    </a> */}
                    </div>
                </div>
                <div className="bg-white p-12 lg:p-16 rounded-xl">
                    <form className="space-y-10" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="relative">
                        <input
                            className="w-full bg-transparent border-0 border-b border-neutral-200 focus:ring-0 focus:border-primary py-3 px-0 text-neutral-charcoal placeholder-neutral-400 text-sm"
                            placeholder="Full Name"
                            type="text"
                            onChange={handleChange}
                            name="FullName"
                        />
                        </div>
                        <div className="relative">
                        <input
                            className="w-full bg-transparent border-0 border-b border-neutral-200 focus:ring-0 focus:border-primary py-3 px-0 text-neutral-charcoal placeholder-neutral-400 text-sm"
                            placeholder="Email Address"
                            type="email"
                            onChange={handleChange}
                            name="EmailAddress"
                        />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="relative">
                        <input
                            className="w-full bg-transparent border-0 border-b border-neutral-200 focus:ring-0 focus:border-primary py-3 px-0 text-neutral-charcoal placeholder-neutral-400 text-sm"
                            placeholder="Deadline"
                            type="date"
                            onChange={handleChange}
                            name="Deadline"
                        />
                        </div>
                        <div className="relative">
                        <input
                            className="w-full bg-transparent border-0 border-b border-neutral-200 focus:ring-0 focus:border-primary py-3 px-0 text-neutral-charcoal placeholder-neutral-400 text-sm"
                            placeholder="Mobile Number"
                            type="number"
                            onChange={handleChange}
                            name="MobileNumber"
                        />
                        </div>
                    </div>
                    <div>
                        <input
                            className="w-full bg-transparent border-0 border-b border-neutral-200 focus:ring-0 focus:border-primary py-3 px-0 text-neutral-charcoal placeholder-neutral-400 text-sm"
                            placeholder="Subject / Project Type"
                            type="text"
                            onChange={handleChange}
                            name="Subject"
                        />
                    </div>
                    <div>
                        <textarea
                        className="w-full bg-transparent border-0 border-b border-neutral-200 focus:ring-0 focus:border-primary py-3 px-0 text-neutral-charcoal placeholder-neutral-400 text-sm resize-none"
                        placeholder="Tell us about your project..."
                        rows={4}
                        defaultValue={""}
                        onChange={handleChange}
                        name="description"
                        />
                    </div>
                    <button className="group flex items-center gap-6 bg-neutral-charcoal text-white px-10 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-primary transition-all duration-300 rounded-xl">
                        Send Inquiry
                        <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">
                        arrow_forward
                        </span>
                    </button>
                    </form>
                </div>
                </div>
                <div className="mt-32 w-full h-[500px] grayscale filter brightness-50 contrast-125 opacity-40 hover:opacity-70 transition-opacity duration-700">
                <div className="w-full h-full bg-neutral-800 flex items-center justify-center border border-white/10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                    <div className="relative z-10 text-center">
                    <span className="material-symbols-outlined text-5xl mb-6 font-light">
                        location_on
                    </span>
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em]">
                        View Interactive Map
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactSection
