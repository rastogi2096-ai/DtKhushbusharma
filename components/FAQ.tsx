"use client"
import { useState } from "react";

const faqs = [
  { q: "How are plans created?", a: "We assess your goals, medical history, routine and preferences. Plans include weekly reviews and adjustments." },
  { q: "Do you provide vegetarian/vegan plans?", a: "Yes, plans are tailored to dietary preferences and cultural cuisines." },
  { q: "Is workout guidance included?", a: "Light activity routines can be added on request alongside the diet plan." },
  { q: "How do follow-ups work?", a: "Follow-ups happen weekly via WhatsApp/call to keep you on track." }
];

export default function FAQ(){
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <p className="badge">FAQs</p>
          <h2 className="h2 mt-2">You Asked, We Answered</h2>
        </div>
        <div className="mt-8 max-w-3xl mx-auto">
          {faqs.map((f, i)=> (
            <div key={i} className="border-b">
              <button className="w-full text-left py-4 font-medium flex items-center justify-between" onClick={()=> setOpen(open===i?null:i)}>
                {f.q}
                <span>{open===i ? "−" : "+"}</span>
              </button>
              {open===i && <p className="pb-4 muted">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
