export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-72px)] bg-dark-background text-off-white text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        <span className="text-primary">ELEVATE</span> YOUR FITNESS
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80 mb-8">
        Join our state-of-the-art gym and transform your life with expert trainers, premium equipment, and a supportive community.
      </p>
      <button className="bg-primary text-dark-background font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors">
        Join Now
      </button>
    </div>
  );
}
