export default class Event {
    constructor(isLoggedIn, eventName, id, eventSchedule, participants, eventInfo, about) {
        this.isLoggedIn = isLoggedIn;
        this.eventName = eventName;
        this.id = id;
        this.eventSchedule = eventSchedule;
        this.participants = participants;
        this.eventInfo = eventInfo;
        this.about = about;
    }

}