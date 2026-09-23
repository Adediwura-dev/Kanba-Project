import { ListSortDescending, Trash } from "lucide-react";
import { useState } from "react";

export default function Card({
  title,
  description,
  dateCreated,
  color,
  backgroundColor,
  descriptionIcon,
  id,
  onDragStart, 
  onDragEnd,
}) {
  const [descriptionText, setDescriptionText] = useState(false);

  const currentDate = new Date();
  dateCreated = currentDate.toLocaleDateString();

  function displayDescription() {
    setDescriptionText(!descriptionText);
  }
  return (
    <div
      className={`max-w-[250px] min-h-[80px] my-4 mx-3.5 py-2 px-6 flex flex-col items-left justify-center
				rounded-xl ${backgroundColor} hover:bg-gray-200 hover:shadow-md transition-shadow duration-200`}
      style={{
        color: color,
        // backgroundColor: backgroundColor,
      }}
	  draggable="true"
	  onDragStart={(e) => onDragStart(e, id)}
	  onDragEnd={onDragEnd}
    >
      <h3 className="font-bold text-lg first-letter:uppercase">{title}</h3>
      {description && (
        <button onClick={displayDescription} className="cursor-pointer">
          <ListSortDescending className="w-4" />
        </button>
      )}
      {descriptionText && (
        <p className=" text-base first-letter:uppercase">{description}</p>
      )}
      {/* <h2 className='font-bold text-lg first-letter:uppercase'>
				this is my card
			</h2>
			<p className=' text-base'>this is my description</p> */}
      <p>{dateCreated}</p>
      <div className="text-red-700 ml-auto">
        <Trash className="w-4 cursor-pointer" />
      </div>
    </div>
  );
}
