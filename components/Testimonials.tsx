"use client"
import { useEffect, useState } from "react";

const testimonials = [
	{
		name: "Vanjakshi Kaushik",
		quote:
			"I would recommend her to all my friends and family who are facing dietary issues. I followed her 3-month plan to shed my postpartum weight. I’m happy that she tracked my progress every day and guided me according to my body’s requirements. I’m still following her maintenance plan, and my weight is stable now — I lost 11 kgs in 3 months. The results are clearly visible: I have less gastric discomfort, more stamina, and I feel lighter. She is very friendly, firm with her plans, and motivates you to achieve your goals. She doesn’t give up on her patients.",
	},
	{
		name: "Priyanka Sharma",
		quote:
			"Dr. Khushboo is an excellent dietician. She provides easy to follow diet plan for weight loss. She even tells the recipes for the diet. I feel comfortable to communicate with her.",
	},
	{
		name: "Kopal Suri",
		quote:
			"Her exceptional guidance and support in my weight loss journey. Thanks to her expert advice and personalized diet plan, I successfully shed 7kg in 1month in a healthy and sustainable way. She not only provided me with nutritious meal plans but also educated me about making better food choices. Her positive encouragement and regular check-ins kept me motivated throughout.I have taken her diet from June 2023 for 3 month. It help me loose my weight around 15 kg in 3 months. I couldn't have achieved this without her expertise and dedication. Thank you for helping me reach my goals and embark on a healthier lifestyle!☺️👍🏻",
	},
	{
		name: "Pradyuman Pandey",
		quote:
			"Knowledge is commendable and she hear the people with patience and suggests diet accordingly as per the need and requirements. Results are good. I must recommend madam for others also",
	},
	{
		name: "Dev Batra",
		quote:
			"I'm excited to share my positive feedback for Khushbu who played a crucial role in my weight loss journey, helping me shed an impressive 14 kg (still counting). Her guidance and constant support has been invaluable, making this transformation possible. For me this has been game changer as i was struggling to reduce weight for long with Gym etc , but was not successful but with her guidance it has been quite easy as she makes u lose weight according to your lifestyle and daily routine; which is best!",
	},
];

export default function Testimonials() {
	return (
		<section id="testimonials" className="section bg-slate-50">
			<div className="container">
				<h2 className="h2 text-center mb-8">Google Reviews</h2>
				<div
					className="flex gap-6 overflow-x-auto pb-4"
					style={{ scrollSnapType: "x mandatory" }}
				>
					{testimonials.map((t, i) => (
						<div
							key={i}
							className="card p-6 min-w-[320px] max-w-[400px] flex-shrink-0"
							style={{ scrollSnapAlign: "start" }}
						>
							<p className="mb-4">"{t.quote}"</p>
							<span className="font-semibold">— {t.name}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
