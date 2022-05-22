import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer';
import EventCard from './EventCard';
// let byDate = [];
// let byLocation = [];


const Events = () => {

    const [eventList, setEventList] = useState({});
    const [filterEvents, setFilterEvents] = useState("date");
    const [loading, setLoading] = useState(true);
    const handleOptionChange = (e) => {
        e.preventDefault();
        setFilterEvents(e.target.value);
    }
    const paramToStringAndToInt = (param) => {
        let helper = '';
        for (let i = 0; i < param.eventSchedule.eventStartTime.date.length; i++) {
            if (param.eventSchedule.eventStartTime.date[i] != '-') {
                helper = helper + param.eventSchedule.eventStartTime.date[i]
            }
        }
        // console.log(helper);
        // helper = helper.parseInt(helper);
        return helper;
    }

    useEffect(() => {
        let unmounted = false;
        async function getEvents() {
            const res = await axios(
                'http://localhost:8080/events',
            );
            if (!unmounted) {
                setEventList(res.data);
                // console.log(res.data.events);
                // if (filterEvents == "date") {
                //     byDate = res.data.events.sort((a, b) => paramToStringAndToInt(a) > paramToStringAndToInt(b) ? 1 : -1);
                //     setEventList(byDate);
                //     console.log(eventList);
                //     console.log(byDate);
                // }
                // if (filterEvents == "location") {
                //     byLocation = res.data.events.sort((a, b) => a.eventInfo.city > b.eventInfo.city ? 1 : -1);
                //     setEventList(byLocation);
                //     console.log(eventList);
                //     console.log(byLocation);
                // }
                setLoading(false);
            }
        }
        getEvents();
    }, [])

    if (eventList.events !== undefined) {
        return (
            <div>
                Sort events
                <select onChange={e => handleOptionChange(e)}>
                    <option defaultValue value={"date"}>By Starting date</option>
                    <option value={"location"}>By Location</option>
                </select>
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
                    )) }
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