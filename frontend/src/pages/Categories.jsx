import React, { useEffect, useState } from "react";
import axios from "axios";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");


    useEffect(() => {
        const fetchCategories = async () => {
            try {
            const res = await axios.get("http://localhost:5000/api/projects/allCategory");
            setCategories(res.data); // assuming API returns array of categories
            } catch (error) {
            console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    const [formCategory, setformCategory] = useState({
        category: "",
        categoryIcon: "star"
    });

    const handleCategoryChange = (e) => {
        const { name, value } = e.target;

        setformCategory({
            ...formCategory,
            [name]: value
        });
    };

    const handleCategorySubmit = async (e) => {
        e.preventDefault();

        if (!formCategory.category || !formCategory.categoryIcon) {
            alert("Please enter category and select an icon");
            return;
        }

        try {
            const res = await axios.post(
            "http://localhost:5000/api/projects/addCategory",
            formCategory,
            { headers: { "Content-Type": "application/json" } } 
            );

            alert(res.data.message);
            setformCategory({ category: "", categoryIcon: "" }); 
        } catch (error) {
            console.error(error);
            alert("Error adding category");
        }
    };

    // Set Sub Category

    const [formSubCategory, setformSubCategory] = useState({
        subcategory: "",
        categoryid: "star"
    });

    const handleSubCategoryChange = (e) => {
        const { name, value } = e.target;

        setformSubCategory({
            ...formSubCategory,
            [name]: value
        });
    };

    const handleSubCategorySubmit = async (e) => {
        e.preventDefault();

        if (!selectedCategory || !formSubCategory.subcategory) {
            alert("Please select a parent category and enter subcategory");
            return;
        }

        try {
            const payload = {
                ...formSubCategory,
                categoryid: selectedCategory  // ensure parent category is sent
            };

            const res = await axios.post(
                "http://localhost:5000/api/projects/addSubCategory", // ❌ make sure you have a separate API endpoint for subcategory
                payload,
                { headers: { "Content-Type": "application/json" } }
            );

            alert(res.data.message);

            setformSubCategory({ subcategory: "", categoryid: "" });
            setSelectedCategory(""); // reset select
        } catch (error) {
            console.error(error);
            alert("Error adding subcategory");
        }
    };
  return (
    <>
        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-y-auto">
            
            {/* Page Content */}
            <div className="p-8 max-w-5xl">
                <div className="mb-10">
                    <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100 mb-2">
                    Categories &amp; Subcategories
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-base">
                    Structure your organization's projects by defining top-level
                    categories and detailed subcategories to improve searchability and
                    reporting.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Add Category Form */}
                    <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">
                                create_new_folder
                            </span>
                            </div>
                            <div>
                            <h3 className="font-bold text-lg">Add New Category</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                Create a new main classification
                            </p>
                            </div>
                        </div>
                        <form className="space-y-4" onSubmit={handleCategorySubmit}>
                            <div>
                            <label className="block text-sm font-semibold mb-1.5 ml-1">
                                Category Name
                            </label>
                            <input
                                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400"
                                placeholder="e.g. Creative Services, IT Infrastructure"
                                type="text"
                                name="category"
                                value={formCategory.category}
                                onChange={handleCategoryChange}
                            />
                            </div>
                            <div>
                            <label className="block text-sm font-semibold mb-1.5 ml-1">
                                Category Icon
                            </label>
                            <div className="grid grid-cols-4 gap-2">
                                <button
                                    className="p-3 border border-primary bg-primary/5 rounded-xl flex items-center justify-center text-primary"
                                    type="button"
                                    onClick={() => setformCategory({ ...formCategory, categoryIcon: "star" })}
                                >
                                    <span className="material-symbols-outlined">star</span>
                                </button>
                                <button
                                    className="p-3 border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center hover:bg-slate-50"
                                    type="button"
                                    onClick={() => setformCategory({ ...formCategory, categoryIcon: "code" })}
                                >
                                    <span className="material-symbols-outlined">code</span>
                                </button>
                                <button
                                    className="p-3 border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center hover:bg-slate-50"
                                    type="button"
                                    onClick={() => setformCategory({ ...formCategory, categoryIcon: "palette" })}
                                >
                                    <span className="material-symbols-outlined">palette</span>
                                </button>
                                <button
                                    className="p-3 border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center hover:bg-slate-50"
                                    type="button"
                                    onClick={() => setformCategory({ ...formCategory, categoryIcon: "campaign" })}
                                >
                                    <span className="material-symbols-outlined">campaign</span>
                                </button>
                            </div>
                            </div>
                            <div className="pt-2">
                            <button
                                className="w-full py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
                                type="submit"
                            >
                                <span className="material-symbols-outlined text-xl">add</span>
                                Create Category
                            </button>
                            </div>
                        </form>
                    </section>
                    {/* Add Subcategory Form */}
                    <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">account_tree</span>
                            </div>
                            <div>
                            <h3 className="font-bold text-lg">Add Subcategory</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                Link a specific type to a category
                            </p>
                            </div>
                        </div>
                        <form className="space-y-4" onSubmit={handleSubCategorySubmit}>
                            <div>
                                <label className="block text-sm font-semibold mb-1.5 ml-1">
                                    Parent Category
                                </label>
                                <div className="relative">
                                <select
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    name="categoryid"
                                >
                                    <option disabled value="">Select a parent category</option>
                                    {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.category_name}
                                    </option>
                                    ))}
                                </select>
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                    expand_more
                                </span>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1.5 ml-1">
                                    Subcategory Name
                                </label>
                                <input
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400"
                                    placeholder="e.g. Frontend Architecture, SEO"
                                    type="text"
                                    name="subcategory"
                                    onChange={handleSubCategoryChange}
                                />
                            </div>
                            <div className="pt-2">
                                <button
                                    className="w-full py-3 bg-primary/10 hover:bg-primary hover:text-white text-primary font-bold rounded-xl transition-all flex items-center justify-center gap-2 border border-primary/20"
                                    type="submit"
                                >
                                    <span className="material-symbols-outlined text-xl">
                                    add_circle
                                    </span>
                                    Link Subcategory
                                </button>
                            </div>
                        </form>
                    </section>
                </div>

                {/* Existing Categories Table/List Preview */}
                <div className="mt-12 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                        <h3 className="font-bold">Recently Created</h3>
                        <a
                            className="text-sm font-semibold text-primary hover:underline"
                            href="#"
                        >
                            View All Structure
                        </a>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 uppercase text-[10px] font-bold tracking-widest">
                            <tr>
                                <th className="px-6 py-4">Structure</th>
                                <th className="px-6 py-4">Type</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                    <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-sm">
                                            code
                                        </span>
                                        </div>
                                        <span className="font-semibold">Software Development</span>
                                    </div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-500">Parent Category</td>
                                    <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                        Active
                                    </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                    <button className="text-slate-400 hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">edit</span>
                                    </button>
                                    <button className="text-slate-400 hover:text-red-500 transition-colors ml-3">
                                        <span className="material-symbols-outlined">delete</span>
                                    </button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                    <td className="px-6 py-4">
                                    <div className="flex items-center gap-3 pl-6">
                                        <span className="material-symbols-outlined text-slate-300">
                                        subdirectory_arrow_right
                                        </span>
                                        <span className="text-slate-600 dark:text-slate-400">
                                        Cloud Infrastructure
                                        </span>
                                    </div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-500 italic">Subcategory</td>
                                    <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                        Active
                                    </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                    <button className="text-slate-400 hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">edit</span>
                                    </button>
                                    <button className="text-slate-400 hover:text-red-500 transition-colors ml-3">
                                        <span className="material-symbols-outlined">delete</span>
                                    </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Categories
