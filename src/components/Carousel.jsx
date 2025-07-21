import React from "react";
import imgKatedral from "../assets/images/Katedral.jpg";
import imgMasjid from "../assets/images/Masjid.jpg";
import imgVihara from "../assets/images/Vihara.jpg";
import iconLeft from "../assets/icons/kiri.svg";
import iconRight from "../assets/icons/kanan.svg";


const recommendations = [
	{
		image: imgKatedral,
		title: "Gereja Katedral",
		location: "Malang, Jawa Timur",
		rating: 4.8,
	},
	{
		image: imgMasjid,
		title: "Masjid Agung",
		location: "Surabaya, Jawa Timur",
		rating: 4.7,
	},
	{
		image: imgVihara,
		title: "Vihara Boen Hay Bio",
		location: "Gresik, Jawa Timur",
		rating: 4.6,
	},
];

export default function Carousel() {
	const [active, setActive] = React.useState(1);

	
	React.useEffect(() => {
		const interval = setInterval(() => {
			setActive((prev) => (prev === recommendations.length - 1 ? 0 : prev + 1));
		}, 7000);
		return () => clearInterval(interval);
	}, []);

	const prev = () => setActive((prev) => (prev === 0 ? recommendations.length - 1 : prev - 1));
	const next = () => setActive((prev) => (prev === recommendations.length - 1 ? 0 : prev + 1));

	
	const leftIdx = active === 0 ? recommendations.length - 1 : active - 1;
	const rightIdx = active === recommendations.length - 1 ? 0 : active + 1;

	return (
	   <div className="relative flex items-center justify-center w-[1100px] h-[600px]">
		
			<button
				onClick={prev}
				className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-[#2a7477] hover:bg-[#214b4e] rounded-full w-12 h-12 flex items-center justify-center shadow-xl border-4 border-white backdrop-blur-none"
				aria-label="Sebelumnya"
				style={{boxShadow:'0 4px 24px rgba(33,75,78,0.18)'}}
			>
				<img src={iconLeft} alt="Kiri" className="w-7 h-7" />
			</button>
			
			<div className="flex w-full h-full items-center justify-center gap-6 relative">
				
	   <div className="w-[420px] h-[420px] scale-95 opacity-70 z-10 rounded-[32px] shadow-2xl overflow-hidden bg-gray-200 transition-all duration-500 flex-shrink-0 relative" style={{filter:'blur(2.5px)'}}>
		   <img
			   src={recommendations[leftIdx].image}
			   alt={recommendations[leftIdx].title}
			   className="object-cover w-full h-full"
		   />
		   <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col gap-1">
			   <div className="text-white text-lg font-bold">{recommendations[leftIdx].title}</div>
			   <div className="text-white text-xs opacity-80">{recommendations[leftIdx].location}</div>
			   <div className="flex items-center gap-1 mt-1">
				   <span className="text-yellow-400 text-base">★</span>
				   <span className="text-white text-base font-semibold">
					   {recommendations[leftIdx].rating.toFixed(1).replace(".", ",")}
				   </span>
			   </div>
		   </div>
	   </div>
				
				<div
			   className="w-[600px] h-[500px] scale-100 opacity-100 z-20 rounded-[40px] shadow-[0_12px_48px_rgba(33,75,78,0.35)] overflow-hidden bg-gray-200 transition-all duration-500 flex-shrink-0 relative hover:scale-[1.03] hover:shadow-[0_20px_64px_rgba(33,75,78,0.45)]"
				>
					<img
						src={recommendations[active].image}
						alt={recommendations[active].title}
						className="object-cover w-full h-full"
					/>
				   <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col gap-3">
					   <div className="text-white text-4xl font-bold drop-shadow-lg">{recommendations[active].title}</div>
					   <div className="text-white text-2xl opacity-90 drop-shadow">{recommendations[active].location}</div>
					   <div className="flex items-center gap-2 mt-3">
						   <span className="text-yellow-400 text-2xl">★</span>
						   <span className="text-white text-2xl font-semibold">
							   {recommendations[active].rating.toFixed(1).replace(".", ",")}
						   </span>
					   </div>
				   </div>
				</div>
				
			   <div className="w-[420px] h-[420px] scale-95 opacity-70 z-10 rounded-[32px] shadow-2xl overflow-hidden bg-gray-200 transition-all duration-500 flex-shrink-0 relative" style={{filter:'blur(2.5px)'}}>
				   <img
					   src={recommendations[rightIdx].image}
					   alt={recommendations[rightIdx].title}
					   className="object-cover w-full h-full"
				   />
				   <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col gap-1">
					   <div className="text-white text-lg font-bold">{recommendations[rightIdx].title}</div>
					   <div className="text-white text-xs opacity-80">{recommendations[rightIdx].location}</div>
					   <div className="flex items-center gap-1 mt-1">
						   <span className="text-yellow-400 text-base">★</span>
						   <span className="text-white text-base font-semibold">
							   {recommendations[rightIdx].rating.toFixed(1).replace(".", ",")}
						   </span>
					   </div>
				   </div>
			   </div>
			</div>
			
			<button
				onClick={next}
				className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-[#2a7477] hover:bg-[#214b4e] rounded-full w-12 h-12 flex items-center justify-center shadow-xl border-4 border-white backdrop-blur-none"
				aria-label="Selanjutnya"
				style={{boxShadow:'0 4px 24px rgba(33,75,78,0.18)'}}
			>
				<img src={iconRight} alt="Kanan" className="w-7 h-7" />
			</button>
		</div>
	);
}
