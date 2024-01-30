import { motion } from 'framer-motion';

export default function Header() {
	return (
		<motion.div
			className="p-3"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
		>
			<span className="font-semibold select-none cursor-default text-zinc-300 hover:text-zinc-50 transition-colors">
				Attentively
			</span>
		</motion.div>
	);
}
