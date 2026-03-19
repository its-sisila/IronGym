import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-dark text-off-white pt-24 pb-10 px-6 border-t border-off-white/10 z-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand & About */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <img 
                src="/images/bodybuilding-emblem-and-gym-logo-design-template-free-vector.jpg" 
                alt="Iron Gym Logo" 
                className="h-24 w-auto object-contain rounded-lg"
              />
            </Link>
            <p className="text-off-white/60 leading-relaxed text-base">
              Premium fitness training facility offering world-class equipment, personalized coaching, and a supportive community to help you crush your fitness goals.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-off-white/20 flex items-center justify-center hover:bg-primary hover:text-dark-background hover:border-primary transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-off-white/20 flex items-center justify-center hover:bg-primary hover:text-dark-background hover:border-primary transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-off-white/20 flex items-center justify-center hover:bg-primary hover:text-dark-background hover:border-primary transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-off-white/20 flex items-center justify-center hover:bg-primary hover:text-dark-background hover:border-primary transition-all duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-xl font-bold uppercase tracking-wider mb-6 text-off-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-off-white/60 hover:text-primary transition-colors text-sm uppercase tracking-wider">Home</Link></li>
              <li><Link href="/#service" className="text-off-white/60 hover:text-primary transition-colors text-sm uppercase tracking-wider">Services</Link></li>
              <li><Link href="/#trainers" className="text-off-white/60 hover:text-primary transition-colors text-sm uppercase tracking-wider">Trainers</Link></li>
              <li><Link href="/#testimonial" className="text-off-white/60 hover:text-primary transition-colors text-sm uppercase tracking-wider">Testimonials</Link></li>
              <li><Link href="/#contact" className="text-off-white/60 hover:text-primary transition-colors text-sm uppercase tracking-wider">Contact Us</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xl font-bold uppercase tracking-wider mb-6 text-off-white">Programs</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-off-white/60 hover:text-primary transition-colors text-sm uppercase tracking-wider">Bodybuilding</Link></li>
              <li><Link href="#" className="text-off-white/60 hover:text-primary transition-colors text-sm uppercase tracking-wider">Weight Loss</Link></li>
              <li><Link href="#" className="text-off-white/60 hover:text-primary transition-colors text-sm uppercase tracking-wider">Crossfit</Link></li>
              <li><Link href="#" className="text-off-white/60 hover:text-primary transition-colors text-sm uppercase tracking-wider">Yoga Classes</Link></li>
              <li><Link href="#" className="text-off-white/60 hover:text-primary transition-colors text-sm uppercase tracking-wider">Personal Training</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold uppercase tracking-wider mb-6 text-off-white">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-primary shrink-0 mt-1" size={20} />
                <span className="text-off-white/60 text-sm leading-relaxed tracking-wide">123 Fitness Street, Gym District,<br />Sri Lanka</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-primary shrink-0" size={20} />
                <span className="text-off-white/60 text-sm tracking-wide hover:text-primary transition-colors cursor-pointer">+94 11123 4567</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-primary shrink-0" size={20} />
                <span className="text-off-white/60 text-sm tracking-wide hover:text-primary transition-colors cursor-pointer">hello@irongym.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-off-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-off-white/40 text-sm tracking-wider text-center md:text-left">
            &copy; {currentYear} <span className="text-primary font-bold">IRON GYM</span>. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm text-off-white/40 tracking-wider">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
