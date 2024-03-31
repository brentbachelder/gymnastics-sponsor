import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gymnast from "./pages/Gymnast";
import { Style } from "./providers/style";

export default function App() {
	return (
		<div className="App">
			<Style>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/gymnast/:id" element={<Gymnast />} />
				</Routes>
			</Style>
		</div>
	);
}
