import { Trash } from "lucide-react";

export default function Card({
	title,
	description,
	dateCreated,
	color,
	backgroundColor,
	descriptionIcon,
}) {
	const currentDate = new Date();
	dateCreated = currentDate.toLocaleDateString();
	return (
		<div
			className={`max-w-[250px] min-h-[100px] my-4 mx-3.5 py-2 px-6 flex flex-col items-left justify-center
				rounded-xl ${backgroundColor} hover:bg-gray-200 hover:shadow-md transition-shadow duration-200`}
			style={{
				color: color,
				// backgroundColor: backgroundColor,
			}}
		>
			{/* <h3 className='font-bold text-lg first-letter:uppercase'>{title}</h3>
			{description && <p className=' text-base first-letter:uppercase'>{description}</p>} */}
			<h2 className='font-bold text-lg first-letter:uppercase'>
				this is my card
			</h2>
			<p className=' text-base'>this is my description</p>
			<p>{dateCreated}</p>
			<div className='text-red-700 ml-auto'>
				<Trash className='w-4' />
			</div>
		</div>
	);
}
