import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "../components/IconButton.tsx";
import { fn } from "@storybook/test";

const meta = {
  title: "Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    alt: { control: "text", description: "아이콘 이미지 alt 속성" },
    iconPath: { control: "text", description: "아이콘 이미지 경로" },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconPath: "/icons/delete-black.svg",
    alt: "icon",
  },
};
