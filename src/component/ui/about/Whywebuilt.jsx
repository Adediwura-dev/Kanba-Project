import stroke from "../../../assets/stroke.svg";

const  Whywebuilt = () => {
    return(
      <section className="bg-white px-6 py-20 text-[#081C4D] sm:py-24 md:px-12 lg:py-28">
        <div className="mx-auto max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#6B8FEA]">
            Our story
          </p>
          <h2 className="mb-10 text-left text-4xl font-bold leading-tight sm:text-5xl md:mb-12">
            Why we built{" "}
            <span className="relative isolate inline-block text-[#081C4D]">
              <img
                className="absolute -bottom-[0.08em] left-[-3%] -z-10 w-[106%] max-w-none"
                src={stroke}
                alt=""
                aria-hidden="true"
              />
              Padipal
            </span>
          </h2>

          <div className="space-y-7 text-base leading-8 text-[#667085] sm:text-lg">
              <p>
                Being a career woman, wife, and mother comes with many
                responsibilities. From meeting deadlines at work and managing
                household chores to caring for children and making time for
                yourself, keeping track of everything can become overwhelming.
              </p>
              <p>
                With so many tasks to remember and manage, it is easy to forget
                important responsibilities, feel overwhelmed, and struggle to
                find a healthy balance between career, family, and personal
                well-being.
              </p>
              <p>
                We created a simple and practical task management platform that
                puts organization at your fingertips. Users can add and manage
                daily, weekly, and monthly tasks.
              </p>
              <p>
                Users can track their progress and categorize activities as In
                Progress or Completed, making it easier to stay organized and
                focused.
              </p>
              <p>
                Our goal is to help women take control of their schedules,
                accomplish their goals, and spend quality time with their
                families, while making room for themselves through personal
                interests, exercise, or a well-deserved break.
              </p>
              <p className="border-l-4 border-[#6B8FEA] pl-5 font-bold leading-8 text-[#081C4D]">
                Because being productive shouldn't mean sacrificing yourself
                or the people you love.
              </p>
          </div>
        </div>
      </section>
  );
 };

export default Whywebuilt