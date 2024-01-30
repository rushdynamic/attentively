// Accepts a feature flag key and returns if the feature is enabled in the current environment
export default function useFeatureFlag(key?: string) {
	const featureFlags = new Set(import.meta.env.VITE_FEATURE_FLAGS.split(' '));
	return featureFlags.has(key);
}
