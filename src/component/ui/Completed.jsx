import { CircleCheck } from "lucide-react";
import Card from "../reusable/Card";
export default function Completed() {
	return (
		<div className='flex flex-col gap-4 justify-start py-3 px-4 rounded-3xl bg-[#FFD1DC]'>
			<div>
				<div className='flex gap-2'>
					<CircleCheck />
					<h3 className='uppercase font-bold m-0'>Completed</h3>
				</div>
				<Card />
				<Card />
			</div>
		</div>
	);
}
