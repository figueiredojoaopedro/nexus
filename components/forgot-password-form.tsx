"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";

interface ForgotPasswordFormProps extends React.ComponentProps<"form"> {
  onSend: (email: string) => Promise<any>;
  onSuccess: () => void;
  onSendError: (message: string) => void;
}

export function ForgotPasswordForm({
  className,
  onSend,
  onSuccess,
  onSendError,
  ...props
}: ForgotPasswordFormProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await onSend(email);
      onSuccess();
    } catch (error: any) {
      onSendError(error.message || "Não foi possível enviar o e-mail.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className={cn("flex flex-col gap-4", className)}
      onSubmit={handleSubmit}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Esqueceu sua senha?</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Insira seu e-mail para receber um link de redefinição de senha.
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">E-mail</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="email@exemplo.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg"
          />
        </Field>
        <Field>
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white border border-blue-600"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar link de redefinição"}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}