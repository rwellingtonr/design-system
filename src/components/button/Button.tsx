import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";

export type ButtonProps = {
	children: React.ReactNode;
	asChild?: boolean;
};

export function Button({ children, asChild }: ButtonProps) {
	const Component = asChild ? Slot : "button";

	return (
		<Component
			className={
				"py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white"
			}
		>
			{children}
		</Component>
	);
}
