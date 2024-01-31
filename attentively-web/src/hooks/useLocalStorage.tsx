const APP_NAME = 'attentively';

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

	const getAll = (prefix: any) => {
		return Object.keys(localStorage)
			.filter((k) => k.startsWith(`${APP_NAME}.${prefix}`))
			.map((k) => {
				return { key: k, value: localStorage.getItem(k) };
			});
	};

	return { getLs: get, setLs: set, upsertLs: upsert, getAllLs: getAll };
}

export default useLocalStorage;
