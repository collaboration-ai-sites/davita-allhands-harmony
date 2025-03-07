import { Clock, Users, Presentation, Coffee, Utensils, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type Day = 'day1' | 'day2';

const agendaData = {
  day1: [
    {
      time: '8:00 AM - 9:00 AM',
      title: 'Registration & Breakfast',
      description: 'Check-in, get your conference materials, and enjoy breakfast with colleagues.',
      icon: <Coffee className="w-5 h-5" />,
      highlight: false
    },
    {
      time: '9:00 AM - 10:30 AM',
      title: 'Opening Keynote: The Future of DaVita',
      description: 'CEO keynote address on our vision, mission, and strategic direction for the coming year.',
      icon: <Presentation className="w-5 h-5" />,
      highlight: true
    },
    {
      time: '10:45 AM - 12:15 PM',
      title: 'Innovation Showcase',
      description: 'Demonstrations of new technologies and services improving patient care.',
      icon: <MessageSquare className="w-5 h-5" />,
      highlight: false
    },
    {
      time: '12:15 PM - 1:30 PM',
      title: 'Networking Lunch',
      description: 'Enjoy a gourmet lunch while connecting with colleagues from across the company.',
      icon: <Utensils className="w-5 h-5" />,
      highlight: false
    },
    {
      time: '1:30 PM - 3:00 PM',
      title: 'Breakout Sessions',
      description: 'Choose from specialized tracks on clinical excellence, patient experience, and operational efficiency.',
      icon: <Users className="w-5 h-5" />,
      highlight: false
    },
    {
      time: '3:15 PM - 4:45 PM',
      title: 'Team Building Workshop',
      description: 'Interactive activities designed to strengthen collaboration and communication.',
      icon: <Users className="w-5 h-5" />,
      highlight: false
    },
    {
      time: '5:00 PM - 7:00 PM',
      title: 'Welcome Reception',
      description: 'Mix and mingle at our elegant welcome reception with appetizers and refreshments.',
      icon: <Users className="w-5 h-5" />,
      highlight: true
    }
  ],
  day2: [
    {
      time: '8:30 AM - 9:00 AM',
      title: 'Morning Coffee',
      description: 'Start your day with coffee, light breakfast, and casual networking.',
      icon: <Coffee className="w-5 h-5" />,
      highlight: false
    },
    {
      time: '9:00 AM - 10:30 AM',
      title: 'Industry Trends Panel',
      description: 'Expert panel discussing the future of healthcare and upcoming industry shifts.',
      icon: <Users className="w-5 h-5" />,
      highlight: false
    },
    {
      time: '10:45 AM - 12:15 PM',
      title: 'Financial Performance Review',
      description: 'CFO presentation on our financial results, projections, and strategic investments.',
      icon: <Presentation className="w-5 h-5" />,
      highlight: true
    },
    {
      time: '12:15 PM - 1:30 PM',
      title: 'Lunch & Learn',
      description: 'Enjoy lunch while participating in roundtable discussions on key company initiatives.',
      icon: <Utensils className="w-5 h-5" />,
      highlight: false
    },
    {
      time: '1:30 PM - 3:00 PM',
      title: 'Innovation Awards',
      description: 'Celebrating exceptional contributions and innovations from across the organization.',
      icon: <MessageSquare className="w-5 h-5" />,
      highlight: true
    },
    {
      time: '3:15 PM - 4:30 PM',
      title: 'Closing Keynote: Our Path Forward',
      description: 'Inspirational closing address outlining our collective mission and next steps.',
      icon: <Presentation className="w-5 h-5" />,
      highlight: true
    },
    {
      time: '4:30 PM - 5:00 PM',
      title: 'Closing Remarks & Farewell',
      description: 'Final thoughts, acknowledgments, and a look ahead to next year\'s conference.',
      icon: <Users className="w-5 h-5" />,
      highlight: false
    }
  ]
};

const AgendaTimeline = () => {
  const [activeDay, setActiveDay] = useState<Day>('day1');

  return (
    <section id="agenda" className="py-24 bg-white relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-40 w-96 h-96 rounded-full bg-davita-green/5 blur-3xl"></div>
        <div className="absolute bottom-40 -left-40 w-96 h-96 rounded-full bg-davita-blue/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-flex items-center rounded-full bg-davita-blue/10 px-3 py-1 text-xs font-medium text-davita-blue mb-6">
            Conference Schedule
          </span>
          <h2 className="font-display text-4xl font-bold text-davita-dark mb-4">
            Two Days of Inspiration and Collaboration
          </h2>
          <p className="text-muted-foreground">
            Explore our carefully curated agenda designed to inform, inspire and connect our DaVita community.
          </p>
        </div>
        
        <div className="mb-10 flex justify-center">
          <div className="inline-flex p-1 rounded-lg bg-muted">
            <button
              onClick={() => setActiveDay('day1')}
              className={cn(
                "px-5 py-2 text-sm font-medium rounded-md transition-all",
                activeDay === 'day1' 
                  ? "bg-white shadow-subtle text-davita-dark" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Day 1 - September 15
            </button>
            <button
              onClick={() => setActiveDay('day2')}
              className={cn(
                "px-5 py-2 text-sm font-medium rounded-md transition-all",
                activeDay === 'day2' 
                  ? "bg-white shadow-subtle text-davita-dark" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Day 2 - September 16
            </button>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {agendaData[activeDay].map((item, index) => (
              <div 
                key={index}
                className={cn(
                  "relative pl-8 group transition-all",
                  "before:absolute before:left-0 before:top-1.5 before:w-3 before:h-3 before:rounded-full before:border-2 before:border-davita-blue before:z-10",
                  index !== agendaData[activeDay].length - 1 && "pb-8 before:bg-white after:absolute after:left-1.5 after:top-3 after:bottom-0 after:w-px after:bg-davita-blue/20"
                )}
              >
                <div className={cn(
                  "bg-white border border-border rounded-lg p-6 transition-transform duration-300",
                  item.highlight ? "shadow-subtle border-davita-blue/10" : "",
                  "hover:shadow-glass hover:-translate-y-1"
                )}>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-davita-blue/80" />
                    <span className="text-sm font-medium text-davita-blue/80">{item.time}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-davita-dark">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                  
                  {item.highlight && (
                    <div className="mt-4 inline-flex items-center rounded-full bg-davita-green/10 px-2.5 py-0.5 text-xs font-medium text-davita-green">
                      Featured Session
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaTimeline;
