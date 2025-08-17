"use client"
import { useState } from "react";

export default function BMICalc(){
  const [h, setH] = useState<string>(""); // cm
  const [w, setW] = useState<string>(""); // kg
  const height = parseFloat(h) / 100;
  const weight = parseFloat(w);
  const bmi = height && weight ? (weight / (height*height)) : 0;
  const rounded = bmi ? bmi.toFixed(1) : "--";
  const cat = !bmi ? "" : bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : bmi < 30 ? "Overweight" : "Obese";

  return (
    <div className="card p-6">
      <div className="font-semibold">BMI Calculator</div>
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm">Height (cm)</label>
          <input value={h} onChange={e=>setH(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="e.g. 165"/>
        </div>
        <div>
          <label className="block text-sm">Weight (kg)</label>
          <input value={w} onChange={e=>setW(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="e.g. 62"/>
        </div>
      </div>
      <div className="mt-4 text-sm">
        <div>Result: <span className="font-semibold">{rounded}</span> <span className="muted">({cat})</span></div>
      </div>
    </div>
  )
}
