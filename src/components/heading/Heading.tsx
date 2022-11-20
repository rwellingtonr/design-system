import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";

export type HeadingProps = {
	size: "sm" | "md" | "lg";
	children: React.ReactNode;
	asChild?: boolean;
};

export function Heading({ size = "md", children, asChild }: HeadingProps) {
	const Component = asChild ? Slot : "h2";

	return (
		<Component
			className={clsx("Heading-gray-100 font-bold font-sans", {
				"Heading-lg": size === "sm",
				"Heading-xl": size === "md",
				"Heading-2xl": size === "lg",
			})}
		>
			{children}
		</Component>
	);
}
