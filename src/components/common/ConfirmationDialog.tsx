import { ReactNode } from 'react';
import { Button } from '../../../@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogTrigger,
	DialogClose,
} from '../../../@/components/ui/dialog';

type ConfirmationDialogProps = {
	children: ReactNode;
	dialogTitle: string;
	dialogDescription: string;
	dialogSubText?: string;
	onConfirm: () => void;
};
export default function ConfirmationDialog({
	children,
	dialogTitle,
	dialogDescription,
	dialogSubText,
	onConfirm,
}: ConfirmationDialogProps) {
	return (
		<Dialog>
			<DialogTrigger>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{dialogTitle}</DialogTitle>
				</DialogHeader>
				<DialogDescription>{dialogDescription}</DialogDescription>
				<div className="text-xs text-zinc-400">{dialogSubText}</div>
				<div className="flex items-center justify-end gap-2">
					<DialogClose asChild>
						<Button type="button" variant="secondary">
							Close
						</Button>
					</DialogClose>
					<Button type="button" variant="destructive" onClick={onConfirm}>
						Confirm
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
