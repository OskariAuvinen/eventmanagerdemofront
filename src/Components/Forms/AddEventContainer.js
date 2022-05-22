import React, { useState } from "react";
import store from '../../store';
import AddEvent from './AddEvent';
import postEvent from '../../Services/post-event';
// import initialState from '../../initialState';
import {
    setName,
    // setEventId,
    setStartDate,
    setStartTime,
    setEndDate,
    setEndTime,
    setCity,
    setAddress,
    setWww,
    setPhone,
    setEmail,
    setAbout
} from '../../Actions/eventactions';

const AddEventContainer = ({ }) => {

    const defaultValues = {
        eventName: '',
        id: '',
        eventSchedule: {
            eventStartTime: {
                date: '',
                time: ''
            },
            eventEndTime: {
                date: '',
                time: ''
            }
        },
        participants: [
            {
                name: '',
                status: ''
            },],
        eventInfo: {
            city: '',
            address: '',
            contactInfo: {
                www: '',
                phone: '',
                email: ''
            }
        },
        about: ''
    }

    const [event, setEvent] = useState(defaultValues);
    const [loading, setLoading] = useState(true);

    const handleEventName = (e) => {
        e.preventDefault();
        setEvent(prevState => ({
            ...prevState,
            eventName: e.target.value
        }));
        // console.log(setName(e.target.value));
        store.dispatch(setName(e.target.value));
        // console.log(store.getState());
    }
    const handleEventStartDate = (e) => {
        e.preventDefault();
        setEvent(prevState => ({
            ...prevState,
            eventSchedule: {
                ...prevState.eventSchedule,
                eventStartTime: {
                    ...prevState.eventSchedule.eventStartTime,
                    date: e.target.value
                }
            }
        }));
        store.dispatch(setStartDate(e.target.value));
    }
    const handleEventStartTime = (e) => {
        e.preventDefault();
        setEvent(prevState => ({
            ...prevState,
            eventSchedule: {
                ...prevState.eventSchedule,
                eventStartTime: {
                    ...prevState.eventSchedule.eventStartTime,
                    time: e.target.value
                }
            }
        }));
        store.dispatch(setStartTime(e.target.value));
    }
    const handleEventEndDate = (e) => {
        e.preventDefault();
        setEvent(prevState => ({
            ...prevState,
            eventSchedule: {
                ...prevState.eventSchedule,
                eventEndTime: {
                    ...prevState.eventSchedule.eventEndTime,
                    date: e.target.value
                }
            }
        }));
        store.dispatch(setEndDate(e.target.value));
    }
    const handleEventEndTime = (e) => {
        e.preventDefault();
        setEvent(prevState => ({
            ...prevState,
            eventSchedule: {
                ...prevState.eventSchedule,
                eventEndTime: {
                    ...prevState.eventSchedule.eventEndTime,
                    time: e.target.value
                }
            }
        }));
        store.dispatch(setEndTime(e.target.value));
    }

    const handleEventCity = (e) => {
        e.preventDefault();
        setEvent(prevState => ({
            ...prevState,
            eventInfo: {
                ...prevState.eventInfo,
                city: e.target.value
            }
        }));
        store.dispatch(setCity(e.target.value));
    }
    const handleEventAddress = (e) => {
        e.preventDefault();
        setEvent(prevState => ({
            ...prevState,
            eventInfo: {
                ...prevState.eventInfo,
                address: e.target.value
            }
        }));
        store.dispatch(setAddress(e.target.value));
    }
    const handleEventWww = (e) => {
        e.preventDefault();
        setEvent(prevState => ({
            ...prevState,
            eventInfo: {
                ...prevState.eventInfo,
                contactInfo: {
                    ...prevState.eventInfo.contactInfo,
                    www: e.target.value
                }
            }
        }));
        store.dispatch(setWww(e.target.value));
    }
    const handleEventPhone = (e) => {
        e.preventDefault();
        setEvent(prevState => ({
            ...prevState,
            eventInfo: {
                ...prevState.eventInfo,
                contactInfo: {
                    ...prevState.eventInfo.contactInfo,
                    phone: e.target.value
                }
            }
        }));
        store.dispatch(setPhone(e.target.value));
    }
    const handleEventEmail = (e) => {
        e.preventDefault();
        setEvent(prevState => ({
            ...prevState,
            eventInfo: {
                ...prevState.eventInfo,
                contactInfo: {
                    ...prevState.eventInfo.contactInfo,
                    email: e.target.value
                }
            }
        }));
        store.dispatch(setEmail(e.target.value));
    }
    const handleEventAbout = (e) => {
        e.preventDefault();
        setEvent(prevState => ({
            ...prevState,
            about: e.target.value
        }));
        store.dispatch(setAbout(e.target.value));
        console.log(store.getState());
    }
    const handleEventSubmit = (e) => {
        e.preventDefault();
        alert("handleEventSubmit called")
        const object = store.getState().event;
        console.log(object);
        postEvent(object);
    };

    return (
        <div>
            <AddEvent
                values={event}
                handleEventName={handleEventName}
                handleEventStartDate={handleEventStartDate}
                handleEventStartTime={handleEventStartTime}
                handleEventEndDate={handleEventEndDate}
                handleEventEndTime={handleEventEndTime}
                handleEventCity={handleEventCity}
                handleEventAddress={handleEventAddress}
                handleEventWww={handleEventWww}
                handleEventPhone={handleEventPhone}
                handleEventEmail={handleEventEmail}
                handleEventAbout={handleEventAbout}
                handleEventSubmit={handleEventSubmit}
                // disabled={loading}
            />
        </div>
    )
}

export default AddEventContainer