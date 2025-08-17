import Image from "next/image";

// Update this array to use your actual filenames from public/transformation folder
const images = [
  "/Transformation/t1.jpg",
  "/Transformation/t2.jpg",
  "/Transformation/t3.jpg",
  "/Transformation/t4.jpg",
  "/Transformation/t5.jpg",
  "/Transformation/t6.jpg",
  "/Transformation/t7.jpg",
  "/Transformation/t8.jpg"
];

export default function Transformations() {
  return (
    <section id="transformations" className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <p className="badge">Real Results</p>
          <h2 className="h2 mt-2">Client Transformations</h2>
          <p className="muted mt-2">
            Before/After gallery showcasing progress with consistent habits and guidance.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {images.map((src, idx) => (
            <div key={idx} className="card p-3 flex flex-col items-center">
              <div className="flex items-center justify-center w-full h-[260px]">
                <Image
                  src={src}
                  alt={`Transformation ${idx + 1}`}
                  width={400}
                  height={260}
                  className="rounded-xl object-cover w-full h-full"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="mt-2 text-center text-sm">Before / After</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
