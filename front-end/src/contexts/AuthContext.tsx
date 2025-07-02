
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'customer';
  phone?: string;
  address?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  signup: (userData: any) => Promise<boolean>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for stored user data on app start
    const storedUser = localStorage.getItem('sjgill_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Demo authentication
    if (email === "admin@sjgill.com" && password === "admin123") {
      const adminUser = {
        id: "admin-1",
        name: "Admin User",
        email: "admin@sjgill.com",
        role: "admin" as const
      };
      setUser(adminUser);
      localStorage.setItem('sjgill_user', JSON.stringify(adminUser));
      return true;
    } else if (email === "customer@example.com" && password === "customer123") {
      const customerUser = {
        id: "customer-1",
        name: "John Customer",
        email: "customer@example.com",
        role: "customer" as const,
        phone: "+61 400 000 000",
        address: "123 Collins Street, Melbourne VIC 3000"
      };
      setUser(customerUser);
      localStorage.setItem('sjgill_user', JSON.stringify(customerUser));
      return true;
    }
    return false;
  };

  const signup = async (userData: any): Promise<boolean> => {
    const newUser = {
      id: `customer-${Date.now()}`,
      name: userData.name,
      email: userData.email,
      role: "customer" as const,
      phone: userData.phone,
      address: userData.address || ""
    };
    setUser(newUser);
    localStorage.setItem('sjgill_user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sjgill_user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      signup,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
