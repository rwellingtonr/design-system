import { Text, TextProps } from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Components/Text",
	component: Text,
	args: {
		children: "lorem ipsum",
	},
	argTypes: {
		size: {
			options: ["sm", "md", "lg"],
			defaultValue: "md",
			control: {
				type: "inline-radio",
			},
		},
	},
} as Meta<TextProps>;

export const Default: StoryObj = {
	args: {
		size: "md",
	},
};
export const small: StoryObj = {
	args: {
		size: "sm",
	},
};

export const Large: StoryObj = {
	args: {
		size: "lg",
	},
};

export const CustomComponent: StoryObj<TextProps> = {
	args: {
		asChild: true,
		children: <p>Hello World</p>,
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
		asChild: {
			table: {
				disable: true,
			},
		},
	},
};
