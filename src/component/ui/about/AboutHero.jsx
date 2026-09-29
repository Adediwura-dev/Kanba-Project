import image1 from "../../../assets/image1.jpeg";

const AboutHero = () => {
  return (
    <div>
    
      <section className="grid min-h-screen items-center gap-10 text-black sm:px-8 md:grid-cols-2 md:gap-12 md:px-10">
        <div className="max-w-[1200px] py-5 px-6 pl-10 md:pl-16">
          <h1 className=" fon font-bold sm:text-lg md-text-xl lg:text-2xl ">
            ABOUT PADIPAL
          </h1>

          <h2 className=" w-full max-w-2xl py-6 text-4xl font-bold tracking-tight text-gray-800 sm:max-xl  sm:text-5xl  md:text-4xl  lg:text-6xl "> 
            Plan better,stay organized and achieve your goals.
          </h2>
          <p className="w-full max-w-xl text-lg font-normal leading-relaxed text-gray-800 sm:max-w-lg sm:text-xl  md:max-w-xl md:text-lg lg:max-w-lg lg:text-xl">
            Padipal is a simple productivity tool designed to help users
            organize their goals, plans, and daily tasks, stay productive,
            and keep track of what matters most.
          </p>
        </div>

        <div className="flex h-full items-center justify-center">
          <img className="h-auto max-w-[80vw] w-full object-contain md:-ml-8 md:w-[calc(100%+4rem)]" src={image1} alt="Padipal team" />
        </div>
      </section>
        </div>
     ); };
export default AboutHero

      