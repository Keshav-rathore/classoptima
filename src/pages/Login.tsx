
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would authenticate with a backend
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-2">
          <Calendar className="h-8 w-8 text-classoptima-blue" />
          <h1 className="text-3xl font-bold text-classoptima-blue ml-2">ClassOptima</h1>
        </div>
        <p className="text-gray-600">Automated Timetable Generator</p>
      </div>

      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">ClassOptima</h2>
          <p className="text-gray-600 mt-1">Sign in to access the timetable management system</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="coordinator@example.com or faculty@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-classoptima-blue hover:bg-blue-700"
          >
            Sign In
          </Button>
        </form>

        <div className="mt-4 text-sm text-gray-600">
          <p>Demo credentials: coordinator@example.com or faculty@example.com (any password)</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
