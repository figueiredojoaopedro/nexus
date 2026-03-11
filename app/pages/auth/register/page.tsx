"use client";

import { SignupForm } from "@/components/signup-form";
import { registerUser } from "./service";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleRegisterSuccess = () => {
    router.push("/pages/auth/login");
  };

  const handleRegisterError = (message: string) => {
    setError(message);
  };

  return (
    <div className="w-full max-w-md p-4 sm:p-6 md:p-8 bg-gray-900 rounded-lg shadow-lg shadow-white/30 text-white">
      <SignupForm
        onRegister={registerUser}
        onSuccess={handleRegisterSuccess}
        onRegistrationError={handleRegisterError}
      />
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      <div className="text-center text-sm text-muted-foreground mt-4">
        Já tem uma conta?{" "}
        <Link
          href="/pages/auth/login"
          className="underline underline-offset-4 hover:text-primary border border-gray-700 px-4 py-2 rounded-md"
        >
          Entrar
        </Link>
      </div>
    </div>
  );
}
