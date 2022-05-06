import './App.css';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Landingpage from './components/Landingpage';
import Navbar from './components/Navbar';
import PostContent from './components/PostContent';
import Stories from './components/Stories';
import ReactHelmet from './components/ReactHelmet';

import { Context } from './Context/ContextAPI';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Context>
				<Toaster />
				<div className="App">
					<ReactHelmet />
					<Navbar />

					<Routes>
						<Route path="/" element={<Landingpage />} />
						<Route path="/stories" element={<Stories />} />
						<Route path="/post/:id" element={<PostContent />} />
					</Routes>
				</div>
			</Context>
		</Router>
	);
}

export default App;
