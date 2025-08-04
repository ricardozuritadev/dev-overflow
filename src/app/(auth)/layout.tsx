import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-auth-light dark:bg-auth-dark bg-center bg-cover bg-no-repeat">
            {children}
        </main>
    );
}
