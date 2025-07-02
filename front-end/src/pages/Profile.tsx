import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { 
  User, 
  Calendar, 
  Car, 
  Settings, 
  LogOut,
  Edit3,
  Save,
  X
} from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Customer",
    email: "customer@example.com",
    phone: "+61 400 000 000",
    address: "123 Car Street, Melbourne VIC 3000"
  });
  const navigate = useNavigate();

  const bookingHistory = [
    {
      id: "B001",
      service: "Premium Wash & Wax",
      date: "2024-01-15",
      status: "Completed",
      price: "$89"
    },
    {
      id: "B002",
      service: "Interior Detailing",
      date: "2024-02-20",
      status: "Completed",
      price: "$120"
    },
    {
      id: "B003",
      service: "Complete Detailing",
      date: "2024-03-10",
      status: "Scheduled",
      price: "$189"
    }
  ];

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved.",
    });
  };

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case "Scheduled":
        return <Badge className="bg-blue-100 text-blue-800">Scheduled</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-slate-900">My Profile</h1>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Information */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <User className="mr-2 h-5 w-5" />
                      Profile Information
                    </CardTitle>
                    {!isEditing ? (
                      <Button
                        onClick={() => setIsEditing(true)}
                        variant="ghost"
                        size="sm"
                      >
                        <Edit3 className="h-4 w-4" />
                      </Button>
                    ) : (
                      <div className="flex space-x-2">
                        <Button onClick={handleSave} size="sm">
                          <Save className="h-4 w-4" />
                        </Button>
                        <Button
                          onClick={() => setIsEditing(false)}
                          variant="ghost"
                          size="sm"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={profileData.name}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={profileData.address}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="mr-2 h-5 w-5" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild className="w-full car-blue text-white">
                    <Link to="/booking">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book New Service
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/services">
                      <Car className="mr-2 h-4 w-4" />
                      View Services
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Booking History */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Booking History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bookingHistory.map((booking) => (
                      <div
                        key={booking.id}
                        className="flex items-center justify-between p-4 border border-slate-200 rounded-lg"
                      >
                        <div>
                          <h3 className="font-semibold">{booking.service}</h3>
                          <p className="text-sm text-slate-600">
                            Booking ID: {booking.id}
                          </p>
                          <p className="text-sm text-slate-600">
                            Date: {new Date(booking.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="mb-2">{getStatusBadge(booking.status)}</div>
                          <p className="font-semibold text-lg">{booking.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {bookingHistory.length === 0 && (
                    <div className="text-center py-8 text-slate-500">
                      <Car className="mx-auto h-12 w-12 mb-4" />
                      <p>No bookings yet</p>
                      <Button asChild className="mt-4 car-blue text-white">
                        <Link to="/booking">Book Your First Service</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
