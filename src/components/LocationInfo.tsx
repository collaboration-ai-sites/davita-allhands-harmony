
import { MapPin, Clock, Car, Bus } from 'lucide-react';

const LocationInfo = () => {
  return (
    <section id="location" className="py-24 bg-gradient-to-b from-white to-purple-50 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up space-y-8">
            <div>
              <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-700 mb-6">
                Conference Venue
              </span>
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-4">
                Event Location
              </h2>
              <p className="text-muted-foreground mb-8">
                Join us at the prestigious Salt Palace Convention Center, offering state-of-the-art 
                facilities and convenient access from anywhere in Salt Lake City.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-cyan-500/10 rounded-full p-2.5">
                  <MapPin className="w-5 h-5 text-cyan-700" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1 text-gray-800">Salt Palace Convention Center</h3>
                  <p className="text-muted-foreground">
                    100 S West Temple, Salt Lake City, UT 84101<br />
                    Grand Ballroom - 2nd Floor
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-cyan-500/10 rounded-full p-2.5">
                  <Clock className="w-5 h-5 text-cyan-700" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1 text-gray-800">Conference Hours</h3>
                  <p className="text-muted-foreground">
                    July 23: 8:00 AM - 8:00 PM<br />
                    Doors open at 7:30 AM for early registration
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-cyan-500/10 rounded-full p-2.5">
                  <Car className="w-5 h-5 text-cyan-700" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1 text-gray-800">Parking Information</h3>
                  <p className="text-muted-foreground">
                    Convention Center Parking - $12/day<br />
                    Validation available for ConvergeAI employees
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-cyan-500/10 rounded-full p-2.5">
                  <Bus className="w-5 h-5 text-cyan-700" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1 text-gray-800">Public Transportation</h3>
                  <p className="text-muted-foreground">
                    TRAX Light Rail: Temple Square Station<br />
                    UTA Bus Routes: 2, 11, 200, 500
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-down">
            <div className="relative">
              <div className="glass-panel rounded-2xl overflow-hidden relative z-20 shadow-glass">
                <img 
                  src="https://images.unsplash.com/photo-1619827258582-4037309be961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                  alt="Salt Palace Convention Center" 
                  className="w-full h-[400px] object-cover object-center"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8672196096747!2d-111.89379072356817!3d40.76685897138442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f50fbec6e9a7%3A0x3c0e751c10574bc2!2sSalt%20Palace%20Convention%20Center!5e0!3m2!1sen!2sus!4v1685449828461!5m2!1sen!2sus"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Salt Palace Convention Center Map"
                    className="opacity-0 absolute inset-0"
                  ></iframe>
                  <button 
                    className="z-10 glass-panel px-6 py-3 rounded-full font-medium text-cyan-700 hover:bg-white/90 transition-all flex items-center gap-2 shadow-subtle"
                    onClick={() => {
                      const mapFrame = document.querySelector('iframe');
                      const mapImage = mapFrame?.previousElementSibling;
                      if (mapFrame && mapImage) {
                        mapFrame.classList.remove('opacity-0');
                        mapImage.classList.add('opacity-0');
                      }
                    }}
                  >
                    <MapPin className="w-4 h-4" />
                    View Interactive Map
                  </button>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl -z-10 opacity-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-600 to-orange-400 rounded-2xl -z-10 opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;
