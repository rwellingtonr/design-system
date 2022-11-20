import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
	children: ReactNode;
}
export interface TextInputIconProps {
	children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
	return (
		<div
			className={
				"flex items-center gap-3  py-4 px-3 rounded w-full  bg-gray-800 focus-within:ring-2 ring-cyan-300"
			}
		>
			{children}
		</div>
	);
}
TextInputRoot.displayName = "TextInput.Root";

function TextInputIcon({ children }: TextInputIconProps) {
	return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}
TextInputIcon.displayName = "TextInput.Icon";

function TextInputContent(props: TextInputProps) {
	return (
		<input
			{...props}
			className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
		/>
	);
}
TextInputContent.displayName = "TextInput.Content";

export const TextInput = {
	Root: TextInputRoot,
	Input: TextInputContent,
	Icon: TextInputIcon,
};
