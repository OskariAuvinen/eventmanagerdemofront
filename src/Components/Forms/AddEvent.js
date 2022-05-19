import React from 'react';
import Footer from '../Footer';
import Button from './Button';
import InputField from './InputField';

const AddEvent = ({
    eventName,
    handleEventName,
    eventDate,
    handleEventDate,
    eventLocation,
    handleEventLocation,
    handleEventSubmit
}) => {
    return (
        <div className='container'>
            <form>
                <InputField
                    type="text"
                    text="Event name"
                    placeholder="Event name"
                    value={eventName}
                    eventHandler={handleEventName}
                />
                <InputField
                    type="date"
                    text="Event date"
                    placeholder="Event date"
                    value={eventDate}
                    eventHandler={handleEventDate}
                />
                <InputField
                    type="text"
                    text="Location"
                    placeholder="Location"
                    value={eventLocation}
                    eventHandler={handleEventLocation}
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