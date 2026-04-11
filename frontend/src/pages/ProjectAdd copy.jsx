import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useEffect } from 'react';

const ProjectAdd = () => {
    const [categories, setCategories] = useState([]);
    // const [subcategories, setSubCategories] = useState([]);
    const [allSubcategories, setAllSubCategories] = useState([]);
    const [filteredSubcategories, setFilteredSubCategories] = useState([]);

    const [formData, setFormData] = useState({
    title: "",
    category: "",        // name
    categoryId: "",      // id
    subcategory: "",     // name
    subcategoryId: "",   // id
    description: "",
    ActiveProject: false,
    SetCover: false,
    image: null
    });


    // const handleChange = (e) => {
    //     const { name, value } = e.target;

    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // };
    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });

        // 🔥 FILTER LOGIC HERE
        if (name === "category") {
            if (value === "") {
                setFilteredSubCategories(allSubcategories);
            } else {
                const filtered = allSubcategories.filter(
                    (sub) => sub.parent_category_id == value
                );
                setFilteredSubCategories(filtered);
            }
        }
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log("Form submitted");  
        const data = new FormData();
        
        
        data.append("title", formData.title);
        // data.append("category", formData.category);
        // data.append("subcategory", formData.subcategory);
        data.append("category", formData.category);       // ✅ name
        data.append("subcategory", formData.subcategory); // ✅ name

        data.append("description", formData.description);
        data.append("ActiveProject", formData.ActiveProject);
        data.append("SetCover", formData.SetCover);
        data.append("image", formData.image);
        
        // console.log("Form submitted");  
        try {
            
            const res = await axios.post(
            "https://architecture-portfolio-project-production.up.railway.app/api/projects/add",
            data
            );

            alert("Project Added Successfully");

        } catch (error) {

            console.error(error);

        }
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
            const res = await axios.get("https://architecture-portfolio-project-production.up.railway.app/api/projects/allCategory");
            setCategories(res.data); // assuming API returns array of categories
            } catch (error) {
            console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchSubCategories = async () => {
            try {
                const res = await axios.get("https://architecture-portfolio-project-production.up.railway.app/api/projects/allSubCategory");

                setAllSubCategories(res.data);
                setFilteredSubCategories(res.data); // default = all
            } catch (error) {
                console.error(error);
            }
        };

        fetchSubCategories();
    }, []);
  return (
    <>
        <div className="flex flex-1 overflow-y-auto">
            <main className="flex-1 overflow-y-auto py-2">
                <div className="mx-auto max-w-4xl">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                        Create Portfolio Project
                    </h1>
                    <p className="mt-2 text-slate-500 dark:text-slate-400">
                        Fill in the details below to showcase a new design masterpiece.
                    </p>
                    </div>
                </div>
                <form className="space-y-6" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
                    <h3 className="mb-6 text-lg font-bold">General Information</h3>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="md:col-span-2">
                        <label className="mb-2 block text-sm font-semibold">
                            Project Title
                        </label>
                        <input
                            className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3 focus:ring-2 focus:ring-primary dark:text-white"
                            placeholder="e.g. Minimalist Urban Loft"
                            type="text"
                            onChange={handleChange}
                            name="title"
                        />
                        </div>
                        <div>
                        <label className="mb-2 block text-sm font-semibold">
                            Category
                        </label>
                        <select
                        name="category"
                        onChange={(e) => {
                            const selectedId = e.target.value;
                            const selectedName = e.target.options[e.target.selectedIndex].text;

                            setFormData({
                            ...formData,
                            category: selectedName,        // ✅ store name
                            categoryId: selectedId         // ✅ keep id for filtering
                            });

                            // filter subcategories
                            const filtered = allSubcategories.filter(
                            (sub) => sub.parent_category_id == selectedId
                            );
                            setFilteredSubCategories(filtered);
                        }}
                        >
                        <option disabled value="">Select category</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                            {cat.category_name}
                            </option>
                        ))}
                        </select>
                        </div>
                        <div>
                        <label className="mb-2 block text-sm font-semibold">
                            Subcategory
                        </label>
                        <select
                        name="subcategory"
                        onChange={(e) => {
                            const selectedId = e.target.value;
                            const selectedName = e.target.options[e.target.selectedIndex].text;

                            setFormData({
                            ...formData,
                            subcategory: selectedName,   // ✅ store name
                            subcategoryId: selectedId    // optional
                            });
                        }}
                        >
                        <option disabled value="">Select subcategory</option>
                        {filteredSubcategories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                            {cat.subcategory_name}
                            </option>
                        ))}
                        </select>
                        </div>
                        <div className="md:col-span-2">
                        <label className="mb-2 block text-sm font-semibold">
                            Live Link (URL)
                        </label>
                        <div className="flex">
                            <span className="flex items-center rounded-l-lg border border-r-0 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-3 text-slate-500">
                            <span className="material-symbols-outlined text-sm">
                                link
                            </span>
                            </span>
                            <input
                            className="w-full rounded-r-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3 focus:ring-2 focus:ring-primary dark:text-white"
                            placeholder="https://vimeo.com/project-video"
                            type="url"
                            />
                        </div>
                        </div>
                        <div className="md:col-span-2">
                        <label className="mb-2 block text-sm font-semibold">
                            Description
                        </label>
                        <textarea
                            className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3 focus:ring-2 focus:ring-primary dark:text-white"
                            placeholder="Tell the story of this design..."
                            rows={4}
                            defaultValue={""}
                            name="description"
                            onChange={handleChange}
                        />
                        </div>
                    </div>
                    </div>
                    {/* Card: Visuals */}
                    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
                    <h3 className="mb-6 text-lg font-bold">Media Assets</h3>
                    <div className="flex flex-col gap-6 lg:flex-row">
                        <div className="flex-1">
                        <label className="mb-2 block text-sm font-semibold">
                            Project Cover Image
                        </label>
                        <div className="relative flex h-64 flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 transition-all hover:bg-slate-100 dark:hover:bg-slate-700/50">
                            <input
                            className="absolute inset-0 z-10 cursor-pointer opacity-0"
                            type="file"
                            name="image"
                            onChange={handleImageChange}
                            />
                            <div className="flex flex-col items-center gap-2">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <span className="material-symbols-outlined">upload</span>
                            </div>
                            <p className="text-sm font-medium">
                                Click to upload or drag &amp; drop
                            </p>
                            <p className="text-xs text-slate-400">
                                PNG, JPG, WEBP (Max 5MB)
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="w-full lg:w-72">
                        <label className="mb-2 block text-sm font-semibold">
                            Preview
                        </label>
                        <div
                            className="h-64 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-200 dark:bg-slate-800 bg-cover bg-center overflow-hidden"
                            data-alt="Placeholder for modern interior design project preview"
                            style={{
                            backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKF9olYmQb39yk0yBt2QR081NstxjdeGK9akC0FY-DqnuXP9V9ju0WyaPg3XlyaD23xC_eqplQWq_R4u2uQu4C0fMzA_D1DzDjo4lfwZGnBYdBP88qlPjPP8vmA16sG53wXIYoh6O3eUDbgjtIJFyLrzfySt2ns7F25lqiVWAjAgtvcK3ebJ-nEhplIlbcybo4yy2oTM3JC4LewRcybs4r0H8p4ZjjYJLoi5ny8QGylk8fi56KjnjstqVraaxMzPxjn9YDwK568e4")'
                            }}
                        >
                            <div className="flex h-full w-full items-center justify-center bg-black/10 backdrop-blur-[2px]">
                            <span className="text-xs font-bold text-white uppercase tracking-widest drop-shadow-md">
                                Image Preview
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* Card: Visibility Settings */}
                    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
                        <h3 className="mb-6 text-lg font-bold">Project Settings</h3>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="flex items-center justify-between rounded-lg border border-slate-100 dark:border-slate-800 p-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900/30">
                                <span className="material-symbols-outlined">visibility</span>
                                </div>
                                <div>
                                <p className="text-sm font-semibold">Active Project</p>
                                <p className="text-xs text-slate-500">
                                    Display on public portfolio
                                </p>
                                </div>
                            </div>
                            <label className="relative inline-flex cursor-pointer items-center">
                            <input
                                className="peer sr-only"
                                type="checkbox"
                                name="ActiveProject"
                                checked={formData.ActiveProject}
                                onChange={handleChange}
                            />
                                <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white dark:bg-slate-700" />
                            </label>
                            </div>
                            <div className="flex items-center justify-between rounded-lg border border-slate-100 dark:border-slate-800 p-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-900/30">
                                    <span className="material-symbols-outlined">star</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold">Set as Cover</p>
                                    <p className="text-xs text-slate-500">
                                        Main hero image on landing
                                    </p>
                                </div>
                            </div>
                            <label className="relative inline-flex cursor-pointer items-center">
                                <input className="peer sr-only" type="checkbox" name="SetCover" onChange={handleChange}/>
                                <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white dark:bg-slate-700" />
                            </label>
                            </div>
                        </div>
                    </div>

                    {/* Submit Footer */}
                    <div className="flex items-center justify-end gap-4 pb-10">
                        <button
                            className="text-sm font-semibold text-slate-500 hover:text-slate-700"
                            type="button"
                        >
                            Discard changes
                        </button>
                        <button
                            className="rounded-lg bg-primary px-8 py-3 font-bold text-white shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform"
                            type="submit"
                            onClick={() => console.log("button clicked")}
                        >
                            Create Portfolio Item
                        </button>
                    </div>
                </form>
                </div>
            </main>
        </div>
    </>
  )
}

export default ProjectAdd
