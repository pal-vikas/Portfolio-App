export default function Contact() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center p-6 bg-gray-50">
      <h2 className="text-4xl font-semibold mb-4">Get in Touch</h2>
      <p className="text-lg mb-6 text-center text-gray-600 max-w-lg">
        Feel free to reach out for collaborations or just a friendly hello 👋
      </p>
      <a
        href="mailto:vikas@example.com"
        className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
      >
        Say Hello
      </a>
    </section>
  );
}
