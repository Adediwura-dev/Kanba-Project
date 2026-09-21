import Card from "../reusable/Card";
export default function InProgress() {
	return (
		<div className='flex flex-col gap-4 justify-center bg-[#FFEDA8]'>
			<div>
				<h3 className='uppercase'>In-progress</h3>
				<Card />
				<Card />
			</div>
		</div>
	);
}
