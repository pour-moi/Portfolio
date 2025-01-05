import { useForm } from "@inertiajs/react";

export default function AdminPage() {
    const { data, setData, post} = useForm({
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
            <h1>Create Portfolio</h1>
            <form onSubmit={submit}>
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

                <button type="submit">Submit</button>
            </form>
        </>
    );
}
