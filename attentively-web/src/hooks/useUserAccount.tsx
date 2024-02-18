import { useEffect, useState } from 'react';

type userDetails = {
	name: string;
};
export type providerName = 'github' | 'google';
const providerToButtonInfo: Record<providerName, string[]> = {
	github: [
		'http://localhost:3000/oauth2/authorization/github',
		'#242A2D',
		'#FAFAFA',
	],
	google: [
		'http://localhost:3000/oauth2/authorization/google',
		'#FFFFFF',
		'#777575',
	],
};

export function useLoginProvider(provider: providerName) {
	return providerToButtonInfo[provider];
}

export function useUserAccount() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userDetails, setUserDetails] = useState<userDetails | undefined>(
		undefined
	);
	useEffect(() => {
		(async function () {
			const response = await fetch('http://localhost:3000/user', {
				method: 'GET',
				redirect: 'follow',
				credentials: 'include',
			});
			if (response.redirected) {
				setIsLoggedIn(false);
			} else {
				setIsLoggedIn(true);
				const data = await response.json();
				setUserDetails(data);
			}
		})();
	}, []);

	return { isLoggedIn, userDetails };
}
