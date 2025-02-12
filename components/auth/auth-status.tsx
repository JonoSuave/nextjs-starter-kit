import { UserButton, useUser } from "@clerk/nextjs";

export function AuthStatus() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <div className="p-4">
        <p>Please sign in to continue</p>
      </div>
    );
  }

  return (
    <div className="p-4 flex items-center gap-4">
      <p>Welcome, {user.firstName || user.emailAddresses[0]?.emailAddress}</p>
      <UserButton />
    </div>
  );
} 