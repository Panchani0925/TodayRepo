export async function loginUser(username, password, role) {
  // In a real app, this would make an API call
  // For now, we'll simulate a successful login

  // Simulate API call
  // const response = await fetchWithAuth('/auth/login', {
  //   method: 'POST',
  //   body: JSON.stringify({ username, password, role })
  // });

  // For demo purposes, just return a mock token
  return {
    token: "mock-jwt-token",
    user: {
      id: "1",
      name: username,
      role: role,
    },
  };
}

export async function registerUser(username, password, role) {
  try {
    const response = await fetch("http://localhost:5000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, role }),
    });

    if (!response.ok) {
      throw new Error("Failed to register user");
    }

    const result = await response.json();
    return {
      success: true,
      message: "Registration successful",
      data: result,
    };
  } catch (error) {
    console.error("Error during registration:", error);
    return {
      success: false,
      message: "Registration failed. Please try again.",
    };
  }
}

export function logoutUser() {
  localStorage.removeItem("authToken");
  localStorage.removeItem("userName");
  localStorage.removeItem("userRole");
  localStorage.removeItem("isLoggedIn");
}
