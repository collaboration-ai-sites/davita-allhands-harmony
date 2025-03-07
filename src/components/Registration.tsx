
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

const Registration = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    dietaryRestrictions: '',
    attendance: 'both',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        department: '',
        dietaryRestrictions: '',
        attendance: 'both',
      });
    }, 1500);
  };

  return (
    <section id="register" className="py-24 bg-white relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-700 mb-6">
            Join the Conference
          </span>
          <h2 className="font-display text-4xl font-bold text-gray-800 mb-4">
            Register for ConvergeAI All Hands
          </h2>
          <p className="text-muted-foreground">
            Secure your spot at our most anticipated company event of the year. 
            Registration is required for all attendees.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-600 to-purple-700 text-white p-8 rounded-2xl shadow-glass relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <h3 className="text-2xl font-display font-bold mb-6 relative z-10">Conference Highlights</h3>
            
            <ul className="space-y-4 relative z-10">
              {[
                "Inspiring keynotes from leadership",
                "Interactive workshops and breakout sessions",
                "Networking opportunities with colleagues",
                "Latest company updates and strategies",
                "Recognition of team achievements",
                "Complimentary meals and refreshments",
                "Evening reception with entertainment"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-white/20 rounded-full p-1 flex-shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-10 pt-6 border-t border-white/20 relative z-10">
              <p className="font-medium">Important Notes:</p>
              <p className="text-sm text-white/80 mt-2">
                Please register by September 1st. For questions, contact the conference team at conference@convergeai.com or extension 1234.
              </p>
            </div>
          </div>
          
          <div>
            {formStatus === 'success' ? (
              <div className="text-center p-8 glass-panel rounded-xl animate-scale-in">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-800 mb-4">Registration Complete!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for registering for the ConvergeAI All Hands Conference. You'll receive a confirmation email shortly with additional details.
                </p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Register Another Attendee
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="flex w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="flex w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
                      placeholder="your.name@convergeai.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                      Department
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className="flex w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
                    >
                      <option value="" disabled>Select your department</option>
                      <option value="clinical">Clinical Operations</option>
                      <option value="administration">Administration</option>
                      <option value="finance">Finance</option>
                      <option value="hr">Human Resources</option>
                      <option value="it">Information Technology</option>
                      <option value="marketing">Marketing</option>
                      <option value="operations">Operations</option>
                      <option value="research">Research & Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="attendance" className="block text-sm font-medium text-gray-700 mb-1">
                      Attendance Days
                    </label>
                    <div className="flex gap-4">
                      {[
                        { id: 'both', label: 'Both Days' },
                        { id: 'day1', label: 'Day 1 Only' },
                        { id: 'day2', label: 'Day 2 Only' }
                      ].map((option) => (
                        <label key={option.id} className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="attendance"
                            id={option.id}
                            value={option.id}
                            checked={formData.attendance === option.id}
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-500"
                          />
                          <span className="text-sm text-foreground">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-gray-700 mb-1">
                      Dietary Restrictions (Optional)
                    </label>
                    <textarea
                      id="dietaryRestrictions"
                      name="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={handleChange}
                      rows={3}
                      className="flex w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
                      placeholder="Please list any dietary restrictions or allergies"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={cn(
                    "w-full inline-flex h-12 items-center justify-center rounded-md px-6 py-3 text-base font-medium text-white transition-all",
                    formStatus === 'submitting' ? "bg-gradient-to-r from-cyan-500/70 to-purple-600/70" : "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700",
                    "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  )}
                >
                  {formStatus === 'submitting' ? 'Submitting...' : 'Complete Registration'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
