const projects = [

  {
    title: "GadgetBay Store",
    description: "Built a responsive React.js gadget store with dynamic listings, search, and cart, with SignIn / SingnOut feature, optimized state management, and a clean UI.",
    link: "https://github.com/pal-vikas/GadgetBay-store",
    visitLink :"https://gadget-bay-store.vercel.app/",
    image:"https://private-user-images.githubusercontent.com/144556742/472365367-ae5e98d5-0df4-476e-b7d3-07cbd79e6b8d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTM4Nzc3NjksIm5iZiI6MTc1Mzg3NzQ2OSwicGF0aCI6Ii8xNDQ1NTY3NDIvNDcyMzY1MzY3LWFlNWU5OGQ1LTBkZjQtNDc2ZS1iN2QzLTA3Y2JkNzllNmI4ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDczMFQxMjExMDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xNzVmMThmM2IxMmQxZGE1M2M1NzM4N2NhNjA1NDlhZDljN2ZhYThlNmJiMjg2N2I4OWJjYWQ4NGZmOTA4ZWJhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.8uizpegjgCjWpheHu-YciRZy4OEWg_t1zSItsMHhvcg",
  },
  {
    title: "Instagram Profile App",
    description: "This project is a Single Page Application (SPA) clone of Instagram, application built using React or another modern frontend JavaScript framework.",
    link: "https://github.com/pal-vikas/Instagram-Clone-SPA",
        image: "https://private-user-images.githubusercontent.com/144556742/472366410-b90d296b-9ee2-47f5-8373-b88c5f54c135.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTM4Nzc1NTUsIm5iZiI6MTc1Mzg3NzI1NSwicGF0aCI6Ii8xNDQ1NTY3NDIvNDcyMzY2NDEwLWI5MGQyOTZiLTllZTItNDdmNS04MzczLWI4OGM1ZjU0YzEzNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDczMFQxMjA3MzVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yY2VhOGQ4M2RhMTQ0YjgwNTA1MTQxYmJmMzkzMzY2Zjg3YTZhMDU5MDBkNTNlOTRlYmFlNjVhNGUwZjZkODZjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.FZVfIhBj0DbJefLb_z6RR-2rwMLXr8WyFvRiT-QIx5Q",
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
