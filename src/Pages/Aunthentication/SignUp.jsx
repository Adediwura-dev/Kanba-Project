import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import logo from "../../assets/logo.png";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, form.email, form.password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFD] px-4">
      <div className="w-full max-w-md">
        <div className="-mb-5 ml-auto mr-6 w-36 rounded-2xl bg-[#EAF2FF] p-4 shadow-sm rotate-3">
          <p className="text-xs font-bold text-[#081C4D]">Today's tasks</p>
          <div className="mt-3 space-y-2 text-xs text-gray-600">
            <p>✓ Plan project</p>
            <p>✓ Review emails</p>
            <p>○ Buy Groceries</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="relative bg-white p-8 sm:p-10 rounded-3xl border border-[#E6EAF0] shadow-[0_20px_60px_rgba(8,28,77,0.08)]"
        >
          <p className="text-sm font-medium text-[#6285C2] mb-2">GET STARTED
          </p>

          <h2 className="text-3xl font-bold text-[#081C4D] mb-2">Create your account
          </h2>

          <p className="text-sm text-gray-500 mb-7">Organize your tasks and keep your progress moving.
          </p>

          <input className="w-full mb-4 p-3.5 border border-[#DDE3EC] rounded-xl bg-[#F8FAFD] outline-none focus:border-[#6285C2]" placeholder="Full Name" required onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input className="w-full mb-4 p-3.5 border border-[#DDE3EC] rounded-xl bg-[#F8FAFD] outline-none focus:border-[#6285C2]" type="email" placeholder="Email" required onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input className="w-full mb-6 p-3.5 border border-[#DDE3EC] rounded-xl bg-[#F8FAFD] outline-none focus:border-[#6285C2]" type="password" placeholder="Password" required onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button className="w-full bg-[#081C4D] text-white py-3.5 rounded-xl font-semibold hover:bg-[#6285C2] transition">Sign Up
          </button>

          {error && <p className="text-red-600 text-sm mt-3">{error}</p>}
            <p className="mt-5 text-sm text-center text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-[#081C4D] font-bold hover:text-[#6285C2]">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
