import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gymnast from "./pages/Gymnast";
import { Style } from "./providers/style";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

export default function App() {
	return (
		<div className="App">
			<Style>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/profile/:id" element={<Profile />} />
					<Route path="/gymnast/:id" element={<Gymnast />} />
				</Routes>
			</Style>
		</div>
	);
}
