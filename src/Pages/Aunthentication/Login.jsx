import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFD] px-4">
      <div className="relative w-full max-w-md">
        <div className="absolute -bottom-8 -left-5 sm:-left-12 w-36 rounded-2xl bg-white p-4 border border-[#E6EAF0] shadow-sm -rotate-3">
          <p className="text-xs text-gray-400">Your progress</p>

          <div className="flex items-end gap-1 mt-1">
            <span className="text-xl font-bold text-[#081C4D]">72%</span>
            <span className="text-xs text-gray-400 mb-1">completed</span>
          </div>

          <div className="mt-2 h-1.5 rounded-full bg-[#EAF2FF]">
            <div className="h-full w-[72%] rounded-full bg-[#6285C2]" />
          </div>
        </div>

        <form
          onSubmit={handleSubmit} className="relative bg-white w-full p-8 sm:p-10 rounded-3xl border border-[#E6EAF0] shadow-[0_20px_60px_rgba(8,28,77,0.08)]"
        >
          <p className="text-sm font-semibold text-[#6285C2] mb-2">WELCOME BACK
          </p>

          <h2 className="text-3xl font-bold text-[#081C4D]">Let's get things done.
          </h2>

          <p className="mt-2 mb-8 text-sm text-gray-500"> Log in to continue organizing your tasks.
          </p>

          <input className="w-full mb-4 p-3.5 border border-[#DDE3EC] rounded-xl bg-[#F8FAFD] outline-none focus:border-[#6285C2] focus:ring-2 focus:ring-[#EAF2FF]" type="email" placeholder="Email" required onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input className="w-full mb-6 p-3.5 border border-[#DDE3EC] rounded-xl bg-[#F8FAFD] outline-none focus:border-[#6285C2] focus:ring-2 focus:ring-[#EAF2FF]" type="password" placeholder="Password" required onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button className="w-full bg-[#081C4D] text-white py-3.5 rounded-xl font-semibold transition hover:bg-[#6285C2]">Log In
          </button>
          {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

          <p className="mt-6 text-sm text-center text-gray-500">No account?{" "}
            <Link to="/signup" className="font-bold text-[#081C4D] hover:text-[#6285C2] transition">
              Sign Up
            </Link>
          </p>
        </form>
        <div className="absolute -top-10 -right-4 sm:-right-12 w-40 rounded-2xl bg-[#EAF2FF] p-4 shadow-sm rotate-3">
          <p className="text-xs font-bold text-[#081C4D]">Today's tasks</p>
          <div className="mt-3 space-y-2 text-xs text-gray-500">
            <p>✓ Finish assignment</p>
            <p>✓ Review notes</p>
            <p>○ Plan tomorrow</p>
          </div>
        </div>
      </div>
    </div>
  );
}
