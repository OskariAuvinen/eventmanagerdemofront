import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer';
import EventCard from './EventCard';
import InputField from './Forms/InputField';
// let byDate = [];
// let byLocation = [];


const Events = () => {

    const [eventList, setEventList] = useState({});
    const [filterEvents, setFilterEvents] = useState("date");
    const [filter, setFilter] = useState("");
    const [loading, setLoading] = useState(true);

    const handleOptionChange = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        setFilter('');
        setFilterEvents(e.target.value);
    }
    
    const handleFilter = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        setFilter(e.target.value);
    }

    useEffect(() => {
        async function getEvents() {
            const res = await axios(
                'http://localhost:8080/events',
            );
            setEventList(res.data);
            setLoading(false);
        }
        getEvents();
    }, [])


    if (eventList.events !== undefined) {
        const filteredByName = eventList.events.filter(event => event.eventName.toLowerCase().substring(0, filter.length) === filter.toLowerCase());
        const filteredByLocationName = eventList.events.filter(event => event.eventInfo.city.toLowerCase().substring(0, filter.length) === filter.toLowerCase());
        //default filter -- filter newest first
        const filteredByDate = eventList.events.sort(function compare(a, b) {
            if (a.eventSchedule.eventStartTime.date < b.eventSchedule.eventStartTime.date) {
              return -1;
            }
            if (a.eventSchedule.eventStartTime.date > b.eventSchedule.eventStartTime.date) {
              return 1;
            }
            return 0;
          });
        //   console.log(filteredByDate);
        return (
            <div className=''>
                Sort events:
                <div>
                    <select onChange={e => handleOptionChange(e)}>
                        <option defaultValue value={"date"}>By Starting date</option>
                        <option value={"location"}>By Location</option>
                        <option value={"name"}>By Name</option>
                    </select>
                </div>
                {filterEvents === 'name' && (
                <div>
                <div>
                    <InputField
                        className={'addEvent_textField'}
                        type={"text"}
                        text={'Search by name'}
                        placeholder={'Search by name'}
                        value={filter}
                        eventHandler={handleFilter} />
                </div>
                <div className='eventCard__container'>
                    {filteredByName.map((event, index) => (
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
                </div> 
                )}
                {filterEvents === 'location' && (
                <div>
                <div>
                    <InputField
                        className={'addEvent_textField'}
                        type={"text"}
                        text={'Search by Location'}
                        placeholder={'Search by Location'}
                        value={filter}
                        eventHandler={handleFilter} />
                </div>
                <div className='eventCard__container'>
                    {filteredByLocationName.map((event, index) => (
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
                </div> 
                )}
                {filterEvents === 'date' && (
                <div>
                {/* <div>
                    <InputField
                        className={'addEvent_textField'}
                        type={"text"}
                        text={'Search by Location'}
                        placeholder={'Search by Location'}
                        value={filter}
                        eventHandler={handleFilter} />
                </div> */}
                <div className='eventCard__container'>
                    {filteredByDate.map((event, index) => (
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
                </div> 
                )}
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