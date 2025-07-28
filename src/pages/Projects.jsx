const projects = [

  {
    title: "GadgetBay Store",
    description: "Built a responsive React.js gadget store with dynamic listings, search, and cart, with SignIn / SingnOut feature, optimized state management, and a clean UI.",
    link: "https://github.com/pal-vikas/GadgetBay-store",
    visitLink :"https://gadget-bay-store.vercel.app/",
    image: "https://github-production-user-asset-6210df.s3.amazonaws.com/144556742/471404321-24fa79bf-4ef4-4c65-8a67-3e151631a64f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250728%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250728T083503Z&X-Amz-Expires=300&X-Amz-Signature=9421446ce390f9a5d9e6087febc7e87ecd7674b804b2acdb492f84d37f4d8c79&X-Amz-SignedHeaders=host",
  },
  {
    title: "Instagram Profile App",
    description: "This project is a Single Page Application (SPA) clone of Instagram, application built using React or another modern frontend JavaScript framework.",
    link: "https://github.com/pal-vikas/Instagram-Clone-SPA",
    visitLink :"https://gadget-bay-store.vercel.app/",
    image: "https://private-user-images.githubusercontent.com/144556742/465325125-e760fb11-2750-4031-9aab-a3206cab943a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTM2OTE2MDYsIm5iZiI6MTc1MzY5MTMwNiwicGF0aCI6Ii8xNDQ1NTY3NDIvNDY1MzI1MTI1LWU3NjBmYjExLTI3NTAtNDAzMS05YWFiLWEzMjA2Y2FiOTQzYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzI4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcyOFQwODI4MjZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04Nzg1MWVhODdlYmIyZDdhYTk5NjVmMWU3NDhlYzY5ZmUzZTgxMmRmN2ZjODNjMjUyMjk3M2VkNDM4MjE1ZTQ0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.kt8ITOOXetea_XcfyyNtflHfxyq920bQfKafKI9IQtU",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen p-8 bg-white">
      <h2 className="text-4xl font-semibold text-center mb-8">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-xl shadow hover:shadow-xl transition">
            <img src={project.image} alt={project.title} className="rounded-t-xl w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-between ">
                      <a href={project.link} target="_blank"  className="text-blue-600 hover:underline ">View GitHub</a>
                      <a href={project.visitLink} target="_blank" className="text-blue-600 hover:underline">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
