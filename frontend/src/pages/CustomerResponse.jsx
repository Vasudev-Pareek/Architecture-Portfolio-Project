import React, { useEffect, useState } from "react";
import axios from "axios";

const CustomerResponse = () => {
    const [responses, setResponses] = useState([]);
    const [stats, setStats] = useState({});

    useEffect(() => {
        const fetchResponses = async () => {
            try {
            const res = await axios.get("http://localhost:5000/api/projects/getcustomerResponses");
            setResponses(res.data.data);
            setStats(res.data.stats);
            } catch (error) {
            console.error("Error fetching categories:", error);
            }
        };

        fetchResponses();
    }, []);

    const exportToCSV = () => {
        const headers = [
            "Full Name",
            "Email Address",
            "Subject/Project Type",
            "Submitted Date",
            "Deadline",
            "Mobile Number"
        ];

        const rows = responses.map(res => [
            res.full_name,
            res.email_address,
            res.subject_project_type,
            res.submitted_date,
            res.deadline,
            res.mobile_number
        ]);

        const csvContent =
            [headers, ...rows]
                .map(row => row.join(","))
                .join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);

        link.setAttribute("href", url);
        link.setAttribute("download", "customer_responses.csv");
        link.click();
    };
  return (
    <>
        {/* Main Content */}
        <main className="flex-1 flex flex-col min-w-0">

            {/* Dashboard Content */}
            <div className="p-8 space-y-8">
            {/* Title and Stats */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                    Customer Responses
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                    Real-time overview of all incoming project inquiries.
                </p>
                </div>
                <div className="flex gap-2">
                <button onClick={exportToCSV} className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
                    <span className="material-symbols-outlined text-lg">download</span>
                    Export CSV
                </button>
                </div>
            </div>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                    <span className="material-symbols-outlined text-primary">
                        analytics
                    </span>
                    </div>
                    <span className="text-green-500 text-xs font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">
                        trending_up
                    </span>
                    +12%
                    </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    Total Responses
                </p>
                <h3 className="text-2xl font-bold mt-1">{stats.total}</h3>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                    <span className="material-symbols-outlined text-primary">
                        schedule
                    </span>
                    </div>
                    <span className="text-green-500 text-xs font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">
                        trending_up
                    </span>
                    +5%
                    </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    Pending Deadlines
                </p>
                <h3 className="text-2xl font-bold mt-1">{stats.future_deadlines}</h3>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                    <span className="material-symbols-outlined text-primary">
                        new_releases
                    </span>
                    </div>
                    <span className="text-primary text-xs font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">
                        trending_down
                    </span>
                    -2%
                    </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    New Today
                </p>
                <h3 className="text-2xl font-bold mt-1">{stats.new_today}</h3>
                </div>
            </div>
            {/* Table Container */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/50">
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Full Name
                        </th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Email Address
                        </th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Subject/Project Type
                        </th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Submitted Date
                        </th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Deadline
                        </th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Mobile Number
                        </th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {/* Row 1 */}

                        {responses.map((res) => (
                            <tr key={res.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                                <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs font-bold">
                                     {res.short_name}
                                    </div>
                                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                                    {res.full_name}
                                    </span>
                                </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                                {res.email_address}
                                </td>
                                <td className="px-6 py-4">
                                <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-primary/10 text-primary">
                                    {res.subject_project_type}
                                </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                                    {res.submitted_date}
                                </td>
                                <td className="px-6 py-4">
                                <div className="flex items-center gap-2 text-sm text-slate-900 dark:text-slate-100">
                                    <span className="material-symbols-outlined text-sm text-primary">
                                    calendar_today
                                    </span>
                                    {res.deadline}
                                </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                                    {res.mobile_number}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                    Showing {responses.length} results
                </p>
                <div className="flex gap-2">
                    <button
                    className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50"
                    disabled=""
                    >
                    <span className="material-symbols-outlined text-sm leading-none">
                        chevron_left
                    </span>
                    </button>
                    <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800">
                    <span className="material-symbols-outlined text-sm leading-none">
                        chevron_right
                    </span>
                    </button>
                </div>
                </div>
            </div>
            </div>
        </main>
    </>
  )
}

export default CustomerResponse
