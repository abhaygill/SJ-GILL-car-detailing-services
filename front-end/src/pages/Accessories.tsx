
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { 
  ShoppingCart, 
  Star, 
  Plus, 
  Minus,
  Search,
  Filter,
  Truck,
  CheckCircle2
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Accessories = () => {
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isBookingService, setIsBookingService] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const accessories = [
    {
      id: "ACC001",
      name: "Premium Leather Steering Wheel Cover",
      price: 65,
      originalPrice: 85,
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=80",
      category: "interior",
      rating: 4.8,
      reviews: 124,
      description: "High-quality leather steering wheel cover for comfort and style",
      inStock: true
    },
    {
      id: "ACC002", 
      name: "All-Weather Floor Mats Set (4pc)",
      price: 125,
      originalPrice: 160,
      image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=400&q=80",
      category: "interior",
      rating: 4.9,
      reviews: 203,
      description: "Durable rubber floor mats with custom fit design",
      inStock: true
    },
    {
      id: "ACC003",
      name: "Dashboard Phone Mount - 360°",
      price: 49,
      originalPrice: 69,
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=400&q=80",
      category: "electronics",
      rating: 4.7,
      reviews: 156,
      description: "360° adjustable phone mount with strong suction cup",
      inStock: true
    },
    {
      id: "ACC004",
      name: "Premium Car Air Freshener Set",
      price: 35,
      originalPrice: 45,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80",
      category: "fragrance",
      rating: 4.6,
      reviews: 89,
      description: "Long-lasting fragrances in vanilla, ocean, and pine scents",
      inStock: true
    },
    {
      id: "ACC005",
      name: "Handheld Car Vacuum Cleaner",
      price: 189,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80",
      category: "cleaning",
      rating: 4.5,
      reviews: 78,
      description: "Powerful cordless vacuum with multiple attachments",
      inStock: true
    },
    {
      id: "ACC006",
      name: "Memory Foam Seat Cushion",
      price: 89,
      originalPrice: 115,
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=400&q=80",
      category: "interior",
      rating: 4.4,
      reviews: 92,
      description: "Ergonomic memory foam for long-distance comfort",
      inStock: true
    }
  ];

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "interior", name: "Interior" },
    { id: "electronics", name: "Electronics" },
    { id: "cleaning", name: "Cleaning" },
    { id: "fragrance", name: "Fragrance" }
  ];

  const filteredAccessories = accessories.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (itemId: string) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
    toast({
      title: "Added to Cart",
      description: "Item has been added to your cart.",
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = accessories.find(acc => acc.id === itemId);
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  const getDeliveryFee = () => {
    return isBookingService ? 0 : 15;
  };

  const getFinalTotal = () => {
    return getTotalPrice() + getDeliveryFee();
  };

  const handleCheckout = () => {
    toast({
      title: "Order Placed Successfully! 🎉",
      description: `Your order total: $${getFinalTotal()} AUD ${isBookingService ? '(Free delivery with service booking!)' : '(Including $15 delivery)'}`,
    });
    setCart({});
    setShowCheckout(false);
  };

  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Car Accessories</h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Premium accessories to enhance your driving experience
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  placeholder="Search accessories..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-slate-600" />
                  <select
                    className="border border-slate-300 rounded-md px-3 py-2"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                {getTotalItems() > 0 && (
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-2 rounded-md">
                      <ShoppingCart className="h-4 w-4" />
                      <span className="font-semibold">{getTotalItems()} items</span>
                      <span>${getTotalPrice()} AUD</span>
                    </div>
                    <Button 
                      onClick={() => setShowCheckout(true)}
                      className="car-blue text-white"
                    >
                      Checkout
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Checkout Modal */}
        {showCheckout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Checkout Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {Object.entries(cart).map(([itemId, quantity]) => {
                    const item = accessories.find(acc => acc.id === itemId);
                    if (!item) return null;
                    return (
                      <div key={itemId} className="flex justify-between">
                        <span>{item.name} x{quantity}</span>
                        <span>${item.price * quantity} AUD</span>
                      </div>
                    );
                  })}
                </div>
                
                <div className="border-t pt-4 space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="booking-service"
                      checked={isBookingService}
                      onCheckedChange={(checked) => setIsBookingService(checked as boolean)}
                    />
                    <label htmlFor="booking-service" className="text-sm">
                      I'm also booking a detailing service
                    </label>
                  </div>
                  
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span>Subtotal:</span>
                      <span>${getTotalPrice()} AUD</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Truck className="h-4 w-4 mr-1" />
                        <span>Delivery:</span>
                      </div>
                      <span className={isBookingService ? "text-green-600 font-semibold" : ""}>
                        {isBookingService ? "FREE" : "$15 AUD"}
                      </span>
                    </div>
                    {isBookingService && (
                      <div className="flex items-center text-green-600 text-sm mt-1">
                        <CheckCircle2 className="h-4 w-4 mr-1" />
                        <span>Free delivery with service booking!</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total:</span>
                    <span>${getFinalTotal()} AUD</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => setShowCheckout(false)}
                    className="flex-1"
                  >
                    Continue Shopping
                  </Button>
                  <Button 
                    onClick={handleCheckout}
                    className="flex-1 car-blue text-white"
                  >
                    Place Order
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Accessories Grid */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAccessories.map((accessory) => (
                <Card key={accessory.id} className="hover:shadow-lg transition-all duration-300 hover-scale">
                  <div className="relative">
                    <img 
                      src={accessory.image} 
                      alt={accessory.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {accessory.originalPrice > accessory.price && (
                      <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                        Save ${accessory.originalPrice - accessory.price}
                      </Badge>
                    )}
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">{accessory.name}</h3>
                    <p className="text-sm text-slate-600 mb-3 line-clamp-2">{accessory.description}</p>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(accessory.rating) ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-slate-600 ml-2">
                        {accessory.rating} ({accessory.reviews})
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-xl font-bold text-slate-900">${accessory.price} AUD</span>
                        {accessory.originalPrice > accessory.price && (
                          <span className="text-sm text-slate-500 line-through ml-2">
                            ${accessory.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {cart[accessory.id] ? (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => removeFromCart(accessory.id)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="font-semibold">{cart[accessory.id]}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => addToCart(accessory.id)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <Button
                        onClick={() => addToCart(accessory.id)}
                        className="w-full car-blue text-white"
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Info */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Delivery Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-green-800 mb-2">FREE Delivery</h3>
                <p className="text-green-700">
                  Book any detailing service and get <strong>free delivery</strong> on all accessories!
                </p>
                <Button asChild className="mt-4 bg-green-600 hover:bg-green-700 text-white">
                  <Link to="/booking">Book Service Now</Link>
                </Button>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Standard Delivery</h3>
                <p className="text-blue-700 mb-4">
                  Accessories only: <strong>$15 AUD</strong> delivery fee across Melbourne metro
                </p>
                <p className="text-sm text-blue-600">2-3 business days delivery</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Accessories;
