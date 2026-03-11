export const registerUser = async (
  email: string,
  password: string,
  confirmPassword: string,
): Promise<any> => {
  console.log("Attempting to register user:", {
    email,
    password,
    confirmPassword,
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "fail@example.com") {
        reject(new Error("Registration failed for this email."));
      } else if (password.length < 8) {
        reject(new Error("Password must be at least 8 characters long."));
      } else {
        // Simulate success
        resolve({ message: "Registration successful!" });
      }
    }, 1000);
  });
};
