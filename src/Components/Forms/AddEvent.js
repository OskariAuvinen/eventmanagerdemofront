import React from 'react';
import Footer from '../Footer';
import Button from './Button';
import InputField from './InputField';

const AddEvent = ({
    event,
    handleEventName,
    handleEventStartDate,
    handleEventStartTime,
    handleEventEndDate,
    handleEventEndTime,
    handleEventCity,
    handleEventAddress,
    handleEventWww,
    handleEventPhone,
    handleEventEmail,
    handleEventAbout,
    handleEventSubmit
}) => {
    return (
        <div className='container'>
            <form>
                <InputField
                    type="text"
                    text="Event name"
                    placeholder="Event name"
                    value={event.eventName}
                    eventHandler={handleEventName}
                />
                event time:
                <InputField
                    type="date"
                    text="Start Date"
                    placeholder="Start Date"
                    value={event.eventSchedule.eventStartTime.date}
                    eventHandler={handleEventStartDate}
                />
                <InputField
                    type="time"
                    text="Start Time"
                    placeholder="Start Time"
                    value={event.eventSchedule.eventStartTime.time}
                    eventHandler={handleEventStartTime}
                />
                
                <InputField
                    type="date"
                    text="End Date"
                    placeholder="End Date"
                    value={event.eventSchedule.eventEndTime.date}
                    eventHandler={handleEventEndDate}
                />
                <InputField
                    type="time"
                    text="End Time"
                    placeholder="End Time"
                    value={event.eventSchedule.eventEndTime.time}
                    eventHandler={handleEventEndTime}
                />
                eventInfo:
                <InputField
                    type="text"
                    text="City"
                    placeholder="City"
                    value={event.eventInfo.city}
                    eventHandler={handleEventCity}
                />
                <InputField
                    type="text"
                    text="Address"
                    placeholder="Address"
                    value={event.eventInfo.address}
                    eventHandler={handleEventAddress}
                />
                <InputField
                    type="text"
                    text="www"
                    placeholder="www"
                    value={event.eventInfo.contactInfo.www}
                    eventHandler={handleEventWww}
                />
                <InputField
                    type="text"
                    text="phone"
                    placeholder="phone"
                    value={event.eventInfo.contactInfo.phone}
                    eventHandler={handleEventPhone}
                />
                <InputField
                    type="email"
                    text="email"
                    placeholder="email"
                    value={event.eventInfo.contactInfo.email}
                    eventHandler={handleEventEmail}
                />
                <InputField
                    type="textfield"
                    text="about"
                    placeholder="about"
                    value={event.about}
                    eventHandler={handleEventAbout}
                />
                <Button
                    handleSubmit={handleEventSubmit}
                    text="Submit"
                />
            </form>
            <Footer />
        </div>
    )
}

export default AddEvent