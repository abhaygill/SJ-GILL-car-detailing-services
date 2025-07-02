
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Camera } from "lucide-react";

const Gallery = () => {
  // This would be populated from admin uploads in a real application
  const workEntries = [
    {
      id: 1,
      title: "Premium BMW Detail",
      description: "Complete interior and exterior detailing with ceramic coating",
      beforeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
      afterImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80",
      service: "Complete Detailing",
      date: "2024-01-15",
      customer: "John M."
    },
    {
      id: 2,
      title: "Mercedes Paint Correction",
      description: "Professional paint correction and protection package",
      beforeImage: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80",
      afterImage: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=600&q=80",
      service: "Paint Protection",
      date: "2024-01-12",
      customer: "Sarah L."
    },
    {
      id: 3,
      title: "Audi Interior Transformation",
      description: "Deep interior cleaning and leather conditioning",
      beforeImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80",
      afterImage: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=600&q=80",
      service: "Interior Detailing",
      date: "2024-01-10",
      customer: "Mike R."
    }
  ];

  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Camera className="h-12 w-12 text-blue-400 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Our Work Gallery</h1>
            </div>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Before & After transformations showcasing our professional car detailing work
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workEntries.map((entry) => (
                <Card key={entry.id} className="hover:shadow-xl transition-all duration-300 hover-scale overflow-hidden">
                  <div className="relative">
                    {/* Before & After Images */}
                    <div className="grid grid-cols-2 h-64">
                      <div className="relative overflow-hidden">
                        <img 
                          src={entry.beforeImage} 
                          alt={`${entry.title} - Before`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-red-500 text-white text-xs">
                            Before
                          </Badge>
                        </div>
                      </div>
                      <div className="relative overflow-hidden">
                        <img 
                          src={entry.afterImage} 
                          alt={`${entry.title} - After`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-green-500 text-white text-xs">
                            After
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-500 text-white">
                        {entry.service}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{entry.title}</h3>
                    <p className="text-slate-600 mb-4">{entry.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(entry.date).toLocaleDateString('en-AU')}
                      </div>
                      <span>Client: {entry.customer}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Ready for Your Car's Transformation?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Join our satisfied customers and experience the SJ GILL difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="car-blue text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">
                Book Your Service
              </button>
              <button className="border border-slate-300 text-slate-700 px-8 py-3 rounded-md font-semibold hover:bg-slate-50 transition-colors">
                Get Quote
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Gallery;
