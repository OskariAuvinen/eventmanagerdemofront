import { 
EVENT_NAME,
EVENT_ID,
EVENT_START_DATE,
EVENT_START_TIME,
EVENT_END_DATE,
EVENT_END_TIME,
EVENT_CITY,
EVENT_ADDRESS,
EVENT_WWW,
EVENT_PHONE,
EVENT_EMAIL,
EVENT_ABOUT,
 } from "./types";
export const setName = (eventName) =>  ({
  type: EVENT_NAME,
  payload: eventName,
});
export const setEventId = (id) => ({
    type: EVENT_ID,
    payload: id,
});
export const setStartDate = (date) => ({
    type: EVENT_START_DATE,
    payload: date,
});
export const setStartTime = (time) => ({
    type: EVENT_START_TIME,
    payload: time,
})
export const setEndDate = (date) => ({
    type: EVENT_END_DATE,
    payload: date,
})
export const setEndTime = (time) => ({
    type: EVENT_END_TIME,
    payload: time,
})
export const setCity = (city) => ({
    type: EVENT_CITY,
    payload: city,
})
export const setAddress = (address) => ({
    type: EVENT_ADDRESS,
    payload: address,
})
export const setWww = (www) => ({
    type: EVENT_WWW,
    payload: www,
}) 
export const setPhone = (phone) => ({
    type: EVENT_PHONE,
    payload: phone,
})
export const setEmail = (email) => ({
    type: EVENT_EMAIL,
    payload: email,
})
export const setAbout = (about) => ({
    type: EVENT_ABOUT,
    payload: about,
})