"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#transformations", label: "Transformations" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar(){
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition ${scrolled ? "bg-white/90 backdrop-blur border-b" : ""}`}>
  <div className="container max-w-screen-2xl flex items-center py-3">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/new logo khushbu.jpeg"
            alt="Dt. Khushbu Sharma Logo"
            width={150}
            height={150}
            className="rounded-lg"
          />
          <div className="flex flex-col">
            <span className="font-bold">Dietician Khushbu Sharma</span>
            <span className="text-sm font-medium">📞 +91-9718003685</span>
            <span className="text-sm font-medium">✉️ dtkhushbusharma@gmail.com</span>
          </div>
        </Link>
  {/* Removed duplicate phone/email section for cleaner layout */}
  <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="font-bold text-lg nav-link"
              style={{ fontWeight: "bold", fontSize: "1.15rem" }}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary">Book Consultation</a>
        </nav>
        <button className="md:hidden btn-outline" onClick={()=>setOpen(o=>!o)} aria-label="Toggle Menu">Menu</button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-3 flex flex-col gap-3">
            {links.map(l => <a key={l.href} href={l.href} className="nav-link">{l.label}</a>)}
            <a href="#contact" className="btn-primary w-full text-center">Book Consultation</a>
          </div>
        </div>
      )}
    </header>
  )
}
