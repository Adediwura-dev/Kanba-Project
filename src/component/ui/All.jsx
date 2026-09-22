import { CircleDashedCheck } from "lucide-react";
import Card from "../reusable/Card";
export default function All() {
	return (
		<div className='flex flex-col gap-4 justify-center py-3 px-4 rounded-3xl bg-[#B3DFFA]'>
			<div>
				<div className='flex gap-1.5 bg-[#64adda] w-fit  py-1 px-2 text-sm rounded-2xl items-center'>
					<CircleDashedCheck className='w-4 h-4' />
					<h3 className='uppercase font-bold m-0'>All</h3>
				</div>
				<Card backgroundColor='bg-[#CDEBFC]' />
				<Card backgroundColor='bg-[#D0EAFB]' />
			</div>
		</div>
	);
}
