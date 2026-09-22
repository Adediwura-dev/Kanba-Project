import { LoaderCircle } from "lucide-react";
import Card from "../reusable/Card";
export default function InProgress() {
	return (
		<div className='flex flex-col gap-4 justify-start py-3 px-4 rounded-3xl bg-[#FFEDA8]'>
			<div>
				<div className='flex gap-2'>
					<LoaderCircle />
					<h3 className='uppercase font-bold m-0'>In-Progress</h3>
				</div>
				<Card />
				<Card />
			</div>
		</div>
	);
}
