import image1 from "../../../assets/image1.jpeg";
import stroke from "../../../assets/stroke.svg";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="overflow-hidden bg-[#F8FAFD] px-6 py-12 text-[#081C4D] sm:px-8 md:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-8 lg:gap-14">
        <div className="relative z-10 py-4 md:py-8">
          <p className="mb-5 text-sm font-semibold tracking-[0.28em] text-[#6B8FEA]">
            ABOUT PADIPAL
          </p>
          <h1 className="max-w-xl text-5xl font-bold leading-[1.02] text-[#081C4D] sm:text-6xl lg:text-7xl">
            Plan better and
            <span className="relative isolate mx-1 inline-block text-[#081C4D]">
              <img
                className="absolute -bottom-[0.08em] left-[-3%] -z-10 w-[106%] max-w-none"
                src={stroke}
                alt=""
                aria-hidden="true"
              />
              stay organized
            </span>
            for what matters.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#667085] sm:text-lg">
            Padipal is a simple productivity tool designed to help you organize
            your goals, plans, and daily tasks, stay productive, and keep track
            of what matters most.
          </p>
          <Link
            to="/signup"
            className="mt-8 inline-flex min-h-14 items-center gap-3 rounded-full bg-[#081C4D] px-8 py-4 font-bold text-white shadow-lg shadow-[#081C4D]/10 transition duration-300 hover:-translate-y-1 hover:bg-[#102966] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6B8FEA]"
          >
            Get started
            <ArrowUpRight aria-hidden="true" size={18} />
          </Link>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-155">
          <svg
            className="absolute bottom-[-2%] left-[-7%] z-0 h-auto w-[76%]"
            viewBox="0 216 595 508"
            aria-hidden="true"
          >
            <path
              fill="#6B8FEA"
              fillOpacity="0.35"
              d="m516.82 487.13c24.13 120.65-49.5 239.91-245.61 215.78-122.12-15.01-255.67-104.21-222.78-222.77 36.81-132.64 97.25-184.67 211.98-229.11 180.25-69.81 229.75 102.82 256.41 236.1z"
            />
          </svg>
          <svg
            className="absolute left-0 top-0 z-10 h-auto w-full"
            viewBox="0 216 595 508"
            role="img"
            aria-label="Padipal team working together"
          >
            <defs>
              <clipPath id="first-case-clip">
                <path d="m578.35 435.38c0 153.35-124.31 277.68-277.68 277.68-153.36 0-277.67-124.33-277.67-277.68 0-153.36 155.05-56.73 277.68-148.82 157.84-118.55 277.67-4.54 277.67 148.82z" />
              </clipPath>
            </defs>
            <image
              href={image1}
              x="0"
              y="216"
              width="595"
              height="508"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#first-case-clip)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
