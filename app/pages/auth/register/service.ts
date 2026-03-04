export const registerUser = async (email: string, password: string): Promise<any> => {
  // In a real application, this would make an API call to your backend.
  // For now, we'll simulate a successful or failed registration.
  console.log('Attempting to register user:', { email, password });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'fail@example.com') {
        reject(new Error('Registration failed for this email.'));
      } else if (password.length < 8) {
        reject(new Error('Password must be at least 8 characters long.'));
      } else {
        // Simulate success
        resolve({ message: 'Registration successful!' });
      }
    }, 1000);
  });
};
