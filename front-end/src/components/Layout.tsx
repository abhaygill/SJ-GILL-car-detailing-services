import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, Phone, MessageCircle, User, LogOut, Sun, Moon, Calendar, Menu } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const handleProtectedNavigation = (path: string) => {
    if (!user && path === "/booking") {
      return "/login";
    }
    return path;
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Navigation */}
      <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="SJ GILL Logo" className="h-12 w-12" />
              <span className="text-[25px] font-bold text-white">SJ GILL</span>
              <span className="text-[8px] italic text-white relative top-[5px] tracking-wide">car detailing services</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-slate-300 hover:text-white transition-colors ${
                    location.pathname === item.path ? "text-white font-medium" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Dark Mode Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full text-slate-300 hover:text-white hover:bg-slate-800"
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              
              {/* Book Service Button - repositioned before user menu */}
              <Button asChild className="bg-white hover:bg-gray-100 text-slate-900 rounded-full">
                <Link to={handleProtectedNavigation("/booking")} className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Service
                </Link>
              </Button>
              
              {/* User Menu - always last */}
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-800">
                      <User className="h-4 w-4" />
                      <span className="hidden sm:inline">{user?.name}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    {user?.role === 'admin' && (
                      <DropdownMenuItem asChild>
                        <Link to="/admin" className="flex items-center">
                          <User className="mr-2 h-4 w-4" />
                          Admin Panel
                        </Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button asChild variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
                  <Link to="/login">Login</Link>
                </Button>
              )}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`text-foreground hover:text-blue-600 transition-colors p-2 ${
                          location.pathname === item.path ? "text-blue-600 font-medium" : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                    
                    <div className="border-t pt-4">
                      <Button
                        variant="ghost"
                        onClick={toggleTheme}
                        className="w-full justify-start"
                      >
                        {isDarkMode ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
                        {isDarkMode ? "Light Mode" : "Dark Mode"}
                      </Button>
                    </div>
                    
                    <div className="border-t pt-4 space-y-2">
                      <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <Link to={handleProtectedNavigation("/booking")} className="flex items-center justify-center">
                          <Calendar className="mr-2 h-4 w-4" />
                          Book Service
                        </Link>
                      </Button>
                      
                      {user ? (
                        <>
                          <Button asChild variant="outline" className="w-full">
                            <Link to="/profile" className="flex items-center justify-center">
                              <User className="mr-2 h-4 w-4" />
                              Profile
                            </Link>
                          </Button>
                          {user?.role === 'admin' && (
                            <Button asChild variant="outline" className="w-full">
                              <Link to="/admin" className="flex items-center justify-center">
                                <User className="mr-2 h-4 w-4" />
                                Admin Panel
                              </Link>
                            </Button>
                          )}
                          <Button onClick={logout} variant="outline" className="w-full">
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                          </Button>
                        </>
                      ) : (
                        <Button asChild variant="outline" className="w-full">
                          <Link to="/login">Login</Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="SJ GILL Logo" className="h-12 w-12" />
              <span className="text-xl font-bold text-white">SJ GILL</span>
              <span className="text-[8px] italic text-white relative top-[5px] tracking-wide">car detailing services</span>
              </div>
              <p className="text-slate-400">
                Professional car detailing services for your vehicle.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-slate-400 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">Contact</h3>
              <div className="space-y-2">
                <p className="text-slate-400 flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +61 400 123 456
                </p>
                <p className="text-slate-400">Mon - Sat: 8AM - 6PM</p>
                <p className="text-slate-400">Melbourne, VIC</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 SJ GILL. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/61400123456"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
};

export default Layout;
