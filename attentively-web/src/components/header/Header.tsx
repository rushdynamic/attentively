import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

export default function Header() {
	return (
		<motion.div
			className="p-3 flex items-center justify-between"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
		>
			<Link to="/">
				<span className="font-semibold select-none cursor-pointer text-zinc-300 hover:text-zinc-50 transition-colors">
					Attentively
				</span>
			</Link>
			<Navbar />
		</motion.div>
	);
}
