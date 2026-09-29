import logo from "../assets/logo.png";
import Signup from "./Aunthentication/SignUp";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen overflow-hidden bg-[#F8FAFD] text-[#081C4D]">
      <main>
        <section className="relative px-6 pb-20 pt-16 sm:pt-24 lg:pb-28 lg:pt-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-2 flex justify-center">
              <img src={logo} alt="PadiPal" className="h-10 w-auto" />
            </div>

            <div className="mx-auto max-w-4xl text-center">
              {/* <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#6B8FEA]">
                Your workspace, simplified
              </p> */}
              <h1 className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
                Turn your tasks
                <br />
                <span className="text-[#081C4D]">into progress.</span>
              </h1>

              <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#667085] sm:text-lg">
                Organize your goals, plans, and daily tasks. Stay productive,
                and keep track of what matters most.
              </p>

              <button
                onClick={() => navigate("/signup")}
                className="mt-8 rounded-full bg-[#081C4D] px-8 py-4 font-bold text-white shadow-lg shadow-[#081C4D]/10 transition duration-300 hover:-translate-y-1 hover:bg-[#102966]"
              >
                Get Started →
              </button>
            </div>

            {/* Creating a mock of our tasksboard */}
            <div className="relative mx-auto mt-20 max-w-6xl sm:mt-24">
              <div className="absolute -left-4 top-12 z-20 hidden w-52 rotate-[-6deg] rounded-2xl border border-[#E6EAF0] bg-white p-4 shadow-[0_20px_50px_rgba(8,28,77,0.10)] lg:block">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-[#081C4D]">
                    Today's tasks
                  </p>

                  <span className="rounded-full bg-[#EAF2FF] px-2 py-1 text-[10px] font-bold text-[#5B7FD1]">
                    4 tasks
                  </span>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="rounded-lg bg-[#F8FAFD] p-2.5 text-xs text-[#667085]">
                    Finish homepage
                  </div>

                  <div className="rounded-lg bg-[#F8FAFD] p-2.5 text-xs text-[#667085]">
                    Update documentation
                  </div>
                </div>
              </div>

              <div className="absolute -right-5 top-20 z-20 hidden w-52 rotate-[5deg] rounded-2xl border border-[#E6EAF0] bg-white p-4 shadow-[0_20px_50px_rgba(8,28,77,0.10)] lg:block">
                <p className="text-xs font-bold text-[#081C4D]">Progress</p>

                <div className="mt-4 flex items-end gap-2">
                  <span className="text-3xl font-bold text-[#081C4D]">72%</span>
                  <span className="mb-1 text-xs text-[#667085]">completed</span>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#EAF2FF]">
                  <div className="h-full w-[72%] rounded-full bg-[#6B8FEA]" />
                </div>
              </div>

              <div className="absolute -bottom-8 -left-3 z-20 hidden w-48 rotate-[4deg] rounded-2xl border border-[#E6EAF0] bg-white p-4 shadow-[0_20px_50px_rgba(8,28,77,0.10)] lg:block">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF7EF] text-sm">
                    ✓
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#081C4D]">
                      Task completed
                    </p>

                    <p className="mt-0.5 text-[10px] text-[#98A2B3]">
                      Just now
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-10 -right-2 z-20 hidden w-48 rotate-[-4deg] rounded-2xl border border-[#E6EAF0] bg-white p-4 shadow-[0_20px_50px_rgba(8,28,77,0.10)] lg:block">
                <p className="text-xs font-bold text-[#081C4D]">Quick note</p>

                <p className="mt-3 text-xs leading-5 text-[#667085]">
                  Remember to review the project before Friday.
                </p>
              </div>

              {/*Main Mock board */}
              <div className="relative rounded-[2rem] border border-[#E1E6EF] bg-white p-3 shadow-[0_30px_90px_rgba(8,28,77,0.12)] sm:p-5">
                <div className="flex items-center justify-between border-b border-[#EEF1F5] px-2 pb-4 sm:px-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[#98A2B3]">
                      Board
                    </p>

                    <h2 className="mt-1 text-lg font-bold text-[#081C4D] sm:text-xl">
                      My Tasks
                    </h2>
                  </div>

                  <div className="hidden rounded-full bg-[#F4F6F9] px-3 py-1.5 text-xs font-semibold text-[#667085] sm:block">
                    All tasks
                  </div>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  {/* Todo */}
                  <div className="rounded-2xl bg-[#F4F7FC] p-3 sm:p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#6B8FEA]" />

                        <p className="text-xs font-bold text-[#081C4D]">
                          To-do
                        </p>
                      </div>

                      <span className="text-[10px] font-semibold text-[#98A2B3]">
                        3
                      </span>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="rounded-xl border border-[#E8ECF3] bg-white p-3 shadow-sm">
                        <p className="text-xs font-semibold text-[#081C4D]">
                          Design homepage
                        </p>

                        <p className="mt-2 text-[10px] text-[#98A2B3]">Today</p>
                      </div>

                      <div className="rounded-xl border border-[#E8ECF3] bg-white p-3 shadow-sm">
                        <p className="text-xs font-semibold text-[#081C4D]">
                          Write documentation
                        </p>

                        <p className="mt-2 text-[10px] text-[#98A2B3]">
                          Tomorrow
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* In Progress */}
                  <div className="rounded-2xl bg-[#FFFAED] p-3 sm:p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#D9A441]" />

                        <p className="text-xs font-bold text-[#081C4D]">
                          In Progress
                        </p>
                      </div>

                      <span className="text-[10px] font-semibold text-[#98A2B3]">
                        2
                      </span>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="rounded-xl border border-[#F2E8C9] bg-white p-3 shadow-sm">
                        <p className="text-xs font-semibold text-[#081C4D]">
                          Build dashboard
                        </p>

                        <p className="mt-2 text-[10px] text-[#98A2B3]">
                          Working on it
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#F2E8C9] bg-white p-3 shadow-sm">
                        <p className="text-xs font-semibold text-[#081C4D]">
                          Review tasks
                        </p>

                        <p className="mt-2 text-[10px] text-[#98A2B3]">
                          In progress
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Completed */}
                  <div className="rounded-2xl bg-[#F0F8F2] p-3 sm:p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#5A9E6F]" />

                        <p className="text-xs font-bold text-[#081C4D]">
                          Completed
                        </p>
                      </div>

                      <span className="text-[10px] font-semibold text-[#98A2B3]">
                        4
                      </span>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="rounded-xl border border-[#DCEDE1] bg-white p-3 shadow-sm">
                        <p className="text-xs font-semibold text-[#081C4D]">
                          Set up project
                        </p>

                        <p className="mt-2 text-[10px] text-[#5A9E6F]">
                          Completed
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#DCEDE1] bg-white p-3 shadow-sm">
                        <p className="text-xs font-semibold text-[#081C4D]">
                          Create workspace
                        </p>

                        <p className="mt-2 text-[10px] text-[#5A9E6F]">
                          Completed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-16 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#98A2B3]">
              Organize · Track · Get things done
            </p>
          </div>
        </section>

        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B8FEA]">
                Bring order to your everyday
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.03em] text-[#081C4D] sm:text-5xl">
                Know what needs to happen next.
              </h2>

              <p className="mt-5 text-base leading-7 text-[#667085] sm:text-lg">
                Move tasks through your workflow, keep important ideas close,
                and see your progress without the clutter.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              <div className="rounded-3xl border border-[#E6EAF0] bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#6B8FEA]">
                  01
                </div>

                <h3 className="mt-6 text-lg font-bold text-[#081C4D]">
                  Organize
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#667085]">
                  Keep your tasks and ideas in clear categories so nothing gets
                  lost.
                </p>
              </div>

              <div className="rounded-3xl border border-[#E6EAF0] bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF4D6] text-[#B1842F]">
                  02
                </div>

                <h3 className="mt-6 text-lg font-bold text-[#081C4D]">
                  Move forward
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#667085]">
                  Move tasks between stages as your work changes.
                </p>
              </div>

              <div className="rounded-3xl border border-[#E6EAF0] bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF7EF] text-[#5A9E6F]">
                  03
                </div>

                <h3 className="mt-6 text-lg font-bold text-[#081C4D]">
                  See progress
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#667085]">
                  See what's done, what's active, and what still needs your
                  attention.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#081C4D] px-6 py-16 text-center sm:px-10 sm:py-20">
            <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
              Ready to get your tasks moving?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#C8D2E6] sm:text-base">
              Keep your ideas organized and your progress visible with PadiPal.
            </p>

            <button
              onClick={() => navigate("/Signup")}
              className="mt-8 rounded-full bg-white px-8 py-4 font-bold text-[#081C4D] transition duration-300 hover:-translate-y-1 hover:bg-[#F0F4FA]"
            >
              Get Started →
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
