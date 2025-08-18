import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Transformations from "@/components/Transformations";
import Testimonials from "@/components/Testimonials";
import BMICalc from "@/components/BMICalc";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Image from "next/image";

export default function Home(){
  return (
    <main>
      <Navbar />
      <Hero />
      <Programs />
      <Transformations />
      <Testimonials />
      <section className="section">
        <div className="container grid lg:grid-cols-2 gap-6 items-start">
          <div className="card p-6">
            <div className="badge">About</div>
            <h2 className="h2 mt-2">Trusted Nutrition Coaching</h2>
            <p className="muted mt-2">Custom diet plans made around your routine, preferences and medical needs. Weekly follow-ups keep you accountable while enjoying real, everyday food.</p>
            <ul className="mt-4 list-disc pl-6 text-sm text-slate-700">
              <li>Consultation + personalised plan</li>
              <li>Weekly reviews & habit tracking</li>
              <li>WhatsApp support during working hours</li>
            </ul>
          </div>
          <BMICalc />
        </div>
      </section>
      <FAQ />
      <Contact />
      <footer className="border-t">
        <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Image
              src="/new Logo Khushbu.jpeg"
              alt="Dietician Khushbu Sharma Logo"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <span className="text-sm">© 2025 Dietician Khushbu Sharma</span>
          </div>
          <nav className="flex gap-4 text-sm muted">
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/dieticiankhushbusharma?igsh=bDZvcHU4YTR1NjJk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-600"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/dtkhushboosharma/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-600"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5.019 3.676 9.163 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.324 21.163 22 17.019 22 12"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
      <WhatsAppFloat />
    </main>
  )
}
