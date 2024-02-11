import useLocalStorage from './useLocalStorage';
import { formatTime } from '../utils/time_formatter';
import { useEffect, useState } from 'react';

function useStats() {
	const { getAllLs } = useLocalStorage();
	const stats = getAllLs('stopwatch').map((stat) => {
		return {
			date: stat.key.split('.').pop(),
			duration: formatTime(Number(stat.value)),
		};
	});
	stats.sort((s1, s2) => {
		const date1 = s1.date || '';
		const date2 = s2.date || '';
		if (date1 < date2) return -1;
		else return 1;
	});

	return { stats };
}

function useSyncedStats() {
	const [syncedStats, setSyncedStats] = useState('');
	useEffect(() => {
		async function fetchStats() {
			const response = await fetch('http://localhost:3000/stats', {
				method: 'GET',
				redirect: 'follow',
				credentials: 'include',
			});
			if (response.redirected) {
				document.location = response.url;
			} else {
				const data = await response.text();
				setSyncedStats(data);
			}
		}

		fetchStats();
	}, []);

	return { syncedStats };
}

export { useStats, useSyncedStats };
