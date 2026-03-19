export default function Footer() {
  return (
    <footer className="w-full bg-secondary-dark text-off-white py-8 text-center mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm opacity-70">
          &copy; {new Date().getFullYear()} Fitness Brand. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
