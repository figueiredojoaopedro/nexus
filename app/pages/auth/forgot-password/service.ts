export const sendPasswordResetEmail = async (email: string): Promise<any> => {
  console.log("Attempting to send password reset email to:", email);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "fail@example.com") {
        reject(new Error("Não foi possível enviar o e-mail para este endereço."));
      } else {
        // Simulate success
        resolve({ message: "E-mail de redefinição de senha enviado com sucesso!" });
      }
    }, 1000);
  });
};
