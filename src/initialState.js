const initialState = {
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
export default initialState;