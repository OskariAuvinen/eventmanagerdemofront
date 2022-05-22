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
    EVENT_ABOUT
} from "../Actions/types";
import initialState from "../initialState";
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case EVENT_NAME:
            return {
                ...state,
                eventName: payload.eventName,
            };
        case EVENT_ID:
            return {
                ...state,
                id: payload.id,
            };
        case EVENT_START_DATE:
            return {
                ...state,
                eventSchedule: {
                    ...state.eventSchedule,
                    eventStartTime: {
                        ...state.eventStartTime,
                        date: payload.date
                    }
                }
            };
        case EVENT_START_TIME:
            return {
                ...state,
                eventSchedule: {
                    ...state.eventSchedule,
                    eventStartTime: {
                        ...state.eventStartTime,
                        date: payload.time
                    }
                }
            }
        case EVENT_END_DATE:
            return {
                ...state,
                eventSchedule: {
                    ...state.eventSchedule,
                    eventEndTime: {
                        ...state.eventEndTime,
                        date: payload.date
                    }
                }
            }
        case EVENT_END_TIME:
            return {
                ...state,
                eventSchedule: {
                    ...state.eventSchedule,
                    eventEndTime: {
                        ...state.eventEndTime,
                        date: payload.time
                    }
                }
            }
        case EVENT_CITY:
            return {
                ...state,
                eventInfo: {
                    ...state.eventInfo,
                    city: payload.city
                }
            }
        case EVENT_ADDRESS:
            return {
                ...state,
                eventInfo: {
                    ...state.eventInfo,
                    city: payload.address
                }
            }
        case EVENT_WWW:
            return {
                ...state,
                eventInfo: {
                    ...state.eventInfo,
                    contactInfo: {
                        ...state.contactInfo,
                        www: payload.www
                    }
                }
            }
        case EVENT_PHONE:
            return {
                ...state,
                eventInfo: {
                    ...state.eventInfo,
                    contactInfo: {
                        ...state.contactInfo,
                        phone: payload.phone
                    }
                }
            }
        case EVENT_EMAIL:
            return {
                ...state,
                eventInfo: {
                    ...state.eventInfo,
                    contactInfo: {
                        ...state.contactInfo,
                        email: payload.email
                    }
                }
            }
        case EVENT_ABOUT:
        return {
            ...state,
            about: payload.about,
        };
        default:
            return state;
    }
}