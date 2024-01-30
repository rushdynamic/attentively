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
			<span className="font-semibold select-none cursor-default text-zinc-300 hover:text-zinc-50 transition-colors">
				Attentively
			</span>
			<Navbar />
		</motion.div>
	);
}
