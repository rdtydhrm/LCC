import React from "react";
import imgKatedral from "../assets/images/Katedral.jpg";
import imgMasjid from "../assets/images/Masjid.jpg";
import imgVihara from "../assets/images/Vihara.jpg";
import iconLeft from "../assets/icons/kiri.svg";
import iconRight from "../assets/icons/kanan.svg";

// Dummy data for recommendations
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

	// Auto-slide ke kanan setiap 10 detik
	React.useEffect(() => {
		const interval = setInterval(() => {
			setActive((prev) => (prev === recommendations.length - 1 ? 0 : prev + 1));
		}, 7000);
		return () => clearInterval(interval);
	}, []);

	const prev = () => setActive((prev) => (prev === 0 ? recommendations.length - 1 : prev - 1));
	const next = () => setActive((prev) => (prev === recommendations.length - 1 ? 0 : prev + 1));

	// Mendapatkan index kiri dan kanan dari slide aktif
	const leftIdx = active === 0 ? recommendations.length - 1 : active - 1;
	const rightIdx = active === recommendations.length - 1 ? 0 : active + 1;

	return (
		<div className="relative flex items-center justify-center w-[700px] h-[480px]">
			{/* Left arrow */}
			<button
				onClick={prev}
				className="absolute left-0 z-10 bg-[#2a7477] hover:bg-[#214b4e] rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
				aria-label="Sebelumnya"
			>
				<img src={iconLeft} alt="Kiri" className="w-6 h-6" />
			</button>
			{/* Carousel Items */}
			<div className="flex w-full h-full items-center justify-center gap-6 relative">
				{/* Left */}
				<div className="w-[320px] h-[320px] scale-90 opacity-50 z-10 rounded-[20px] shadow-lg overflow-hidden bg-gray-200 transition-all duration-500 flex-shrink-0">
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
				{/* Center */}
				<div
					className="w-[610px] h-[460px] scale-100 opacity-100 z-20 rounded-[20px] shadow-lg overflow-hidden bg-gray-200 transition-all duration-500 flex-shrink-0 relative"
					style={{ boxShadow: "0 8px 32px rgba(33,75,78,0.25)" }}
				>
					<img
						src={recommendations[active].image}
						alt={recommendations[active].title}
						className="object-cover w-full h-full"
					/>
					<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col gap-2">
						<div className="text-white text-xl font-bold">{recommendations[active].title}</div>
						<div className="text-white text-sm opacity-80">{recommendations[active].location}</div>
						<div className="flex items-center gap-1 mt-2">
							<span className="text-yellow-400 text-xl">★</span>
							<span className="text-white text-lg font-semibold">
								{recommendations[active].rating.toFixed(1).replace(".", ",")}
							</span>
						</div>
					</div>
				</div>
				{/* Right */}
				<div className="w-[320px] h-[320px] scale-90 opacity-50 z-10 rounded-[20px] shadow-lg overflow-hidden bg-gray-200 transition-all duration-500 flex-shrink-0">
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
			{/* Right arrow */}
			<button
				onClick={next}
				className="absolute right-0 z-10 bg-[#2a7477] hover:bg-[#214b4e] rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
				aria-label="Selanjutnya"
			>
				<img src={iconRight} alt="Kanan" className="w-6 h-6" />
			</button>
		</div>
	);
}
