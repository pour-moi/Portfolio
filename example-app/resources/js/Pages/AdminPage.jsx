import { useForm } from "@inertiajs/react";

export default function AdminPage({ portfolio }) {
    const { data, setData, post } = useForm({
        title: "",
        description: "",
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();
        post("/admin/portfolio/store");
    };

    return (
        <>
            <div class="bg-white p-8 overflow-auto mt-16 h-full">
                <h2 class="text-2xl mb-4">Classes List</h2>

                <div class="relative overflow-auto">
                    <div class="overflow-x-auto rounded-lg">
                        <table class="min-w-full bg-white border mb-20">
                            <thead>
                                <tr class="bg-[#2B4DC994] text-center text-xs md:text-sm font-thin text-white">
                                    <th class="p-0">
                                        <span class="block py-2 px-3 border-r border-gray-300">
                                            No
                                        </span>
                                    </th>
                                    <th class="p-0">
                                        <span class="block py-2 px-3 border-r border-gray-300">
                                            Project Title
                                        </span>
                                    </th>
                                    <th class="p-0">
                                        <span class="block py-2 px-3 border-r border-gray-300">
                                            Description
                                        </span>
                                    </th>
                                    <th class="p-4 text-xs md:text-sm">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {portfolio.map((portfolio) => {
                                    return (
                                        <tr class="border-b text-xs md:text-sm text-center text-gray-800">
                                            <td class="p-2 md:p-4">
                                                {portfolio.id}
                                            </td>
                                            <td class="p-2 md:p-4">
                                                {portfolio.title}
                                            </td>
                                            <td class="p-2 md:p-4">
                                                {portfolio.description.substring(
                                                    0,
                                                    100
                                                ) + "..."}
                                            </td>
                                            <td class="relative p-2 md:p-4 flex justify-center space-x-2">
                                                <button class="bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-sm">
                                                    Edit
                                                </button>
                                                <button class="bg-red-500 text-white px-3 py-1 rounded-md text-xs md:text-sm">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <h1 className="text-center">Create Portfolio</h1>
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
                    class="bg-blue-500 text-white px-3 py-1 rounded-md mt-4"
                >
                    Submit
                </button>
            </form>
        </>
    );
}
