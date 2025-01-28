import { useForm } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { useState } from "react"; // Import useState for managing edit state

export default function AdminPage({ portfolio }) {
    const { data, setData, post, put } = useForm({
        title: "",
        description: "",
        image: null,
    });

    const [editingPortfolio, setEditingPortfolio] = useState(null);

    const submit = (e) => {
        e.preventDefault();
        if (editingPortfolio) {
            put(`/portfolio/${editingPortfolio.id}`);
        } else {
            post("/admin/portfolio/store");
        }
    };

    const handleDelete = (id) => {
        router.delete(`/portfolio/${id}`);
    };

    const handleEdit = (portfolio) => {
        setData({
            title: portfolio.title,
            description: portfolio.description,
            image: null,
        });
        setEditingPortfolio(portfolio);
    };

    return (
        <>
            <div className="bg-white p-8 overflow-auto mt-16 h-full">
                <h2 className="text-2xl mb-4">Projects</h2>

                <div className="relative overflow-auto">
                    <div className="overflow-x-auto rounded-lg">
                        <table className="min-w-full bg-white border mb-20">
                            <thead>
                                <tr className="bg-[#2B4DC994] text-center text-xs md:text-sm font-thin text-white">
                                    <th className="p-0">
                                        <span className="block py-2 px-3 border-r border-gray-300">
                                            No
                                        </span>
                                    </th>
                                    <th className="p-0">
                                        <span className="block py-2 px-3 border-r border-gray-300">
                                            Project Title
                                        </span>
                                    </th>
                                    <th className="p-0">
                                        <span className="block py-2 px-3 border-r border-gray-300">
                                            Description
                                        </span>
                                    </th>
                                    <th className="p-4 text-xs md:text-sm">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {portfolio.map((portfolio) => (
                                    <tr
                                        key={portfolio.id}
                                        className="border-b text-xs md:text-sm text-center text-gray-800"
                                    >
                                        <td className="p-2 md:p-4">
                                            {portfolio.id}
                                        </td>
                                        <td className="p-2 md:p-4">
                                            {portfolio.title}
                                        </td>
                                        <td className="p-2 md:p-4">
                                            {portfolio.description.substring(
                                                0,
                                                100
                                            ) + "..."}
                                        </td>
                                        <td className="relative p-2 md:p-4 flex justify-center space-x-2">
                                            <button
                                                className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-sm"
                                                onClick={() =>
                                                    handleEdit(portfolio)
                                                }
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="bg-red-500 text-white px-3 py-1 rounded-md text-xs md:text-sm"
                                                onClick={() =>
                                                    handleDelete(portfolio.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <h1 className="text-center">
                {editingPortfolio ? "Edit Portfolio" : "Create Portfolio"}
            </h1>
            <form
                onSubmit={submit}
                className="flex justify-center m-auto flex-col align-center w-80 mb-16"
            >
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                    required
                />

                <label htmlFor="description">Description:</label>
                <textarea
                    name="description"
                    id="description"
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                    required
                ></textarea>

                <label htmlFor="image">Image:</label>
                <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={(e) => setData("image", e.target.files[0])}
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-3 py-1 rounded-md mt-4"
                >
                    {editingPortfolio ? "Update" : "Submit"}
                </button>
            </form>
        </>
    );
}
