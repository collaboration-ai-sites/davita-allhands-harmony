
import { MapPin, Clock, Car, Bus } from 'lucide-react';

const LocationInfo = () => {
  return (
    <section id="location" className="py-24 bg-gradient-to-b from-white to-blue-50 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-davita-blue/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up space-y-8">
            <div>
              <span className="inline-flex items-center rounded-full bg-davita-blue/10 px-3 py-1 text-xs font-medium text-davita-blue mb-6">
                Conference Venue
              </span>
              <h2 className="font-display text-4xl font-bold text-davita-dark mb-4">
                Event Location
              </h2>
              <p className="text-muted-foreground mb-8">
                Join us at the prestigious Denver Convention Center, offering state-of-the-art 
                facilities and convenient access from anywhere in the city.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-davita-blue/10 rounded-full p-2.5">
                  <MapPin className="w-5 h-5 text-davita-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1 text-davita-dark">Denver Convention Center</h3>
                  <p className="text-muted-foreground">
                    700 14th St, Denver, CO 80202<br />
                    Grand Ballroom - 2nd Floor
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-davita-blue/10 rounded-full p-2.5">
                  <Clock className="w-5 h-5 text-davita-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1 text-davita-dark">Conference Hours</h3>
                  <p className="text-muted-foreground">
                    September 15: 8:00 AM - 7:00 PM<br />
                    September 16: 8:30 AM - 5:00 PM
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-davita-blue/10 rounded-full p-2.5">
                  <Car className="w-5 h-5 text-davita-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1 text-davita-dark">Parking Information</h3>
                  <p className="text-muted-foreground">
                    Convention Center Garage - $15/day<br />
                    Validation available for DaVita employees
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-davita-blue/10 rounded-full p-2.5">
                  <Bus className="w-5 h-5 text-davita-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1 text-davita-dark">Public Transportation</h3>
                  <p className="text-muted-foreground">
                    Light Rail: Convention Center Station<br />
                    Bus Routes: 0, 6, 10, 15, 20
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-down">
            <div className="relative">
              <div className="glass-panel rounded-2xl overflow-hidden relative z-20 shadow-glass">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                  alt="Denver Convention Center" 
                  className="w-full h-[400px] object-cover object-center"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.8262443670397!2d-104.99790242412687!3d39.743870102407376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78da5640340d%3A0x3ff4c7c535178d77!2sColorado%20Convention%20Center!5e0!3m2!1sen!2sus!4v1685449828461!5m2!1sen!2sus"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Denver Convention Center Map"
                    className="opacity-0 absolute inset-0"
                  ></iframe>
                  <button 
                    className="z-10 glass-panel px-6 py-3 rounded-full font-medium text-davita-blue hover:bg-white/90 transition-all flex items-center gap-2 shadow-subtle"
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
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-davita-green rounded-2xl -z-10 opacity-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-davita-blue rounded-2xl -z-10 opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;
