import React, { useReducer } from "react";
import AddEvent from './AddEvent';
import initialState from '../../initialState'
import reducer from '../../Reducers/event'
import {
    setName,
    setEventId,
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

const AddEventContainer = ( { } ) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleEventName = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        dispatch(setName(e.target.value));
    }
    const handleEventStartDate = (e) => {
        e.preventDefault();
        dispatch(setStartDate(e.target.value));
    }
    const handleEventStartTime = (e) => {
        e.preventDefault();
        dispatch(setStartTime(e.target.value));
    }
    const handleEventEndDate = (e) => {
        e.preventDefault();
        dispatch(setEndDate(e.target.value));
    }
    const handleEventEndTime = (e) => {
        e.preventDefault();
        dispatch(setEndTime(e.target.value))
    }
   
    const handleEventCity = (e) => {
        e.preventDefault();
        dispatch(setCity(e.target.value));
    }
    const handleEventSubmit = (e) => {
        e.preventDefault();
        alert("handleEventSubmit called");
    };
    const handleEventAddress = (e) => {
        e.preventDefault();
        dispatch(setAddress(e.target.value));
    }
    const handleEventWww = (e) => {
        e.preventDefault();
        dispatch(setWww(e.target.value));
    }
    const handleEventPhone = (e) => {
        e.preventDefault();
        dispatch(setPhone(e.target.value));
    }
    const handleEventEmail = (e) => {
        e.preventDefault();
        dispatch(setEmail(e.target.value));
    }
    const handleEventAbout = (e) => {
        e.preventDefault();
        dispatch(setAbout(e.target.value));
    }
    // eventName={eventName}
    // handleEventName={handleEventName}
    // eventDate={eventDate}
    // handleEventDate={handleEventDate}
    // eventLocation={eventLocation}
    // handleEventLocation={handleEventLocation}
    return (
        <div>
            <AddEvent
            event={state}
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
            />
        </div>
    )
}

export default AddEventContainer