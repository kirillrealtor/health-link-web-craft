import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Smile, Star, ArrowRight, Filter, X } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Treatments', count: 24 },
    { id: 'whitening', name: 'Teeth Whitening', count: 8 },
    { id: 'veneers', name: 'Veneers', count: 6 },
    { id: 'implants', name: 'Dental Implants', count: 5 },
    { id: 'orthodontics', name: 'Orthodontics', count: 5 }
  ];

  const beforeAfterCases = [
    {
      id: 1,
      category: 'whitening',
      title: 'Professional Teeth Whitening',
      description: 'Dramatic whitening results achieved in just one session',
      beforeImage: '/lovable-uploads/23e664d2-496c-4009-bafb-ceb8d8dde5ad.png',
      afterImage: '/lovable-uploads/580c2c7d-9a53-4f6f-b600-50b7de99a86a.png',
      treatment: 'Professional Whitening',
      duration: '1 Session',
      patientAge: '32 years old'
    },
    {
      id: 2,
      category: 'veneers',
      title: 'Porcelain Veneers Transformation',
      description: 'Complete smile makeover with custom porcelain veneers',
      beforeImage: '/lovable-uploads/4692ee3f-0971-46ad-b360-2d96ff36b524.png',
      afterImage: '/lovable-uploads/8d904085-2c83-409d-83d0-a93b9c8d43af.png',
      treatment: 'Porcelain Veneers',
      duration: '3 Weeks',
      patientAge: '28 years old'
    },
    {
      id: 3,
      category: 'implants',
      title: 'Single Tooth Implant',
      description: 'Natural-looking implant restoration for missing tooth',
      beforeImage: '/lovable-uploads/ac43c119-046c-427f-8532-e591d8417513.png',
      afterImage: '/lovable-uploads/acc4199a-19da-4487-9ca4-850259a7e184.png',
      treatment: 'Dental Implant',
      duration: '4 Months',
      patientAge: '45 years old'
    },
    {
      id: 4,
      category: 'orthodontics',
      title: 'Invisalign Treatment',
      description: 'Straightened teeth with clear aligners',
      beforeImage: '/lovable-uploads/ace2a899-3f89-4035-83d1-b517ea900005.png',
      afterImage: '/lovable-uploads/b2c1283a-2386-4e98-96ec-0183ef442a59.png',
      treatment: 'Invisalign',
      duration: '18 Months',
      patientAge: '24 years old'
    },
    {
      id: 5,
      category: 'whitening',
      title: 'Deep Stain Removal',
      description: 'Removing years of coffee and tobacco stains',
      beforeImage: '/lovable-uploads/c148b70b-93ab-49a7-9cc0-6043e1171eed.png',
      afterImage: '/lovable-uploads/23e664d2-496c-4009-bafb-ceb8d8dde5ad.png',
      treatment: 'Advanced Whitening',
      duration: '2 Sessions',
      patientAge: '38 years old'
    },
    {
      id: 6,
      category: 'veneers',
      title: 'Full Smile Makeover',
      description: 'Complete transformation with 8 veneers',
      beforeImage: '/lovable-uploads/580c2c7d-9a53-4f6f-b600-50b7de99a86a.png',
      afterImage: '/lovable-uploads/4692ee3f-0971-46ad-b360-2d96ff36b524.png',
      treatment: 'Full Veneers',
      duration: '4 Weeks',
      patientAge: '35 years old'
    }
  ];

  const filteredCases = selectedCategory === 'all' 
    ? beforeAfterCases 
    : beforeAfterCases.filter(case_ => case_.category === selectedCategory);

  const handleBookConsultation = () => {
    window.location.href = '/contact';
  };

  const openModal = (case_: any) => {
    setSelectedImage(case_);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-mint-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center space-y-8">
            <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
              <Smile className="h-10 w-10 text-teal-600" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Before & <span className="text-teal-600">After Gallery</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Witness the incredible transformations we've achieved for our patients. 
              Each smile tells a story of renewed confidence and improved oral health.
            </p>
            <div className="flex items-center justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
              <span className="text-gray-700 font-medium text-lg ml-2">5.0 Rating from 500+ Happy Patients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-center mb-8">
            <Filter className="h-5 w-5 text-gray-600 mr-2" />
            <span className="text-gray-700 font-medium">Filter by Treatment Type</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-teal-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 shadow-md hover:shadow-lg'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {filteredCases.map((case_) => (
              <Card 
                key={case_.id} 
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-0 overflow-hidden cursor-pointer"
                onClick={() => openModal(case_)}
              >
                <div className="relative">
                  {/* Before Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={case_.beforeImage} 
                      alt={`Before ${case_.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      BEFORE
                    </div>
                  </div>
                  
                  {/* Divider with Arrow */}
                  <div className="relative h-12 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  
                  {/* After Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={case_.afterImage} 
                      alt={`After ${case_.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      AFTER
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors mb-2">
                    {case_.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {case_.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Treatment:</span>
                      <span className="font-medium text-gray-700">{case_.treatment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium text-gray-700">{case_.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Patient:</span>
                      <span className="font-medium text-gray-700">{case_.patientAge}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for enlarged view */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900">{selectedImage.title}</h3>
              <button
                onClick={closeModal}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-2">
              {/* Before */}
              <div className="relative">
                <img 
                  src={selectedImage.beforeImage} 
                  alt={`Before ${selectedImage.title}`}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                  BEFORE
                </div>
              </div>
              
              {/* After */}
              <div className="relative">
                <img 
                  src={selectedImage.afterImage} 
                  alt={`After ${selectedImage.title}`}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold">
                  AFTER
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-4 text-lg">{selectedImage.description}</p>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-semibold text-gray-900">Treatment</div>
                  <div className="text-teal-600">{selectedImage.treatment}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-semibold text-gray-900">Duration</div>
                  <div className="text-teal-600">{selectedImage.duration}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-semibold text-gray-900">Patient</div>
                  <div className="text-teal-600">{selectedImage.patientAge}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 lg:py-28 bg-teal-600">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready for Your Own Transformation?
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Join hundreds of satisfied patients who have transformed their smiles with our expert care. 
              Schedule your consultation today and start your journey to a confident, beautiful smile.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-teal-600 hover:bg-gray-100 px-10 py-6 text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={handleBookConsultation}
            >
              Book Your Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;