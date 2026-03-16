"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface ResetPasswordFormProps extends React.ComponentProps<"form"> {
  onReset: (password: string, confirmPassword: string) => Promise<any>;
  onSuccess: () => void;
  onResetError: (message: string) => void;
}

export function ResetPasswordForm({
  className,
  onReset,
  onSuccess,
  onResetError,
  ...props
}: ResetPasswordFormProps) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await onReset(password, confirmPassword);
      onSuccess();
    } catch (error: any) {
      onResetError(error.message || "Não foi possível redefinir a senha.");
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
          <h1 className="text-2xl font-bold">Redefina sua senha</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Insira sua nova senha abaixo.
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="password">Nova Senha</FieldLabel>
          <Input
            id="password"
            type="password"
            placeholder="nova-senha-forte"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">Confirme sua Nova Senha</FieldLabel>
          <Input
            id="confirm-password"
            type="password"
            placeholder="confirme-sua-nova-senha"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="rounded-lg"
          />
        </Field>
        <Field>
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white border border-blue-600"
            disabled={loading}
          >
            {loading ? "Redefinindo..." : "Redefinir Senha"}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
