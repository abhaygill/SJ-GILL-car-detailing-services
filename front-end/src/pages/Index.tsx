import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { 
  Car, 
  Sparkles, 
  Shield, 
  Clock, 
  Star, 
  Users, 
  Leaf,
  Phone,
  ShoppingCart,
  ArrowRight,
  Calendar,
  Quote
} from "lucide-react";

const Index = () => {
  const popularServices = [
    {
      icon: <Sparkles className="h-8 w-8 text-blue-600" />,
      title: "Premium Wash & Wax",
      description: "Complete exterior cleaning with premium wax protection for long-lasting shine",
      price: "$129 AUD",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Car className="h-8 w-8 text-blue-600" />,
      title: "Interior Detailing",
      description: "Deep cleaning of seats, dashboard, carpets, and all interior surfaces",
      price: "$179 AUD",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Paint Protection",
      description: "Professional ceramic coating for ultimate paint protection and shine",
      price: "$449 AUD",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const customerTestimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      feedback: "Absolutely amazing service! My BMW looks brand new. Professional team and excellent results.",
      rating: 5,
      service: "Premium Detailing",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80",
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "Michael Chen",
      feedback: "Best car detailing in Melbourne! The ceramic coating is fantastic. Highly recommend SJ GILL.",
      rating: 5,
      service: "Paint Protection",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=80",
      date: "2024-01-10"
    },
    {
      id: 3,
      name: "Emma Wilson",
      feedback: "Interior looks incredible! Attention to detail is outstanding. Will definitely be back.",
      rating: 5,
      service: "Interior Detailing",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=400&q=80",
      date: "2024-01-08"
    }
  ];

  const trustBadges = [
    { icon: <Users className="h-6 w-6" />, text: "500+ Happy Customers", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
    { icon: <Leaf className="h-6 w-6" />, text: "100% Eco-Friendly", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
    { icon: <Shield className="h-6 w-6" />, text: "Quality Guaranteed", color: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200" },
    { icon: <Clock className="h-6 w-6" />, text: "Same Day Service", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-muted overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
                Premium Car
                <span className="text-blue-600"> Detailing</span>
                <br />
                by SJ GILL
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your vehicle with our professional detailing services. 
                We bring showroom quality right to your doorstep across Melbourne.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold hover-scale rounded-full">
                  <Link to="/booking">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Service Now
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-border hover:bg-accent rounded-full">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: +61 400 123 456
                </Button>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80" 
                alt="Professional car detailing in Melbourne"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center justify-center">
                <Badge variant="secondary" className={`${badge.color} px-4 py-2 text-sm font-medium`}>
                  {badge.icon}
                  <span className="ml-2">{badge.text}</span>
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Premium Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional car care services designed to keep your vehicle in pristine condition.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {popularServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover-scale group overflow-hidden border-border">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-blue-600 text-center">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white mr-4 rounded-full">
              <Link to="/booking">
                <Calendar className="mr-2 h-4 w-4" />
                Book Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Gallery */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">Real feedback from our satisfied customers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {customerTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-all duration-300 hover-scale border-border">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name}'s car`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600 text-white">
                      {testimonial.service}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-5 w-5 text-blue-600 mr-2" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.feedback}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{new Date(testimonial.date).toLocaleDateString('en-AU')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/gallery">
                View Full Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
