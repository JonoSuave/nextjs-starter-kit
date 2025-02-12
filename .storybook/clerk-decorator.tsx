import { ClerkProvider } from '@clerk/nextjs';
import React from 'react';

export const withClerk = (Story: any, context: any) => {
  const mockUser = context.parameters.clerk?.user;

  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      // Mock the user state based on story parameters
      initialState={{
        userId: mockUser?.id,
        user: mockUser,
      }}
    >
      <Story />
    </ClerkProvider>
  );
}; 