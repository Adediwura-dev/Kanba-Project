
const AboutHero = () => {
  return (
    <div>
    
      <section className=" flex  flex-col justify-between items-center min-h-screen m-6 rounded-2xl py-6 px-6 md:flex-row bg-blue-700 sm:px-8 md:px-10lg:flex-row ">
        <div className=" w-full max-w-2xl sm:max-w-2xl lg:max-w-xl lg:m-20 ">
          <h1 className=" text-2xl font-extrabold text-blue-400 sm:text-lg md-text-xl lg:text-2xl ">
            ABOUT PADIPAL
          </h1>

          <h2 className=" w-full max-w-2xl py-6 text-4xl font-bold tracking-tight text-white sm:max-xl sm:text-5xl  md:text-4xl  lg:text-6xl "> 
            Plan better,stay organized and achieve your goals.
          </h2>
          <p className="w-full max-w-xl text-lg font-normal leading-relaxed text-white sm:max-w-lg sm:text-xl  md:max-w-xl md:text-lg lg:max-w-lg lg:text-xl">
            Padipal is a simple productivity tool designed to help users
            organize their goals, plans, and daily tasks, stay productive,
            and keep track of what matters most.
          </p>
        </div>

        <div>
          <img src="" alt="Padipal team" />
        </div>
      </section>
        </div>
     );
 };

export default AboutHero

      