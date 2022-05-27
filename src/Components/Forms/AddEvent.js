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
    const fields = [
        {
            className: 'addEvent_textField',
            type: "text",
            text: 'Event name',
            placeholder: "Event name",
            value: values.eventName,
            eventHandler: handleEventName
        },
        {
            className: 'addEvent_textField',
            type: "date",
            text: 'Start Date',
            placeholder: "Start Date",
            value: values.eventSchedule.eventStartTime.date,
            eventHandler: handleEventStartDate
        },
        {
            className: 'addEvent_textField',
            type: "time",
            text: 'Start Time',
            placeholder: "Start Time",
            value: values.eventSchedule.eventStartTime.time,
            eventHandler: handleEventStartTime
        },
        {
            className: 'addEvent_textField',
            type: "date",
            text: 'End Date',
            placeholder: "End Date",
            value: values.eventSchedule.eventEndTime.date,
            eventHandler: handleEventEndDate
        },
        {
            className: 'addEvent_textField',
            type: "time",
            text: 'End Time',
            placeholder: "End Time",
            value: values.eventSchedule.eventEndTime.time,
            eventHandler: handleEventEndTime
        },
        {
            className: 'addEvent_textField',
            type: "text",
            text: 'Event name',
            placeholder: "City",
            value: values.eventInfo.city,
            eventHandler: handleEventCity
        },
        {
            className: 'addEvent_textField',
            type: "text",
            text: 'Address',
            placeholder: "Address",
            value: values.eventInfo.address,
            eventHandler: handleEventAddress
        },
        {
            className: 'addEvent_textField',
            type: "text",
            text: 'www',
            placeholder: 'www',
            value: values.eventInfo.contactInfo.www,
            eventHandler: handleEventWww
        },
        {
            className: 'addEvent_textField',
            type: "text",
            text: "Phone",
            placeholder: "Phone",
            value: values.eventInfo.contactInfo.phone,
            eventHandler: handleEventPhone
        },
        {
            className: 'addEvent_textField',
            type: "text",
            text: "Email",
            placeholder: "Email",
            value: values.eventInfo.contactInfo.email,
            eventHandler: handleEventEmail
        },
        {
            className: 'addEvent_textField',
            type: "textfield",
            text: "About",
            placeholder: "About",
            value: values.about,
            eventHandler: handleEventAbout
        }

    ]



    return (
        <div className='wrapper'>
            <form className='addEvent_container'>
            {fields.map((item, index) => (  
                        <InputField
                            key={index}
                            className={item.className}
                            type={item.type}
                            text={item.text}
                            placeholder={item.placeholder}
                            value={item.value}
                            eventHandler={item.eventHandler}
                        />
                    )) }
                <Button
                    // className={'addEvent_submitButton'}
                    handleSubmit={handleEventSubmit}
                    text="Submit"
                    disabled={disabled}
                />
            </form>
            {/* <Footer /> */}
        </div>
    )
}

export default AddEvent