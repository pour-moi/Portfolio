import Header from "@/Layouts/Header";
import Hero from "@/Components/Hero";
import Contact from "@/Components/Contact";

export default function HomePage({ portfolios }) {
    const services = [
        {
            service: "Backend Development",
            image: "/animoji/backend-coding (1).png",
            description:
                "Expert backend solutions to build robust, scalable, and secure server-side applications. We ensure seamless database integrationx tailored to your needs.",
        },
        {
            service: "Frontend Development",
            image: "/animoji/front-end-programming (1).png",
            description:
                "Stunning and interactive user interfaces using modern frameworks. We create responsive, accessible, and visually appealing designs for exceptional user experiences.",
        },
        {
            service: "UI/UX Design",
            image: "/animoji/web-design.png",
            description:
                "Crafting intuitive and engaging designs focused on user needs. From wireframes to prototypes, we bring your vision to life with thoughtful, user-centered design.",
        },
        {
            service: "Full Stack Development",
            image: "/animoji/computer.png",
            description:
                "End-to-end development expertise across frontend and backend. We deliver seamless, high-performing, and fully integrated web or mobile applications.",
        },
        {
            service: "Mobile App Development",
            image: "/animoji/ui-design.png",
            description:
                "Custom mobile app solutions for Android and iOS. We create user-friendly, efficient, and scalable apps tailored to your business or personal needs.",
        },
        {
            service: "API Development",
            image: "/animoji/integration.png",
            description:
                "Custom API development and integration to connect your systems and services seamlessly. We build robust APIs for smooth communication between applications.",
        },
    ];

    return (
        <>
            <Header />
            <Hero />
            <div className="body_container bg-slate-900 text-white">
                <div className="my_service_container">
                    <h3 className="text-center py-4 font-bold text-2xl">
                        My Services
                    </h3>
                    <p className="text-center pb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br />
                        Labore ipsa id sunt modi incidunt a saepe. Expedita sed
                        eaque deleniti?
                    </p>
                    <div className="services flex flex-wrap gap-20 justify-center">
                        {services.map((service) => {
                            return (
                                <div class="flex flex-col bg-slate-900 shadow-2xl mt-4  rounded-lg  w-72 h-80">
                                    <div class=" overflow-hidden rounded-md h-36 flex justify-center items-center">
                                        <img
                                            class="w-20 h-20 object-cover"
                                            src={service.image}
                                            alt="profile-picture"
                                        />
                                    </div>
                                    <div class="p-6 text-center">
                                        <h4 class="mb-1 text-xl font-semibold text-slate-100">
                                            {service.service}
                                        </h4>

                                        <p class="text-base text-slate-100 mt-4 font-light ">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="about_me_container">
                    <h3 className="text-center py-4 font-bold text-2xl">
                        About Me
                    </h3>
                    <p className="text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br />
                        Labore ipsa id sunt modi incidunt a saepe. Expedita sed
                        eaque deleniti?
                    </p>
                    <div className="about_me_image_and_info flex justify-center items-center">
                        <div className="w-1/4">
                            <img src="/animoji/IMG_0136.PNG" alt="" />
                        </div>
                        <div className="about_me_information w-1/3">
                            <h3 className="font-bold text-2xl pb-4">
                                Hi There
                            </h3>

                            <p className="w-full">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Quo, assumenda perferendis.
                                Inventore, dolore. Ipsum tenetur sed doloribus
                                ut. Repellendus vero et labore exercitationem?
                                Eos ipsa tempora adipisci esse possimus
                                voluptates maiores a. Aut temporibus aliquam
                                assumenda aspernatur quia. Odio hic debitis
                                nihil distinctio aperiam deserunt, tenetur illo
                                ea fuga corporis?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="skills_container">
                    <h3 className="text-center py-4 font-bold text-2xl">
                        Projects
                    </h3>
                    <div className="projects flex justify-center gap-2">
                        {portfolios.map((portfolio) => {
                            return (
                                <>
                                    {" "}
                                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#">
                                            <img
                                                class="rounded-t-lg w-96 h-fit"
                                                src={portfolio.image}
                                                alt=""
                                            />
                                        </a>
                                        <div class="p-5">
                                            <a href="#">
                                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                    {portfolio.title}
                                                </h5>
                                            </a>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                {portfolio.description}
                                            </p>
                                            <a
                                                href="#"
                                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                View code
                                                <svg
                                                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 14 10"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
                <Contact />
            </div>
        </>
    );
}
