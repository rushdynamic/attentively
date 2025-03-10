import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '../@/components/theme-provider';
import { Toaster } from '../@/components/ui/toaster';
import Header from './components/header/Header';
import Home from './pages/Home';
import Stats from './pages/Stats';
import About from './pages/About';
import Account from './pages/Account';
import './App.css';

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<Toaster />
			<div className="h-screen w-screen bg-zinc-950 bg-noise-pattern">
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/stats" element={<Stats />} />
						<Route path="/about" element={<About />} />
						<Route path="/account" element={<Account />} />
					</Routes>
				</BrowserRouter>
			</div>
		</ThemeProvider>
	);
}

export default App;
