import type { Meta, StoryObj } from "@storybook/react";
import Label from "../components/Label.tsx";

const meta = {
  // 경로
  title: "Text/Label",
  // 컴포넌트
  component: Label,
  // 보여지는 위치
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    htmlFor: { control: "text", description: "label의 htmlFor 속성 이름" },
    children: { control: "text", description: "label의 내용" },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    htmlFor: "username",
    children: "이름",
  },
};
