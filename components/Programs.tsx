import Image from "next/image";

const programs = [
  { title: "Weight Loss", desc: "Balanced calorie deficit plans that fit your lifestyle.", img: "/image/Weight Loss.png" },
  { title: "PCOS/PCOD", desc: "Hormone-friendly nutrition to reduce symptoms.", img: "/image/PCOD.png" },
  { title: "Diabetes Care", desc: "Glycemic control with sustainable eating patterns.", img: "/image/Diabetes.png" },
  { title: "Thyroid Support", desc: "Energy-first plans to manage hypo/hyper thyroid.", img: "/image/Thyroid.png" },
  { title: "Prenatal/Postnatal", desc: "Trimester-wise nourishment & recovery.", img: "/image/Prenetal.png" },
  { title: "Sports Nutrition", desc: "Performance-focused macro programming.", img: "/image/Sports.png" }
];

export default function Programs(){
  return (
    <section id="programs" className="section bg-slate-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <p className="badge">Programs</p>
          <h2 className="h2 mt-2">Choose Your Goal</h2>
          <p className="muted mt-2">Every plan is personalised after a 1:1 consultation and weekly follow-ups.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {programs.map(p => (
            <div key={p.title} className="card overflow-hidden">
              <div className="flex flex-col items-center">
                <div className="p-5 w-full text-center">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="muted mt-2 text-sm">{p.desc}</p>
                </div>
                <div className="relative w-full h-40 mt-4">
                  <Image src={p.img} alt={p.title} fill className="object-cover rounded-xl"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
