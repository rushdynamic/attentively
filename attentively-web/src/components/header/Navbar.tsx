import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import useFeatureFlag from '../../hooks/useFeatureFlag';

const NavbarIcon = ({ children }: { children: ReactNode }) => {
	return (
		<div className="h-4 w-4 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
			{children}
		</div>
	);
};

export default function Navbar() {
	const isNavEnabled = useFeatureFlag('routing');
	return isNavEnabled ? (
		<div className="flex items-center gap-2">
			<Link to="/stats">
				<NavbarIcon>
					<img src="/img/icons/stats.svg" alt="Stats" />
				</NavbarIcon>
			</Link>
			<Link to="/about">
				<NavbarIcon>
					<img src="/img/icons/about.svg" alt="About" />
				</NavbarIcon>
			</Link>
		</div>
	) : (
		<></>
	);
}
