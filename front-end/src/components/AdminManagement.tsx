
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  Plus, 
  Edit, 
  Trash2, 
  Calendar, 
  Users,
  DollarSign,
  Car,
  Upload,
  Package,
  Image as ImageIcon
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const AdminManagement = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [services, setServices] = useState([
    { id: 1, name: "Premium Wash & Wax", price: "$129", duration: "2-3 hours", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "Interior Detailing", price: "$179", duration: "3-4 hours", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Paint Protection", price: "$449", duration: "4-6 hours", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80" },
  ]);

  const [accessories, setAccessories] = useState([
    { id: 1, name: "Premium Steering Wheel Cover", price: "$65", stock: 15, image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=300&q=80" },
    { id: 2, name: "All-Weather Floor Mats", price: "$125", stock: 8, image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=300&q=80" },
    { id: 3, name: "Dashboard Phone Mount", price: "$49", stock: 25, image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=300&q=80" },
  ]);

  const [galleryEntries, setGalleryEntries] = useState([
    {
      id: 1,
      title: "Premium BMW Detail",
      description: "Complete interior and exterior detailing with ceramic coating",
      beforeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
      afterImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80",
      service: "Complete Detailing",
      customerName: "John M.",
      date: new Date().toISOString().split('T')[0]
    }
  ]);

  const [newService, setNewService] = useState({
    name: "",
    price: "",
    duration: "",
    description: "",
    image: "",
  });

  const [newAccessory, setNewAccessory] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    image: "",
  });

  const [newGalleryEntry, setNewGalleryEntry] = useState({
    title: "",
    description: "",
    service: "",
    customerName: "",
    beforeImage: "",
    afterImage: "",
  });

  const bookings = [
    { id: 1, customer: "John Smith", service: "Premium Wash & Wax", date: "2024-01-15", status: "Confirmed", phone: "+61 400 111 222" },
    { id: 2, customer: "Sarah Johnson", service: "Interior Detailing", date: "2024-01-16", status: "Pending", phone: "+61 400 333 444" },
    { id: 3, customer: "Mike Wilson", service: "Paint Protection", date: "2024-01-17", status: "Completed", phone: "+61 400 555 666" },
  ];

  const accessoryOrders = [
    { id: 1, customer: "Emma Davis", items: "Steering Cover, Floor Mats", total: "$190", status: "Delivered", type: "Accessories Only" },
    { id: 2, customer: "Tom Brown", items: "Phone Mount", total: "$49", status: "Processing", type: "Accessories + Detailing" },
    { id: 3, customer: "Lisa White", items: "Floor Mats Set", total: "$125", status: "Shipped", type: "Accessories Only" },
  ];

  const customerRecords = [
    { id: 1, name: "John Smith", email: "john@example.com", phone: "+61 400 111 222", totalBookings: 5, totalSpent: "$890" },
    { id: 2, name: "Sarah Johnson", email: "sarah@example.com", phone: "+61 400 333 444", totalBookings: 3, totalSpent: "$567" },
    { id: 3, name: "Mike Wilson", email: "mike@example.com", phone: "+61 400 555 666", totalBookings: 8, totalSpent: "$1,245" },
  ];

  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault();
    if (newService.name && newService.price) {
      const service = {
        id: services.length + 1,
        ...newService,
      };
      setServices([...services, service]);
      setNewService({ name: "", price: "", duration: "", description: "", image: "" });
      toast({
        title: "Service Added!",
        description: "New service has been added successfully.",
      });
    }
  };

  const handleAddAccessory = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAccessory.name && newAccessory.price) {
      const accessory = {
        id: accessories.length + 1,
        ...newAccessory,
        stock: parseInt(newAccessory.stock) || 0,
      };
      setAccessories([...accessories, accessory]);
      setNewAccessory({ name: "", price: "", stock: "", description: "", image: "" });
      toast({
        title: "Accessory Added!",
        description: "New accessory has been added successfully.",
      });
    }
  };

  const handleAddGalleryEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (newGalleryEntry.title && newGalleryEntry.beforeImage && newGalleryEntry.afterImage) {
      const entry = {
        id: galleryEntries.length + 1,
        ...newGalleryEntry,
        date: new Date().toISOString().split('T')[0]
      };
      setGalleryEntries([...galleryEntries, entry]);
      setNewGalleryEntry({ title: "", description: "", service: "", customerName: "", beforeImage: "", afterImage: "" });
      toast({
        title: "Gallery Entry Added!",
        description: "New work entry has been added to gallery.",
      });
    }
  };

  const handleDeleteService = (id: number) => {
    setServices(services.filter(service => service.id !== id));
    toast({
      title: "Service Deleted!",
      description: "Service has been removed successfully.",
    });
  };

  const handleDeleteAccessory = (id: number) => {
    setAccessories(accessories.filter(accessory => accessory.id !== id));
    toast({
      title: "Accessory Deleted!",
      description: "Accessory has been removed successfully.",
    });
  };

  const handleDeleteGalleryEntry = (id: number) => {
    setGalleryEntries(galleryEntries.filter(entry => entry.id !== id));
    toast({
      title: "Gallery Entry Deleted!",
      description: "Gallery entry has been removed successfully.",
    });
  };

  const tabs = [
    { id: "dashboard", name: "Dashboard", icon: <Settings className="h-4 w-4" /> },
    { id: "services", name: "Services", icon: <Car className="h-4 w-4" /> },
    { id: "accessories", name: "Accessories", icon: <Package className="h-4 w-4" /> },
    { id: "bookings", name: "Bookings", icon: <Calendar className="h-4 w-4" /> },
    { id: "gallery", name: "Gallery", icon: <ImageIcon className="h-4 w-4" /> },
    { id: "customers", name: "Customers", icon: <Users className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 rounded-lg bg-slate-900 p-6 shadow text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Admin Management Panel</h1>
          <p className="text-muted-foreground">Manage your SJ GILL car detailing business</p>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-border mb-8 overflow-x-auto">
          <nav className="-mb-px flex space-x-4 md:space-x-8 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground">Total Bookings</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{bookings.length}</div>
                <p className="text-xs text-muted-foreground">Active bookings</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground">Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">$2,847</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground">Active Services</CardTitle>
                <Car className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{services.length}</div>
                <p className="text-xs text-muted-foreground">Services available</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground">Gallery Items</CardTitle>
                <ImageIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{galleryEntries.length}</div>
                <p className="text-xs text-muted-foreground">Work showcased</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === "services" && (
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Plus className="h-5 w-5 mr-2" />
                  Add New Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddService} className="space-y-4">
                  <div>
                    <Label htmlFor="serviceName" className="text-foreground">Service Name</Label>
                    <Input
                      id="serviceName"
                      value={newService.name}
                      onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                      placeholder="e.g. Premium Wash & Wax"
                      className="border-border"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="servicePrice" className="text-foreground">Price</Label>
                    <Input
                      id="servicePrice"
                      value={newService.price}
                      onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                      placeholder="e.g. $89"
                      className="border-border"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="serviceDuration" className="text-foreground">Duration</Label>
                    <Input
                      id="serviceDuration"
                      value={newService.duration}
                      onChange={(e) => setNewService({ ...newService, duration: e.target.value })}
                      placeholder="e.g. 2-3 hours"
                      className="border-border"
                    />
                  </div>

                  <div>
                    <Label htmlFor="serviceImage" className="text-foreground">Image URL</Label>
                    <Input
                      id="serviceImage"
                      value={newService.image}
                      onChange={(e) => setNewService({ ...newService, image: e.target.value })}
                      placeholder="https://example.com/image.jpg"
                      className="border-border"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="serviceDescription" className="text-foreground">Description</Label>
                    <Textarea
                      id="serviceDescription"
                      value={newService.description}
                      onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                      placeholder="Service description..."
                      className="border-border"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Add Service
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Current Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {services.map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        {service.image && (
                          <img src={service.image} alt={service.name} className="w-16 h-16 object-cover rounded" />
                        )}
                        <div>
                          <h3 className="font-semibold text-foreground">{service.name}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="border-border">{service.price}</Badge>
                            <Badge variant="secondary">{service.duration}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="border-border">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleDeleteService(service.id)}
                          className="text-red-600 hover:text-red-700 border-border"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === "gallery" && (
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Upload className="h-5 w-5 mr-2" />
                  Add Work to Gallery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddGalleryEntry} className="space-y-4">
                  <div>
                    <Label htmlFor="galleryTitle" className="text-foreground">Work Title</Label>
                    <Input
                      id="galleryTitle"
                      value={newGalleryEntry.title}
                      onChange={(e) => setNewGalleryEntry({ ...newGalleryEntry, title: e.target.value })}
                      placeholder="e.g. BMW M3 Complete Detail"
                      className="border-border"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="galleryService" className="text-foreground">Service Performed</Label>
                    <Input
                      id="galleryService"
                      value={newGalleryEntry.service}
                      onChange={(e) => setNewGalleryEntry({ ...newGalleryEntry, service: e.target.value })}
                      placeholder="e.g. Premium Detailing"
                      className="border-border"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="galleryCustomer" className="text-foreground">Customer Name</Label>
                    <Input
                      id="galleryCustomer"
                      value={newGalleryEntry.customerName}
                      onChange={(e) => setNewGalleryEntry({ ...newGalleryEntry, customerName: e.target.value })}
                      placeholder="e.g. John D."
                      className="border-border"
                    />
                  </div>

                  <div>
                    <Label htmlFor="beforeImage" className="text-foreground">Before Image URL</Label>
                    <Input
                      id="beforeImage"
                      value={newGalleryEntry.beforeImage}
                      onChange={(e) => setNewGalleryEntry({ ...newGalleryEntry, beforeImage: e.target.value })}
                      placeholder="https://example.com/before.jpg"
                      className="border-border"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="afterImage" className="text-foreground">After Image URL</Label>
                    <Input
                      id="afterImage"
                      value={newGalleryEntry.afterImage}
                      onChange={(e) => setNewGalleryEntry({ ...newGalleryEntry, afterImage: e.target.value })}
                      placeholder="https://example.com/after.jpg"
                      className="border-border"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="galleryDescription" className="text-foreground">Description</Label>
                    <Textarea
                      id="galleryDescription"
                      value={newGalleryEntry.description}
                      onChange={(e) => setNewGalleryEntry({ ...newGalleryEntry, description: e.target.value })}
                      placeholder="Describe the work performed..."
                      className="border-border"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Add to Gallery
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Gallery Entries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {galleryEntries.map((entry) => (
                    <div key={entry.id} className="p-4 border border-border rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-foreground">{entry.title}</h3>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleDeleteGalleryEntry(entry.id)}
                          className="text-red-600 hover:text-red-700 border-border"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        {entry.beforeImage && (
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Before</p>
                            <img src={entry.beforeImage} alt="Before" className="w-full h-24 object-cover rounded" />
                          </div>
                        )}
                        {entry.afterImage && (
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">After</p>
                            <img src={entry.afterImage} alt="After" className="w-full h-24 object-cover rounded" />
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        {entry.service && <Badge variant="outline">{entry.service}</Badge>}
                        {entry.customerName && <Badge variant="secondary">{entry.customerName}</Badge>}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Accessories Tab */}
        {activeTab === "accessories" && (
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Plus className="h-5 w-5 mr-2" />
                  Add New Accessory
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddAccessory} className="space-y-4">
                  <div>
                    <Label htmlFor="accessoryName" className="text-foreground">Accessory Name</Label>
                    <Input
                      id="accessoryName"
                      value={newAccessory.name}
                      onChange={(e) => setNewAccessory({ ...newAccessory, name: e.target.value })}
                      placeholder="e.g. Premium Floor Mats"
                      className="border-border"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="accessoryPrice" className="text-foreground">Price</Label>
                    <Input
                      id="accessoryPrice"
                      value={newAccessory.price}
                      onChange={(e) => setNewAccessory({ ...newAccessory, price: e.target.value })}
                      placeholder="e.g. $65"
                      className="border-border"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="accessoryStock" className="text-foreground">Stock Quantity</Label>
                    <Input
                      id="accessoryStock"
                      type="number"
                      value={newAccessory.stock}
                      onChange={(e) => setNewAccessory({ ...newAccessory, stock: e.target.value })}
                      placeholder="e.g. 10"
                      className="border-border"
                    />
                  </div>

                  <div>
                    <Label htmlFor="accessoryImage" className="text-foreground">Image URL</Label>
                    <Input
                      id="accessoryImage"
                      value={newAccessory.image}
                      onChange={(e) => setNewAccessory({ ...newAccessory, image: e.target.value })}
                      placeholder="https://example.com/image.jpg"
                      className="border-border"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="accessoryDescription" className="text-foreground">Description</Label>
                    <Textarea
                      id="accessoryDescription"
                      value={newAccessory.description}
                      onChange={(e) => setNewAccessory({ ...newAccessory, description: e.target.value })}
                      placeholder="Accessory description..."
                      className="border-border"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Add Accessory
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Current Accessories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {accessories.map((accessory) => (
                    <div key={accessory.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <h3 className="font-semibold text-foreground">{accessory.name}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="border-border">{accessory.price}</Badge>
                          <Badge variant="secondary">Stock: {accessory.stock}</Badge>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="border-border">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleDeleteAccessory(accessory.id)}
                          className="text-red-600 hover:text-red-700 border-border"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === "bookings" && (
          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Service Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <h3 className="font-semibold text-foreground">{booking.customer}</h3>
                        <p className="text-sm text-muted-foreground">{booking.service}</p>
                        <p className="text-sm text-muted-foreground">Date: {booking.date}</p>
                        <p className="text-sm text-muted-foreground">Phone: {booking.phone}</p>
                      </div>
                      <Badge 
                        variant={
                          booking.status === "Confirmed" ? "default" :
                          booking.status === "Pending" ? "secondary" : "outline"
                        }
                        className="mt-2 md:mt-0 self-start md:self-center"
                      >
                        {booking.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Accessory Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {accessoryOrders.map((order) => (
                    <div key={order.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <h3 className="font-semibold text-foreground">{order.customer}</h3>
                        <p className="text-sm text-muted-foreground">{order.items}</p>
                        <p className="text-sm text-muted-foreground">Total: {order.total}</p>
                        <Badge variant="outline" className="mt-1 border-border">
                          {order.type}
                        </Badge>
                      </div>
                      <Badge 
                        variant={
                          order.status === "Delivered" ? "default" :
                          order.status === "Processing" ? "secondary" : "outline"
                        }
                        className="mt-2 md:mt-0 self-start md:self-center"
                      >
                        {order.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Customers Tab */}
        {activeTab === "customers" && (
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Users className="h-5 w-5 mr-2" />
                Customer Records
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {customerRecords.map((customer) => (
                  <div key={customer.id} className="p-4 border border-border rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h3 className="font-semibold text-foreground">{customer.name}</h3>
                        <p className="text-sm text-muted-foreground">{customer.email}</p>
                        <p className="text-sm text-muted-foreground">{customer.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Total Bookings</p>
                        <p className="font-semibold text-foreground">{customer.totalBookings}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Total Spent</p>
                        <p className="font-semibold text-foreground">{customer.totalSpent}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminManagement;
