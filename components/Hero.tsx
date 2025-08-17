import Image from "next/image";
import Link from "next/link";
import Slideshow from "./Slideshow";

export default function Hero(){
  return (
    <section className="relative pt-24 sm:pt-28">
      <div className="container grid lg:grid-cols-2 gap-10 items-center">
        <div className="animate-fadeIn">
          <span className="badge">Personalised Nutrition</span>
          <h1 className="h1 mt-3">Eat Smarter. Live Fitter.</h1>
          <p className="muted mt-4 text-lg">Evidence-based diet plans for weight loss, PCOS, diabetes, thyroid, pregnancy, sports nutrition and more.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">Book Consultation</a>
            <a href="#programs" className="btn-outline">Explore Programs</a>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="card p-4 text-center">
              <div className="text-2xl font-extrabold">1K+</div>
              <div className="text-xs muted">Clients Served</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-2xl font-extrabold">9+</div>
              <div className="text-xs muted">Years Experience</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-2xl font-extrabold">4.9★</div>
              <div className="text-xs muted">Avg. Rating</div>
            </div>
          </div>
        </div>
            <Slideshow />
      </div>
    </section>
  )
}
