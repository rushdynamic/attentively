import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '../../@/components/ui/table';
import { motion } from 'framer-motion';
import useStats from '../hooks/useStats';

type Stat = {
	date: string | undefined;
	duration: string;
};
const TableRowItem = ({ date, duration }: Stat) => {
	return (
		<TableRow>
			<TableCell className="font-medium">{date}</TableCell>
			<TableCell className="text-right">{duration}</TableCell>
		</TableRow>
	);
};

export default function Stats() {
	const { stats } = useStats();
	return (
		<motion.div
			className="w-full h-full flex justify-center items-center"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
		>
			<div className="w-[50%] h-fit bg-black rounded-lg p-4">
				<Table>
					<TableCaption>A list of your recent sessions.</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead>Date</TableHead>
							<TableHead className="text-right">Duration</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>{stats.map((stat) => TableRowItem(stat))}</TableBody>
				</Table>
			</div>
		</motion.div>
	);
}
