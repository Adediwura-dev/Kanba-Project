
const About = () => {
  return (
    <div  className=" h-60" >
        <div className=" flex flex-col justify-center items-center  ">
      <button className="bg-blue-600 hover:bg-blue-400 text-white text-sm px-10 rounded-md">About Padipal</button>
      <h1 className="text-2xl font-extrabold mb-4 ">Plan better,stay organized and achieve your goals.</h1>
      </div>
    <div>
        <p className="  flex flex-col justify-center text-center  max-w-3xl  mx-auto text-base text-black">
            Padipal is a simple productivity tool designed to help users
            organize their goals, plans, and daily tasks, stay productive, and keep track of what matters most.
        </p>
    </div>
    </div>
  );
};

export default About;