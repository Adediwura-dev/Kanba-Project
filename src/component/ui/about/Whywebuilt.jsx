const  Whywebuilt = () => {
    return(

<section className=" flex flex-col lg:flex-row  justify-between h-screen rounded-2xl  m-6  p-8 ">
      <div className=" w-full lg:w-2/5 m-20">
<div className="mt-12 flex flex-col gap-6">
  <div className="flex items-center gap-3">
    <h1 className="text-4xl font-extrabold tracking-tight">
      Techstars
    </h1>

    {/* {<CornerUpRight
      size={36}
      strokeWidth={1.5}
      className="text-blue-400">}
      */}
  </div>

  <div className="w-full max-w-lg">
    <img src="" alt="Techstars team"
      // className="h-auto w-full rounded-2xl object-cover"
    />
  </div>
</div>
      </div>

        <div className="  px-6 py-6">
            <h2 className="text-5xl font-bold tracking-wide leading-normal ">
            Why we built Padipal
          </h2>
        <div className=" lg:w-2xs; space-y-4 text-lg leading-relaxed ">
          <p className="">
            Being a career woman, wife, and mother comes with many
            responsibilities. From meeting deadlines at work and managing
            household chores to caring for children and making time for
            yourself, keeping track of everything can become overwhelming.
          </p>

          <p className="">
            With so many tasks to remember and
            manage, it is easy to forget important responsibilities, feel
            overwhelmed, and struggle to find a healthy balance between
            career, family, and personal well-being.
          </p>

          <p className="">
             We created a simple and practical
            task management platform that puts organization at your
            fingertips. Users can add and manage daily, weekly, and monthly
            tasks, track their progress, and categorize activities as
            In Progress or Completed, making it easier to stay organized
            and focused.
          </p>

          <p className="">
            Our goal is to help women take control of their schedules,
            accomplish their goals, spend quality time with their families,
            and make room for themselves ,whether that means visiting the
            gym, pursuing personal interests, or simply taking a
            well-deserved break.
          </p>

          <p className=" font-bold leading-normal "> 
             Because being productive shouldn't mean sacrificing yourself or
            the people you love.
          </p>
          </div>
        </div>
      </section> 
     
  );
 };

export default Whywebuilt