import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Landingpage from './components/Landingpage';
import Navbar from './components/Navbar';
import { Context } from './Context/ContextAPI';

function App() {
	return (
		<Context>
			<div className="App">
				<Navbar />
				<Landingpage />
			</div>
		</Context>
	);
}

export default App;
