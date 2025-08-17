"use client"
import { useState } from "react";

export default function Contact(){
  const [status, setStatus] = useState<null | "ok" | "err">(null);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(Object.fromEntries(data.entries()));
    setStatus("ok");
    e.currentTarget.reset();
  };
  return (
    <section id="contact" className="section bg-slate-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <p className="badge">Contact</p>
          <h2 className="h2 mt-2">Book a Consultation</h2>
          <p className="muted mt-2">Fill the form and we’ll reach out within 4 hours.</p>
        </div>
        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="card p-6">
            <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4">
              <div><label className="block text-sm">Name</label><input name="name" required className="mt-1 w-full rounded-xl border px-3 py-2"/></div>
              <div><label className="block text-sm">Phone</label><input name="phone" className="mt-1 w-full rounded-xl border px-3 py-2"/></div>
              <div className="sm:col-span-2"><label className="block text-sm">Email</label><input type="email" name="email" required className="mt-1 w-full rounded-xl border px-3 py-2"/></div>
              <div className="sm:col-span-2"><label className="block text-sm">Goal</label><select name="goal" className="mt-1 w-full rounded-xl border px-3 py-2">
                <option>Weight Loss</option><option>PCOS</option><option>Diabetes</option><option>Thyroid</option><option>Sports</option><option>General Wellness</option>
              </select></div>
              <div className="sm:col-span-2"><label className="block text-sm">Message</label><textarea name="message" rows={4} className="mt-1 w-full rounded-xl border px-3 py-2"/></div>
              <div className="sm:col-span-2 flex items-center justify-between">
                <span className="text-sm muted">{status==="ok" ? "Thanks! We'll contact you soon." : "We usually reply within 4 hours."}</span>
                <button className="btn-primary" type="submit">Send</button>
              </div>
            </form>
          </div>
          <div className="mt-6 rounded-xl overflow-hidden shadow-soft">
            <iframe
              src="https://www.google.com/maps?q=Dt.+Khushbu+Sharma&hl=en&z=14&output=embed"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
