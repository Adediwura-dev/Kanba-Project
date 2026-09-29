import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Statics/Header";
import KanbaBoard from "./Pages/KanbaBoard";
import About from "./Pages/About";
import Footer from "./Statics/Footer";

import Signup from "./Pages/Aunthentication/SignUp";
import Login from "./Pages/Aunthentication/Login";
import Home from "./Pages/Home";
import ProtectedRoute from "./component/ProtectedRoute";
import { AuthProvider } from "./AuthContext";

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Header />
				<Routes>
					<Route path='/about' element={<About />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/login' element={<Login />} />
					<Route
						path="/tasks"
						element={
							<ProtectedRoute>
								<KanbaBoard />
							</ProtectedRoute>
						}
					/>
					<Route path='/' element={<Home />} />
				</Routes>
				<Footer />
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;