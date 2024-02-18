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
	const isStatsEnabled = useFeatureFlag('stats');
	const isAboutEnabled = useFeatureFlag('about');
	const isAccountEnabled = useFeatureFlag('account');
	return (
		<div className="flex items-center gap-2">
			{isStatsEnabled ? (
				<Link to="/stats">
					<NavbarIcon>
						<img src="/img/icons/stats.svg" alt="Stats" />
					</NavbarIcon>
				</Link>
			) : (
				<></>
			)}
			{isAboutEnabled ? (
				<Link to="/about">
					<NavbarIcon>
						<img src="/img/icons/about.svg" alt="About" />
					</NavbarIcon>
				</Link>
			) : (
				<></>
			)}
			{isAccountEnabled ? (
				<Link to="/account">
					<NavbarIcon>
						<img src="/img/icons/account.svg" alt="Account" />
					</NavbarIcon>
				</Link>
			) : (
				<></>
			)}
		</div>
	);
}
