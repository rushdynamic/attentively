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
