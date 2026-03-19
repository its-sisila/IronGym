import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-secondary-dark text-off-white py-4 px-6 fixed top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          FITNESS
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/service" className="hover:text-primary transition-colors">Service</Link>
          <Link href="/trainers" className="hover:text-primary transition-colors">Trainers</Link>
          <Link href="/testimonial" className="hover:text-primary transition-colors">Testimonial</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
        </nav>
        <button className="md:hidden text-primary">Menu</button>
      </div>
    </header>
  );
}
