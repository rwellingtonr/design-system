import { Button, ButtonProps } from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Components/Button",
	component: Button,
	args: {
		children: "Create Account",
	},
	argTypes: {},
} as Meta<ButtonProps>;

export const Default: StoryObj = {};
