import type { Meta, StoryObj } from '@storybook/react';
import { AuthStatus } from './auth-status';

const meta: Meta<typeof AuthStatus> = {
  title: 'Auth/AuthStatus',
  component: AuthStatus,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof AuthStatus>;

export const LoggedOut: Story = {
  parameters: {
    clerk: {
      user: null,
    },
  },
};

export const LoggedIn: Story = {
  parameters: {
    clerk: {
      user: {
        id: "user_1",
        firstName: "John",
        emailAddresses: [{ emailAddress: "john@example.com" }],
      },
    },
  },
}; 