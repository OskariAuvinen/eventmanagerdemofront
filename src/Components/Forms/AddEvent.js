import React from 'react';
import Footer from '../Footer';
import Button from './Button';
import InputField from './InputField';

const AddEvent = ({
    values,
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
    handleEventSubmit,
    disabled
}) => {
    return (
        <div className='container'>
            <form className='addEvent_container'>
                <InputField
                    className={'addEvent_textField'}
                    type="text"
                    text="Event name"
                    placeholder="Event name"
                    value={values.eventName}
                    eventHandler={handleEventName}
                />
                {/* event time: */}
                <InputField
                    className={'addEvent_datePicker'}
                    type="date"
                    text="Start Date"
                    placeholder="Start Date"
                    value={values.eventSchedule.eventStartTime.date}
                    eventHandler={handleEventStartDate}
                />
                <InputField
                    className={'addEvent_timePicker'}
                    type="time"
                    text="Start Time"
                    placeholder="Start Time"
                    value={values.eventSchedule.eventStartTime.time}
                    eventHandler={handleEventStartTime}
                />

                <InputField
                    className={'addEvent_datePicker'}
                    type="date"
                    text="End Date"
                    placeholder="End Date"
                    value={values.eventSchedule.eventEndTime.date}
                    eventHandler={handleEventEndDate}
                />
                <InputField
                    className={'addEvent_timePicker'}
                    type="time"
                    text="End Time"
                    placeholder="End Time"
                    value={values.eventSchedule.eventEndTime.time}
                    eventHandler={handleEventEndTime}
                />
                {/* eventInfo: */}
                <InputField
                    className={'addEvent_textField'}
                    type="text"
                    text="City"
                    placeholder="City"
                    value={values.eventInfo.city}
                    eventHandler={handleEventCity}
                />
                <InputField
                    className={'addEvent_textField'}
                    type="text"
                    text="Address"
                    placeholder="Address"
                    value={values.eventInfo.address}
                    eventHandler={handleEventAddress}
                />
                <InputField
                    className={'addEvent_textField'}
                    type="text"
                    text="www"
                    placeholder="www"
                    value={values.eventInfo.contactInfo.www}
                    eventHandler={handleEventWww}
                />
                <InputField
                    className={'addEvent_textField'}
                    type="text"
                    text="phone"
                    placeholder="phone"
                    value={values.eventInfo.contactInfo.phone}
                    eventHandler={handleEventPhone}
                />
                <InputField
                    className={'addEvent_textField'}
                    type="email"
                    text="email"
                    placeholder="email"
                    value={values.eventInfo.contactInfo.email}
                    eventHandler={handleEventEmail}
                />
                <InputField
                    className={'addEvent_textField'}
                    type="textfield"
                    text="about"
                    placeholder="about"
                    value={values.about}
                    eventHandler={handleEventAbout}
                />
                <Button
                    // className={'addEvent_submitButton'}
                    handleSubmit={handleEventSubmit}
                    text="Submit"
                    disabled={disabled}
                />
            </form>
            <Footer />
        </div>
    )
}

export default AddEvent