import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Statics/Header";
import KanbaBoard from "./Pages/KanbaBoard";
import About from "./Pages/About";
import AddTask from "./component/ui/AddTask";
import Signup from "./Pages/Aunthentication/SignUp";
import Login from "./Pages/Aunthentication/Login";
function App() {
	return (
		<BrowserRouter>
			<Header />
			<AddTask />
			<Routes>

				<Route path='/about' element={<About />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path='/' element={<KanbaBoard />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
