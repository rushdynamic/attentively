import { useLoginProvider, providerName } from '../hooks/useAccount';

const SignInButton = ({
	label,
	provider,
}: {
	label: string;
	provider: providerName;
}) => {
	const [loginUrl, backgroundColor, textColor] = useLoginProvider(provider);
	return (
		<a href={loginUrl}>
			<div
				className="flex items-center h-8 w-48 gap-2 p-2 text-xs"
				style={{ backgroundColor: backgroundColor, color: textColor }}
			>
				{provider ? (
					<img src={`/img/account/${provider}.svg`} className="h-6" />
				) : (
					<></>
				)}
				<span>{label}</span>
			</div>
		</a>
	);
};

export default function Account() {
	//TODO: make API call to fetch acount details here. If redirected, show login buttons
	return (
		<div>
			<SignInButton label="Sign in with GitHub" provider="github" />
			<SignInButton label="Sign in with Google" provider="google" />
		</div>
	);
}
