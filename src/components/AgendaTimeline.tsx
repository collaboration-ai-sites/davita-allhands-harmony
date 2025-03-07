
import { Clock, Users, Presentation, Coffee, Utensils, MessageSquare, Code, BarChart, Lightbulb } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type Day = 'day1';

const objectives = [
  {
    title: "Building Deeper Connections",
    description: "Create meaningful relationships among attendees through structured networking and collaborative activities."
  },
  {
    title: "Clarity on DaVita's Mission",
    description: "Understand how our product team directly supports and advances DaVita's core mission and values."
  },
  {
    title: "Introduction to Practical AI Solutions",
    description: "Explore real-world AI applications that solve tangible business challenges within our organization."
  },
  {
    title: "Actionable Outputs",
    description: "Leave with next-step playbooks, real-time solutions, and implementation strategies you can apply immediately."
  },
  {
    title: "Key Points from Leadership",
    description: "Gain insights directly from company leadership on strategic direction and organizational priorities."
  }
];

const agendaData = {
  day1: [
    {
      time: '8:00 AM - 9:00 AM',
      title: 'Registration & Breakfast',
      description: 'Check-in at the Salt Lake City Convention Center, receive your conference materials, and enjoy a complimentary breakfast while networking with fellow AI professionals.',
      icon: <Coffee className="w-5 h-5" />,
      highlight: false
    },
    {
      time: '9:00 AM - 10:30 AM',
      title: 'Opening Keynote: The Future of ConvergeAI',
      description: 'Our CEO presents an inspiring vision for the future of ConvergeAI and how our technologies are transforming industries through advanced machine learning and artificial intelligence solutions.',
      icon: <Presentation className="w-5 h-5" />,
      highlight: true
    },
    {
      time: '10:45 AM - 12:15 PM',
      title: 'Technical Deep Dive: New Model Architecture',
      description: 'Our Chief AI Scientist presents the breakthroughs in our proprietary large language model architecture and how it achieves unprecedented performance across multiple domains.',
      icon: <Code className="w-5 h-5" />,
      highlight: false
    },
    {
      time: '12:15 PM - 1:30 PM',
      title: 'Networking Lunch',
      description: 'Enjoy a gourmet lunch featuring local Utah cuisine while connecting with colleagues from across the company and discussing the morning\'s presentations.',
      icon: <Utensils className="w-5 h-5" />,
      highlight: false
    },
    {
      time: '1:30 PM - 3:00 PM',
      title: 'Breakout Sessions',
      description: 'Choose from specialized tracks on generative AI applications, responsible AI development, and integration strategies for enterprise systems.',
      icon: <Users className="w-5 h-5" />,
      highlight: false
    },
    {
      time: '3:15 PM - 4:15 PM',
      title: 'ConvergeAI Platform Roadmap',
      description: 'Our Product Team presents the upcoming features and improvements to the ConvergeAI platform, including new API capabilities and enhanced model customization options.',
      icon: <Lightbulb className="w-5 h-5" />,
      highlight: true
    },
    {
      time: '4:30 PM - 5:30 PM',
      title: 'AI Market Trends & Competitive Analysis',
      description: 'Our Market Intelligence team shares insights on industry trends, competitive landscape, and strategic opportunities for ConvergeAI in the rapidly evolving AI space.',
      icon: <BarChart className="w-5 h-5" />,
      highlight: false
    },
    {
      time: '6:00 PM - 8:00 PM',
      title: 'Evening Reception',
      description: 'Join us for an elegant reception at the SkyDeck rooftop lounge with panoramic views of Salt Lake City, featuring local cuisine, specialty cocktails, and live entertainment.',
      icon: <Users className="w-5 h-5" />,
      highlight: true
    }
  ]
};

const AgendaTimeline = () => {
  const [activeDay, setActiveDay] = useState<Day>('day1');

  return (
    <section id="agenda" className="py-24 bg-white relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-40 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"></div>
        <div className="absolute bottom-40 -left-40 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-700 mb-6">
            Conference Objectives
          </span>
          <h2 className="font-display text-4xl font-bold text-gray-800 mb-4">
            Our Summit Goals
          </h2>
          <p className="text-muted-foreground mb-8">
            We've designed this summit with clear objectives to ensure every attendee gains maximum value.
          </p>
          
          {/* Objectives Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 text-left max-w-5xl mx-auto">
            {objectives.map((objective, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-subtle border border-purple-100 hover:shadow-glass transition-all">
                <h3 className="font-medium text-lg text-gray-800 mb-2">{objective.title}</h3>
                <p className="text-sm text-muted-foreground">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mb-16 max-w-2xl mx-auto mt-20">
          <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-700 mb-6">
            Conference Schedule
          </span>
          <h2 className="font-display text-4xl font-bold text-gray-800 mb-4">
            A Full Day of Innovation and Collaboration
          </h2>
          <p className="text-muted-foreground">
            Explore our carefully curated agenda designed to inform, inspire and connect our ConvergeAI community.
          </p>
        </div>
        
        <div className="mb-10 flex justify-center">
          <div className="inline-flex p-1 rounded-lg bg-muted">
            <button
              className="px-5 py-2 text-sm font-medium rounded-md transition-all bg-white shadow-subtle text-purple-700"
            >
              July 23 - Salt Lake City
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
                  "before:absolute before:left-0 before:top-1.5 before:w-3 before:h-3 before:rounded-full before:border-2 before:border-cyan-500 before:z-10",
                  index !== agendaData[activeDay].length - 1 && "pb-8 before:bg-white after:absolute after:left-1.5 after:top-3 after:bottom-0 after:w-px after:bg-cyan-500/20"
                )}
              >
                <div className={cn(
                  "bg-white border border-border rounded-lg p-6 transition-transform duration-300",
                  item.highlight ? "shadow-subtle border-purple-500/10" : "",
                  "hover:shadow-glass hover:-translate-y-1"
                )}>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-cyan-500" />
                    <span className="text-sm font-medium text-cyan-700">{item.time}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                  
                  {item.highlight && (
                    <div className="mt-4 inline-flex items-center rounded-full bg-purple-500/10 px-2.5 py-0.5 text-xs font-medium text-purple-600">
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
