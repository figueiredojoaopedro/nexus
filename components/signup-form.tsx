"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface SignupFormProps extends React.ComponentProps<"form"> {
  onRegister: (
    email: string,
    password: string,
    confirmPassword: string,
  ) => Promise<any>;
  onSuccess: () => void;
  onRegistrationError: (message: string) => void;
}

export function SignupForm({
  className,
  onRegister,
  onSuccess,
  onRegistrationError,
  ...props
}: SignupFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (password !== confirmPassword) {
      onRegistrationError("As senhas não coincidem.");
      setLoading(false);
      return;
    }

    try {
      await onRegister(email, password, confirmPassword);
      onSuccess();
    } catch (error: any) {
      onRegistrationError(error.message || "O registro falhou.");
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
          <h1 className="text-2xl font-bold">Crie sua conta</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Insira seus dados abaixo para criar sua conta
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
            placeholder="senha-forte"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">Confirme sua Senha</FieldLabel>
          <Input
            id="confirm-password"
            type="password"
            placeholder="confirme-sua-senha-forte"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="rounded-lg"
          />
        </Field>
        <Field>
          <Button
            type="submit"
            className="bg-green-600 hover:bg-green-700"
            variant={"default"}
            disabled={loading}
          >
            {loading ? "Criando conta..." : "Criar Conta"}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
