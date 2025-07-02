
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Car, 
  Shield, 
  Clock, 
  Droplets, 
  Gem,
  CheckCircle 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "premium-wash",
      icon: <Sparkles className="h-10 w-10 text-blue-600" />,
      title: "Premium Wash & Wax",
      price: "$89",
      duration: "2-3 hours",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
      description: "Complete exterior cleaning with premium wax protection for long-lasting shine.",
      features: [
        "Hand wash with premium soap",
        "Clay bar treatment",
        "Premium carnauba wax",
        "Tire and rim cleaning",
        "Glass cleaning inside & out"
      ],
      popular: false
    },
    {
      id: "interior-detail",
      icon: <Car className="h-10 w-10 text-blue-600" />,
      title: "Interior Detailing",
      price: "$120",
      duration: "3-4 hours",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80",
      description: "Deep cleaning of seats, dashboard, carpets, and all interior surfaces.",
      features: [
        "Vacuum all surfaces",
        "Steam cleaning of seats",
        "Dashboard & console detailing",
        "Carpet deep cleaning",
        "Interior odor elimination"
      ],
      popular: true
    },
    {
      id: "paint-protection",
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: "Paint Protection",
      price: "$299",
      duration: "4-6 hours",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80",
      description: "Professional ceramic coating for ultimate paint protection and shine.",
      features: [
        "Paint correction & polishing",
        "Ceramic coating application",
        "UV protection",
        "Scratch resistance",
        "6-month warranty"
      ],
      popular: false
    },
    {
      id: "express-service",
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      title: "Express Service",
      price: "$49",
      duration: "30 minutes",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=600&q=80",
      description: "Quick wash and vacuum service for busy schedules.",
      features: [
        "Exterior foam wash",
        "Quick interior vacuum",
        "Tire cleaning",
        "Glass cleaning",
        "Air freshener"
      ],
      popular: false
    },
    {
      id: "full-detail",
      icon: <Gem className="h-10 w-10 text-blue-600" />,
      title: "Complete Detailing",
      price: "$189",
      duration: "5-6 hours",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80",
      description: "The ultimate car care package combining all our premium services.",
      features: [
        "Everything in Premium Wash",
        "Complete interior detailing",
        "Engine bay cleaning",
        "Headlight restoration",
        "Premium protection package"
      ],
      popular: true
    },
    {
      id: "engine-clean",
      icon: <Droplets className="h-10 w-10 text-blue-600" />,
      title: "Engine Bay Cleaning",
      price: "$79",
      duration: "1-2 hours",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=600&q=80",
      description: "Professional engine compartment cleaning and degreasing.",
      features: [
        "Engine degreasing",
        "Steam cleaning",
        "Protective coating",
        "Component detailing",
        "Safety inspection"
      ],
      popular: false
    }
  ];

  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Professional Services</h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Choose from our comprehensive range of car care services, each designed to bring out the best in your vehicle.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.id} className="hover:shadow-xl transition-all duration-300 hover-scale relative overflow-hidden">
                  {service.popular && (
                    <Badge className="absolute top-4 right-4 z-10 bg-blue-500 text-white">
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      {service.icon}
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                        <div className="text-sm text-slate-500">{service.duration}</div>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-slate-600 mb-4">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      asChild 
                      className="w-full car-blue text-white font-semibold"
                    >
                      <Link to="/booking">Book This Service</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Choose SJ GILL?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
                <p className="text-slate-600">We stand behind our work with a satisfaction guarantee on all services.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                <p className="text-slate-600">All our products are environmentally safe and biodegradable.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Convenient Timing</h3>
                <p className="text-slate-600">Flexible scheduling to fit your busy lifestyle and needs.</p>
              </div>
            </div>
            
            <div className="mt-12">
              <Button asChild size="lg" className="car-blue text-white font-semibold">
                <Link to="/booking">Book Your Service Today</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;
