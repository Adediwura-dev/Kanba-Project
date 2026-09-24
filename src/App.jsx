import{ BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Statics/Header";
import KanbaBoard from "./Pages/KanbaBoard";
import About from "./Pages/About";

function App() {
	return (
		<BrowserRouter>
		<Header />

		<Routes>
			<Route path="/" element={<KanbaBoard />} />
			<Route path="/about" element={<About />} />
        </Routes>
	 </BrowserRouter>
	);
}

export default App;
