
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
      time: '8:30 AM',
      title: 'Joel Introduction',
      description: 'Welcome by Lead Sponsor, setting the tone for the day. The sponsor shares their personal OKRs, + a relatable framework for achieving their person and company mission = creating a relatable foundation for the day\'s activities.',
      icon: <Presentation className="w-5 h-5" />,
      highlight: true
    },
    {
      time: '9:00 AM',
      title: 'Mini exercise to T-UP the afternoon',
      description: 'Option 1 - 5 Minute Memoirs & 6 word Bio. Attendees divide into groups of 4 or 5 with people they don\'t know. Each participant follows Henry David Thoreaux\'s process for clear communication.\n\nOption 2 - Charles Duhigg 35 week Best seller SuperCommunicators exercise. We think of a conversation as "one conversation" (social, practical and emotional) - if you are having different conversations, are you talking? Deep question: "When was the last time you cried in front of someone"',
      icon: <Users className="w-5 h-5" />,
      highlight: false
    },
    {
      time: '9:30 AM',
      title: 'Patient Speaker',
      description: 'Hear directly from a patient about their experience and the impact of our services on their life.',
      icon: <MessageSquare className="w-5 h-5" />,
      highlight: true
    },
    {
      time: '10:30 AM',
      title: 'Voices of Senior Leadership',
      description: 'Leadership panel sharing strategic vision, answering questions, and providing insights on organizational priorities and future direction.',
      icon: <Presentation className="w-5 h-5" />,
      highlight: false
    },
    {
      time: '12:30 PM',
      title: 'Lunch',
      description: 'Engineered tables, but no work. Enjoy networking with colleagues in a relaxed environment.',
      icon: <Utensils className="w-5 h-5" />,
      highlight: false
    },
    {
      time: '1:30 PM',
      title: 'BU AI Playbooks',
      description: 'Each BU (or individual) submits biggest challenges ahead of event (reduce hospitalizations). Each challenge is tackled at 1 of 3 AI levels. Each team produces an AI Playbook and Roadmap to solve the biggest challenge they are working on. Voting on winners.',
      icon: <Code className="w-5 h-5" />,
      highlight: true
    },
    {
      time: '3:30 PM',
      title: 'Report Outs',
      description: 'Winning teams share their learnings in rapid fire work to the group.',
      icon: <BarChart className="w-5 h-5" />,
      highlight: false
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
            Explore our carefully curated agenda designed to inform, inspire and connect our team.
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
                  <p className="text-muted-foreground whitespace-pre-line">{item.description}</p>
                  
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
