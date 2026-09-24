
const About = () => {
  return (
    <>
    <section  className="flex flex-col md:flex-row justify-between items-center bg-[#1734CA] h-96 px-6 py-4 m-6 rounded-2xl" >
        <div className=" w-full sm:max-w-xl md:max-w-lg lg:max-w-xl max-w-150 my-auto">
      <h1 className="text-[#A2AEEA]  font-extrabold">ABOUT PADIPAL</h1>
      <p className=" text-5xl text-white font-semibold ">Plan better,stay organized and achieve your goals.</p>
        <p className=" mt-6 text-white text-lg font-medium">
            Padipal is a simple productivity tool designed to help users
            organize their goals, plans, and daily tasks, stay productive, and keep track of what matters most.
        </p>
    </div>
      <main>
        <img src="" alt="Padipal team" />
      </main>
    </section>

    <section className=" flex flex-col justify-center items-center bg-amber-900 ">
      <h1> Why we built Padipal</h1>
    </section>
    </>
  );
};
export default About;