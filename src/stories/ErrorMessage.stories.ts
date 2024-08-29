import type { Meta, StoryObj } from "@storybook/react";
import ErrorMessage from "../components/ErrorMessage.tsx";

const meta = {
  // 경로
  title: "Text/ErrorMessage",
  // 컴포넌트
  component: ErrorMessage,
  // 보여지는 위치
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    children: { control: "text", description: "에러의 내용" },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "에러 메세지 입니다.",
  },
};
