"use client";

import { ForgotPasswordForm } from "@/components/forgot-password-form";
import { sendPasswordResetEmail } from "./service";
import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSendSuccess = () => {
    setError(null);
    setMessage(
      "Se um e-mail com este endereço existir, um link de redefinição de senha foi enviado.",
    );
  };

  const handleSendError = (message: string) => {
    setMessage(null);
    setError(message);
  };

  return (
    <div className="w-full max-w-md p-4 sm:p-6 md:p-8 bg-gray-900 rounded-lg shadow-lg shadow-blue-400/60 text-white">
      <ForgotPasswordForm
        onSend={sendPasswordResetEmail}
        onSuccess={handleSendSuccess}
        onSendError={handleSendError}
      />
      {message && <p className="text-green-500 text-center mt-4">{message}</p>}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      <div className="text-center text-sm text-muted-foreground mt-4">
        Lembrou sua senha?{" "}
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
