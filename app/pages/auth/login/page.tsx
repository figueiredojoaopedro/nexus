"use client";

import { LoginForm } from "@/components/login-form";
import { loginUser } from "./service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleLoginSuccess = () => {
    router.push("/"); // Redirect to home page on successful login
  };

  const handleLoginError = (message: string) => {
    setError(message);
  };

  return (
    <div className="w-full max-w-md p-4 sm:p-6 md:p-8 bg-gray-900 rounded-lg shadow-lg shadow-blue-400/60 text-white">
      <LoginForm
        onLogin={loginUser}
        onSuccess={handleLoginSuccess}
        onLoginError={handleLoginError}
      />
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      <div className="text-center text-sm text-muted-foreground mt-4">
        Não tem uma conta?{" "}
        <Link
          href="/pages/auth/register"
          className="underline underline-offset-4 hover:text-primary border border-gray-700 px-4 py-2 rounded-md"
        >
          Criar Conta
        </Link>
      </div>
      <div className="flex justify-center text-sm mt-3">
        <Link
          href="/pages/auth/forgot-password"
          className=" text-muted-foreground hover:text-primary underline underline-offset-4"
        >
          Esqueceu a senha?
        </Link>
      </div>
    </div>
  );
}
