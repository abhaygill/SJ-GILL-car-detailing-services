
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { LogIn, UserPlus, Car } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login, signup } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = await login(loginData.email, loginData.password);
    if (success) {
      toast({
        title: "Login Successful!",
        description: "Welcome to SJ GILL!",
      });
      navigate("/");
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Try admin@sjgill.com/admin123 or customer@example.com/customer123",
        variant: "destructive",
      });
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (signupData.name && signupData.email && signupData.phone && signupData.password) {
      await signup(signupData);
      toast({
        title: "Account Created!",
        description: "Welcome to SJ GILL! You can now book our services.",
      });
      navigate("/");
    } else {
      toast({
        title: "Signup Failed",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
    }
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Brand Header */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Car className="h-12 w-12 text-blue-400" />
            <span className="text-3xl font-bold text-white">SJ GILL</span>
          </div>
          <p className="text-slate-300">Premium Car Detailing Services</p>
        </div>

        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Welcome</CardTitle>
            <p className="text-slate-600">Sign in to access our services</p>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="flex justify-center mb-4">
                    <LogIn className="h-12 w-12 text-blue-600" />
                  </div>
                  
                  <div>
                    <Label htmlFor="login-email">Email Address</Label>
                    <Input
                      id="login-email"
                      name="email"
                      type="email"
                      value={loginData.email}
                      onChange={handleLoginChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      id="login-password"
                      name="password"
                      type="password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      placeholder="Enter your password"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full car-blue text-white">
                    Sign In
                  </Button>
                </form>
                
                <div className="mt-6 text-center text-sm text-slate-600">
                  <p className="mb-2">Demo accounts:</p>
                  <div className="bg-slate-50 p-3 rounded text-left">
                    <p><strong>Admin:</strong> admin@sjgill.com</p>
                    <p className="text-xs text-slate-500">Password: admin123</p>
                    <p className="mt-2"><strong>Customer:</strong> customer@example.com</p>
                    <p className="text-xs text-slate-500">Password: customer123</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="flex justify-center mb-4">
                    <UserPlus className="h-12 w-12 text-blue-600" />
                  </div>
                  
                  <div>
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input
                      id="signup-name"
                      name="name"
                      value={signupData.name}
                      onChange={handleSignupChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="signup-email">Email Address</Label>
                    <Input
                      id="signup-email"
                      name="email"
                      type="email"
                      value={signupData.email}
                      onChange={handleSignupChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="signup-phone">Phone Number</Label>
                    <Input
                      id="signup-phone"
                      name="phone"
                      type="tel"
                      value={signupData.phone}
                      onChange={handleSignupChange}
                      placeholder="+61 400 123 456"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      name="password"
                      type="password"
                      value={signupData.password}
                      onChange={handleSignupChange}
                      placeholder="Create a password"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full car-blue text-white">
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
