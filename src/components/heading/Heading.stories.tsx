import { Heading, HeadingProps } from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Components/Heading",
	component: Heading,
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
} as Meta<HeadingProps>;

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

export const CustomComponent: StoryObj<HeadingProps> = {
	args: {
		asChild: true,
		children: <h1>Hello World</h1>,
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
	},
};
