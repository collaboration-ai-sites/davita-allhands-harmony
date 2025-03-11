import { Clock, Users, Presentation, Coffee, Utensils, MessageSquare, Code, BarChart, Lightbulb } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
type Day = 'day1';
const objectives = [{
  title: "Aligning with 2030 Ambitions",
  description: "Connect DaVita’s mission with future strategic goals and the 2030 Ambition Areas."
}, {
  title: "Deepening Connections",
  description: "Build meaningful relationships through structured networking and collaborative storytelling."
}, {
  title: "Empowering with AI",
  description: "Experience AI-enabled design sessions that transform ideas into actionable playbooks."
}, {
  title: "Leadership Insights",
  description: "Hear directly from leaders on strategic priorities and how each function drives the 2030 Ambitions."
}, {
  title: "Innovative Ideation",
  description: "Engage in breakout sessions to craft tangible strategies and next steps for a brighter future."
}];
const agendaData = {
  day1: [{
    time: '07:30 AM',
    title: 'Breakfast & Informal Networking',
    description: 'A relaxed start to help participants settle in and connect organically.',
    icon: <Coffee className="w-5 h-5" />,
    highlight: false
  }, {
    time: '08:30 AM',
    title: 'Introduction & Scene Setting',
    description: `Led by Joel (“High Energy”) & Elise.
Focus:
- Connecting DaVita’s overall mission with the 2030 Ambitions.
- Outlining how the day will unfold with a future vision.
- Highlighting key areas such as reducing hospitalizations, home therapies, disease adjacency, and technology innovation.`,
    icon: <Presentation className="w-5 h-5" />,
    highlight: true
  }, {
    time: '08:50 AM',
    title: 'Relationship Maker (“Super Communicator”)',
    description: `Purpose: Build deeper connections and trust among participants.
Format: Small groups of 4 with pre-engineered seating for diversity.
Instructions:
- Each person shares a brief (2–3 minute) personal story connecting them to DaVita’s mission or a 2030 Ambition.
- Emphasize vulnerability and authenticity.
Real-Time Feedback Loop: Participants submit “aha” moments via a digital form; AI aggregates common insights.`,
    icon: <Users className="w-5 h-5" />,
    highlight: true
  }, {
    time: '09:30 AM',
    title: 'Patient Speaker',
    description: `Focus: Real-time motivation and human connection.
Process:
- A patient shares a compelling personal journey, emphasizing the impact of DaVita’s care.
- Q&A + “Real-Time Love”: Participants submit notes of appreciation or questions via a digital form.
Feedback Loop: Insights are collected and AI highlights 2–3 universal inspiration points.`,
    icon: <MessageSquare className="w-5 h-5" />,
    highlight: true
  }, {
    time: '10:15 AM',
    title: 'Leadership Voices',
    description: `Speakers: Leaders from Product, Technology, Strategy, and Operations.
Purpose:
- Showcase how each function is driving the 2030 Ambitions.
- Clarify strategic priorities and major initiatives.
Format:
- Each leader presents for ~15 minutes with a rapid-fire Q&A.
- AI aggregates questions and facilitates a lightning round.`,
    icon: <Lightbulb className="w-5 h-5" />,
    highlight: true
  }, {
    time: '12:00 PM',
    title: 'Non-Working Lunch',
    description: `Purpose: Give participants a break to process the morning’s insights.
Optional Activity: Use table cards for writing encouraging notes or personal reflections.`,
    icon: <Utensils className="w-5 h-5" />,
    highlight: false
  }, {
    time: '01:00 PM',
    title: 'Introduction to Afternoon Design Topics',
    description: `Facilitators: Joel/Elise + AI Support Team.
Purpose: Transition from morning inspiration to practical ideation.
Theme: “2030 Ambitions in Action” – setting the stage for breakout sessions on AI prompting and strategic progress.`,
    icon: <Code className="w-5 h-5" />,
    highlight: true
  }, {
    time: '01:15 PM',
    title: 'Breakout Groups: AI-Enabled Design',
    description: `Structure: Participants join Ambition-based groups (e.g., reducing hospitalizations, home therapies, etc.) with diverse roles.
Process:
- Quick “Prompting 101” if needed.
- Scenario: “Imagine it’s June 25, 2026—DaVita has achieved major breakthroughs.”
- Teams brainstorm, research with AI, and draft a “mini playbook” outlining key milestones and next steps.`,
    icon: <Code className="w-5 h-5" />,
    highlight: true
  }, {
    time: '02:45 PM',
    title: 'Playback & Group Reporting',
    description: `Format: 3–5 minute share-outs from each breakout group.
Focus:
- Biggest “aha” moments from AI research.
- Key next steps or resources needed.
- How insights tie back to the morning sessions.
Digital submissions are aggregated by AI for group review.`,
    icon: <BarChart className="w-5 h-5" />,
    highlight: false
  }, {
    time: '03:15 PM',
    title: 'Short Break',
    description: 'A 15-minute recharge before the final synthesis.',
    icon: <Coffee className="w-5 h-5" />,
    highlight: false
  }, {
    time: '03:30 PM',
    title: 'AI-Assisted Closure',
    description: `Purpose: Real-time synthesis of the day’s findings.
Process:
- AI displays top-level themes from breakout outputs.
- Facilitated discussion on integrating insights into next steps.
- Commitment Statements: Participants share one key action or insight.`,
    icon: <Lightbulb className="w-5 h-5" />,
    highlight: true
  }, {
    time: '05:00 PM',
    title: 'Cocktail Hour & Voice of Honor',
    description: `Purpose: Celebrate the day’s work and foster continued connection.
Optional “Open Mic”: Share personal stories or shout-outs to individuals/teams making a difference.`,
    icon: <Coffee className="w-5 h-5" />,
    highlight: false
  }, {
    time: '08:00 PM',
    title: 'Club DaVita (Evening Social)',
    description: `Purpose: Provide a fun, informal atmosphere to strengthen relationships and close the day on a high note.`,
    icon: <Coffee className="w-5 h-5" />,
    highlight: false
  }]
};
const AgendaTimeline = () => {
  const [activeDay, setActiveDay] = useState<Day>('day1');
  return <section id="agenda" className="py-24 bg-white relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-40 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"></div>
        <div className="absolute bottom-40 -left-40 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-700 mb-6">
            Summit Objectives
          </span>
          <h2 className="font-display text-4xl font-bold text-gray-800 mb-4">
            2030 Ambition Summit Goals
          </h2>
          <p className="text-muted-foreground mb-8">
            We’ve designed this summit with clear objectives to ensure every attendee gains maximum value.
          </p>
          
          {/* Objectives Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 text-left max-w-5xl mx-auto">
            {objectives.map((objective, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-subtle border border-purple-100 hover:shadow-glass transition-all">
                <h3 className="font-medium text-lg text-gray-800 mb-2">{objective.title}</h3>
                <p className="text-sm text-muted-foreground">{objective.description}</p>
              </div>)}
          </div>
        </div>
        
        <div className="text-center mb-16 max-w-2xl mx-auto mt-20">
          <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-700 mb-6">
            Summit Schedule
          </span>
          <h2 className="font-display text-4xl font-bold text-gray-800 mb-4">
            A Day of Ambition, AI, and Innovation
          </h2>
          <p className="text-muted-foreground">
            Explore our full-day agenda designed to inspire, connect, and empower every participant.
          </p>
        </div>
        
        <div className="mb-10 flex justify-center">
          <div className="inline-flex p-1 rounded-lg bg-muted">
            <button className="px-5 py-2 text-sm font-medium rounded-md transition-all bg-white shadow-subtle text-purple-700">July 23 - San Deigo</button>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {agendaData[activeDay].map((item, index) => <div key={index} className={cn("relative pl-8 group transition-all", "before:absolute before:left-0 before:top-1.5 before:w-3 before:h-3 before:rounded-full before:border-2 before:border-cyan-500 before:z-10", index !== agendaData[activeDay].length - 1 && "pb-8 before:bg-white after:absolute after:left-1.5 after:top-3 after:bottom-0 after:w-px after:bg-cyan-500/20")}>
                <div className={cn("bg-white border border-border rounded-lg p-6 transition-transform duration-300", item.highlight ? "shadow-subtle border-purple-500/10" : "", "hover:shadow-glass hover:-translate-y-1")}>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-cyan-500" />
                    <span className="text-sm font-medium text-cyan-700">{item.time}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-muted-foreground whitespace-pre-line">{item.description}</p>
                  
                  {item.highlight && <div className="mt-4 inline-flex items-center rounded-full bg-purple-500/10 px-2.5 py-0.5 text-xs font-medium text-purple-600">
                      Featured Session
                    </div>}
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AgendaTimeline;