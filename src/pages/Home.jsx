import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[70vh] flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I’m Vikas Pal</h1>
      <p className="text-lg md:text-2xl mb-6 text-gray-600">
        Frontend Developer | Building sleek web experiences
      </p>
      <Link
        to={'/projects'}
        className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
      >
        View My Work
      </Link>
    </section>
  );
}
