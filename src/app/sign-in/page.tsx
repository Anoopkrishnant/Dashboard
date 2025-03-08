"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { fetchPosts } from "../hooks/usePost";
import { useMutation } from "@tanstack/react-query";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const login = useMutation({
    mutationFn: () =>
      fetchPosts(
        {
          username,
          email: "string", 
          password,
          phone_number: "string",
          input_code: 0,
        },
        "api/v1/login"
      ),
    onSuccess: () => {
      router.push("/dashboard/admin"); 
    },
    onError: (err: any) => {
      setError(err.message || "Login failed"); 
    },
  });
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    login.mutate();
  };
  

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 text-center">
          Admin Login
        </h2>
        <form onSubmit={handleLogin} className="mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
