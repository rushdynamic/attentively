const APP_NAME = 'Attentively';

function useLocalStorage(prefix?: string) {
	const todayKey = () => {
		return new Date().toLocaleDateString();
	};

	const appKey = (key: string, prefix?: string) => {
		return prefix ? `${APP_NAME}.${prefix}.${key}` : `${APP_NAME}.${key}`;
	};

	const get = (key?: string) => {
		if (key == null) key = todayKey();
		return localStorage.getItem(appKey(key, prefix));
	};

	const set = (key: string, value: string) => {
		localStorage.setItem(appKey(key, prefix), value);
	};

	const upsert = (key: any, value: any) => {
		if (key == null) key = todayKey();
		const currentValue = Number(get(key));
		const updatedValue = currentValue != null ? value + currentValue : value;
		set(key, updatedValue || '');
	};

	return { getLs: get, setLs: set, upsertLs: upsert };
}

export default useLocalStorage;
