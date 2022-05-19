import React, { useState } from "react";
import AddEvent from './AddEvent';

const AddEventContainer = () => {
    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventLocation, setEventLocation] = useState("");

    const handleEventName = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        setEventName(event.target.value);
    };
    const handleEventDate = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        setEventDate(event.target.value);
    };
    const handleEventLocation = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        setEventLocation(event.target.value);
    };
    const handleEventSubmit = (event) => {
        event.preventDefault();
        alert("handleEventSubmit called");
    };
    return (
        <div>
            <AddEvent
            eventName={eventName}
            handleEventName={handleEventName}
            eventDate={eventDate}
            handleEventDate={handleEventDate}
            eventLocation={eventLocation}
            handleEventLocation={handleEventLocation}
            handleEventSubmit={handleEventSubmit}
            />
        </div>
    )
}

export default AddEventContainer