import { CircleDashedCheck, CircleX } from "lucide-react";
import Card from "../reusable/Card";
import { useState } from "react";
export default function All() {
	const [selectedDescription, setSelectedDescription] = useState(null);
	function displayDescription(description) {
		setSelectedDescription(description);
	}
	function closeDescription(description) {
		setSelectedDescription(null);
	}
	return (
		<div className='flex flex-col gap-4 justify-start py-3 px-4 rounded-3xl bg-[#B3DFFA]'>
			<div>
				<div className='flex gap-1.5 bg-[#64adda] w-fit  py-1 px-2 text-sm rounded-2xl items-center'>
					<CircleDashedCheck className='w-4 h-4' />
					<h3 className='uppercase font-bold m-0'>All</h3>
				</div>
				<Card backgroundColor='bg-[#CDEBFC]' />
				<Card
					title='this is my card'
					description='this is my card description'
					backgroundColor='bg-[#CDEBFC]'
					displayDescription={displayDescription}
				/>
				{selectedDescription && (
					<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/30'>
						<div className='w-[400px] rounded-xl bg-[#f0dede] p-4 shadow-xl'>
							<div className='flex items-center justify-between'>
								<button
									onClick={closeDescription}
									className='cursor-pointer text-xl ml-auto'
								>
									<CircleX className='w-4 h-4 text-red-700' />
								</button>
							</div>
							<p className='mt-4'> {selectedDescription} </p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
