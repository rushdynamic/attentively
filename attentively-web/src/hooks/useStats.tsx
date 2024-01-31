import useLocalStorage from './useLocalStorage';
import { formatTime } from '../utils/time_formatter';

export default function useStats() {
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
