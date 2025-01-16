import { format } from 'date-fns';
import Event from './event';
import { FC } from 'react';

interface EventType {
  id: string;
  slug: string;
  title: string;
  desc?: string;
  leader: string;
  avatar: string;
  start: string | Date;
  end: string | Date;
  cal?: string;
}

interface EventsGridProps {
  month: string;
  events: EventType[];
}

const EventsGrid: FC<EventsGridProps> = ({ month, events }) => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-blue-600 px-3 mt-8 md:mt-12">
      {format(new Date(`${month}-02`), 'MMMM yyyy')}
    </h2>
    
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1px] bg-gray-100 rounded-xl overflow-hidden shadow-lg mb-8 md:mb-12 lg:mb-16">
      {events.map(event => (
        <Event {...event} key={event.id} />
      ))}
    </div>
  </div>
);

export default EventsGrid;