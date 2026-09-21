import Card from "../reusable/Card";
export default function Completed() {
	return (
		<div className='flex flex-col gap-4 justify-center bg-[#FFD1DC]'>
			<div>
				<h3 className='uppercase'>Completed</h3>
				<Card />
				<Card />
			</div>
		</div>
	);
}
