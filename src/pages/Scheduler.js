import React, { useRef, useEffect, useState } from 'react';
import Calendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const Scheduler = () => {
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [selectedStart, setSelectedStart] = useState('');
  const [selectedEnd, setSelectedEnd] = useState('');
  const [isAddingEvent, setIsAddingEvent] = useState(false);

  useEffect(() => {
    if (calendarRef.current) {
      calendarRef.current.getApi().render();
    }

    // Load events from local storage on component mount
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  useEffect(() => {
    // Store events in local storage whenever the events state changes
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const handleDateClick = (info) => {
    if (!isAddingEvent) {
      setIsAddingEvent(true);
      setSelectedStart(info.dateStr);
      setSelectedEnd(info.dateStr);
    }
  };

  const handleAddEvent = () => {
    if (selectedStart && selectedEnd) {
      const calendarApi = calendarRef.current.getApi();
      const title = prompt('Event Title:');

      if (title) {
        const newEvent = {
          title,
          start: selectedStart,
          end: selectedEnd,
          allDay: false,
          id: String(new Date().getTime()), // Assign a unique ID
        };

        // Add the new event to the events array
        setEvents([...events, newEvent]);

        // Add the new event to the calendar
        calendarApi.addEvent(newEvent);

        setIsAddingEvent(false);
        setSelectedStart('');
        setSelectedEnd('');
      }
    }
  };

  return (
    <div className="h-full p-4 bg-background">
       <div className="flex">
        <div className="w-3/4 pr-4 bg-white">
          <Calendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            editable={true}
            selectable={true}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            events={events}
            eventResizableFromStart={true}
            dateClick={handleDateClick}
          />
        </div>
        <div className="w-1/4">
          <div className=" p-4">
            <h2 className="text-xl bg-gray-300 p-2 font-semibold mb-2">Event Checklist</h2>
            <ul>
              {events.map((event) => (
                <li key={event.id} className='pb-4 shadow-sm text-left'>{`${event.title} - Start: ${event.start}, End: ${event.end}`}</li>
              ))}
            </ul>
            {isAddingEvent && (
              <div>
                <p className="font-semibold mt-4">Add Task with Start and End Times:</p>
                <label htmlFor="start-time">Start Time:</label>
                <input
                  type="datetime-local"
                  id="start-time"
                  value={selectedStart}
                  onChange={(e) => setSelectedStart(e.target.value)}
                />
                <label htmlFor="end-time">End Time:</label>
                <input
                  type="datetime-local"
                  id="end-time"
                  value={selectedEnd}
                  onChange={(e) => setSelectedEnd(e.target.value)}
                />
                <button className="mt-2 bg-blue-500 text-white px-2 py-1 rounded" onClick={handleAddEvent}>
                  Add Task
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
