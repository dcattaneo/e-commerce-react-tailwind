import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Footer, Sidebar } from "./components/index";
import { Home, ProductDetails } from "./pages/index";

function App() {
	return (
		<>
			<div className="overflow-hidden">
				<Router>   
					<Header/>

					<Routes>
						<Route path='/' element={<Home/>}/>
						<Route path='/product/:id' element={<ProductDetails/>}/>
					</Routes>

					<Sidebar/>
					<Footer/>
					
				</Router>
			</div>
		</>
	);
}

export default App;
