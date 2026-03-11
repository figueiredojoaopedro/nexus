export const loginUser = async (email: string, password: string): Promise<any> => {
  console.log("Attempting to log in user:", { email, password });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "fail@example.com" || password === "fail") {
        reject(new Error("Credenciais inválidas."));
      } else if (password.length < 6) {
        reject(new Error("A senha deve ter pelo menos 6 caracteres."));
      } else {
        // Simulate success
        resolve({ message: "Login bem-sucedido!" });
      }
    }, 1000);
  });
};