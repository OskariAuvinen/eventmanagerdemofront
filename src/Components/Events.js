import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer';
import EventCard from './EventCard';


const Events = () => {

    const [eventList, setEventList] = useState({});
    useEffect(() => {
        async function getEvents() {
            const res = await axios(
                'http://localhost:8080/events',
            );

            setEventList(res.data);
            console.log(res.data);
        }
        getEvents();
    }, [])
    if (eventList.events !== undefined) {
        return (
            <div>
                {/* <div>
                Events:
            </div>
            <br></br> */}
                <div className='eventCard__container'>
                    {eventList.events.map((event, index) => (
                        <EventCard
                            key={index}
                            eventName={event.eventName}
                            eventSchedule={event.eventSchedule}
                            eventInfo={event.eventInfo}
                            participants={event.participants}
                            about={event.about}
                        />
                    ))}
                </div>
                <Footer />
            </div>

        )
    }
    else {
        <div className='container'>
            <div>
                Events
            </div>
            <div>
                No set events yet
            </div>
            <Footer />
        </div>

    }
}

export default Events