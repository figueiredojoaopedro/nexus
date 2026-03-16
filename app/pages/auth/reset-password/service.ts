export const resetPassword = async (password: string, confirmPassword: string): Promise<any> => {
  console.log("Attempting to reset password");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password !== confirmPassword) {
        reject(new Error("As senhas não coincidem."));
      } else if (password.length < 8) {
        reject(new Error("A senha deve ter pelo menos 8 caracteres."));
      } else {
        // Simulate success
        resolve({ message: "Senha redefinida com sucesso!" });
      }
    }, 1000);
  });
};
