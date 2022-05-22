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
                eventName: payload,
            };
        case EVENT_ID:
            return {
                ...state,
                id: payload,
            };
        case EVENT_START_DATE:
            return {
                ...state,
                eventSchedule: {
                    ...state.eventSchedule,
                    eventStartTime: {
                        ...state.eventSchedule.eventStartTime,
                        date: payload
                    }
                }
            };
        case EVENT_START_TIME:
            return {
                ...state,
                eventSchedule: {
                    ...state.eventSchedule,
                    eventStartTime: {
                        ...state.eventSchedule.eventStartTime,
                        date: payload
                    }
                }
            }
        case EVENT_END_DATE:
            return {
                ...state,
                eventSchedule: {
                    ...state.eventSchedule,
                    eventEndTime: {
                        ...state.eventSchedule.eventEndTime,
                        date: payload
                    }
                }
            }
        case EVENT_END_TIME:
            return {
                ...state,
                eventSchedule: {
                    ...state.eventSchedule,
                    eventEndTime: {
                        ...state.eventSchedule.eventEndTime,
                        date: payload
                    }
                }
            }
        case EVENT_CITY:
            return {
                ...state,
                eventInfo: {
                    ...state.eventInfo,
                    city: payload
                }
            }
        case EVENT_ADDRESS:
            return {
                ...state,
                eventInfo: {
                    ...state.eventInfo,
                    city: payload
                }
            }
        case EVENT_WWW:
            return {
                ...state,
                eventInfo: {
                    ...state.eventInfo,
                    contactInfo: {
                        ...state.eventInfo.contactInfo,
                        www: payload
                    }
                }
            }
        case EVENT_PHONE:
            return {
                ...state,
                eventInfo: {
                    ...state.eventInfo,
                    contactInfo: {
                        ...state.eventInfo.contactInfo,
                        phone: payload
                    }
                }
            }
        case EVENT_EMAIL:
            return {
                ...state,
                eventInfo: {
                    ...state.eventInfo,
                    contactInfo: {
                        ...state.eventInfo.contactInfo,
                        email: payload
                    }
                }
            }
        case EVENT_ABOUT:
        return {
            ...state,
            about: payload
        };
        default:
            return state;
    }
}