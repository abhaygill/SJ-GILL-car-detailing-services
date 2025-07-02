
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { toast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    postcode: "",
    vehicleType: "",
    service: "",
    date: undefined as Date | undefined,
    timeSlot: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { value: "premium-wash", label: "Premium Wash & Wax - $129 AUD", price: 129 },
    { value: "interior-detail", label: "Interior Detailing - $179 AUD", price: 179 },
    { value: "paint-protection", label: "Paint Protection - $449 AUD", price: 449 },
    { value: "express-service", label: "Express Service - $79 AUD", price: 79 },
    { value: "full-detail", label: "Complete Detailing - $289 AUD", price: 289 },
    { value: "engine-clean", label: "Engine Bay Cleaning - $119 AUD", price: 119 }
  ];

  const australianVehicleTypes = [
    "Hatchback",
    "Sedan",
    "Wagon",
    "SUV",
    "4WD",
    "Ute",
    "Van",
    "Luxury Vehicle",
    "Sports Car",
    "Motorcycle"
  ];

  const timeSlots = [
    "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.postcode || !formData.vehicleType || 
        !formData.service || !formData.date || !formData.timeSlot) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Booking Confirmed! 🎉",
      description: "We'll call you shortly to confirm the details.",
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
          <Card className="max-w-md w-full text-center">
            <CardContent className="pt-6">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Booking Confirmed!</h2>
              <p className="text-slate-600 mb-6">
                Thank you for choosing SJ GILL. We'll call you at{" "}
                <span className="font-semibold">{formData.phone}</span> to confirm your appointment.
              </p>
              <div className="bg-slate-50 rounded-lg p-4 mb-6 text-left">
                <h3 className="font-semibold mb-2">Booking Details:</h3>
                <p><strong>Service:</strong> {services.find(s => s.value === formData.service)?.label}</p>
                <p><strong>Date:</strong> {formData.date ? format(formData.date, "PPP") : ""}</p>
                <p><strong>Time:</strong> {formData.timeSlot}</p>
                <p><strong>Vehicle:</strong> {formData.vehicleType}</p>
                <p><strong>Location:</strong> Postcode {formData.postcode}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-slate-600">
                  <strong>Contact:</strong> +61 400 123 456
                </p>
                <p className="text-sm text-slate-600">
                  <strong>WhatsApp:</strong> +61 400 123 456
                </p>
              </div>
              <Button 
                onClick={() => setIsSubmitted(false)} 
                className="mt-6 w-full car-blue text-white"
              >
                Book Another Service
              </Button>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Book Your Service</h1>
            <p className="text-xl text-slate-600">
              Schedule your car detailing appointment across Melbourne
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Service Booking Form</CardTitle>
              <p className="text-slate-600">All fields marked with * are required</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+61 400 123 456"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label>Postcode *</Label>
                    <Input
                      placeholder="e.g. 3000"
                      value={formData.postcode}
                      onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                      required
                    />
                    <p className="text-sm text-slate-500 mt-1">We service all Melbourne metropolitan areas</p>
                  </div>
                  
                  <div>
                    <Label>Vehicle Type *</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, vehicleType: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select vehicle type" />
                      </SelectTrigger>
                      <SelectContent className="z-50 bg-white">
                        {australianVehicleTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>Choose Service *</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent className="z-50 bg-white">
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label>Preferred Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !formData.date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.date ? format(formData.date, "dd/MM/yyyy") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 z-50 bg-white" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.date}
                          onSelect={(date) => setFormData({ ...formData, date })}
                          disabled={(date) => date < new Date() || date.getDay() === 0}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                        <div className="p-3 text-sm text-slate-600 border-t">
                          Note: We're closed on Sundays
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <Label>Time Slot *</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, timeSlot: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent className="z-50 bg-white">
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Service Information</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Mobile service available across Melbourne metro</li>
                    <li>• All equipment and water supplied</li>
                    <li>• Eco-friendly products used</li>
                    <li>• Satisfaction guarantee</li>
                  </ul>
                </div>

                <Button type="submit" className="w-full car-blue text-white font-semibold py-3">
                  Confirm Booking
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
