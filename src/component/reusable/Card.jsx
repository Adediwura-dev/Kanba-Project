import { ListSortDescending, Trash } from "lucide-react";
import { useState } from "react";

export default function Card({
	title,
	description,
	dateCreated,
	color,
	backgroundColor,
	displayDescription,
}) {
	// const [descriptionText, setDescriptionText] = useState(false);
	const currentDate = new Date();
	dateCreated = currentDate.toLocaleDateString();
	// function displayDescription() {
	// 	setDescriptionText(!descriptionText);
	// }
	function handleDescriptionClick() {
		displayDescription(description);
	}
	return (
		<div
			className={`max-w-[250px] min-h-[80px] my-4 mx-3.5 py-2 px-6 flex flex-col items-left justify-center
				rounded-xl ${backgroundColor} hover:bg-[#f0dede] hover:shadow-md transition-shadow duration-200`}
			style={{
				color: color,
				// backgroundColor: backgroundColor,
			}}
		>
			<h3 className='font-bold text-lg first-letter:uppercase'>{title}</h3>
			{description && (
				<button
					onClick={handleDescriptionClick}
					className='cursor-pointer w-fit'
				>
					<ListSortDescending className='w-6 hover:bg-[#f0d2d2] p-1 rounded-md' />
				</button>
			)}
			{/* {descriptionText && (
				<p className=' text-base first-letter:uppercase'>{description}</p>
			)} */}
			{/* <h2 className='font-bold text-lg first-letter:uppercase'>
				this is my card
			</h2>
			<p className=' text-base'>this is my description</p> */}
			<p>{dateCreated}</p>
			<div className='text-red-700 ml-auto'>
				<Trash className='w-4' />
			</div>
		</div>
	);
}
