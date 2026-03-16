"use client";

import { ResetPasswordForm } from "@/components/reset-password-form";
import { resetPassword } from "./service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleResetSuccess = () => {
    // Optionally show a success message before redirecting
    alert("Senha redefinida com sucesso! Redirecionando para o login...");
    router.push("/pages/auth/login");
  };

  const handleResetError = (message: string) => {
    setError(message);
  };

  return (
    <div className="w-full max-w-md p-4 sm:p-6 md:p-8 bg-gray-900 rounded-lg shadow-lg shadow-blue-400/60 text-white">
      <ResetPasswordForm
        onReset={resetPassword}
        onSuccess={handleResetSuccess}
        onResetError={handleResetError}
      />
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      <div className="text-center text-sm text-muted-foreground mt-4">
        <Link
          href="/pages/auth/login"
          className="underline underline-offset-4 hover:text-primary"
        >
          Voltar para o Login
        </Link>
      </div>
    </div>
  );
}
