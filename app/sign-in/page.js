'use client'

import { LoginForm } from "@/components/login-form";
// import { useAppStore } from "@/providers/store-provider";

export default function Page() {
    // const access_token  = useAppStore(state => state.access_token);
    // const refresh_token = useAppStore(state => state.refresh_token);
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        {/* {access_token && <p>Access Token: {access_token}</p>}
        {refresh_token && <p>Refresh Token: {refresh_token}</p>} */}
        <LoginForm />
      </div>
    </div>
  );
}
