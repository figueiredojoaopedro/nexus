"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";

interface LoginFormProps extends React.ComponentProps<"form"> {
  onLogin: (email: string, password: string) => Promise<any>;
  onSuccess: () => void;
  onLoginError: (message: string) => void;
}

export function LoginForm({
  className,
  onLogin,
  onSuccess,
  onLoginError,
  ...props
}: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await onLogin(email, password);
      onSuccess();
    } catch (error: any) {
      onLoginError(error.message || "O login falhou.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className={cn("flex flex-col gap-2", className)}
      onSubmit={handleSubmit}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Acesse sua conta</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Insira seus dados abaixo para acessar sua conta
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
          <FieldLabel htmlFor="password">Senha</FieldLabel>
          <Input
            id="password"
            type="password"
            placeholder="sua-senha-secreta"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg"
          />
        </Field>
        <Field>
          <Button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white "
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
