const EventCard = ({
    isLoggedIn,
    eventName,
    eventSchedule,
    eventInfo,
    participants,
    about
}) => {

    return (
        <div className="eventCard__card__container animated animatedFadeInUp fadeInUp">
            {/* <div className="eventCard__image__container">
                <img src="./images/img1.jpg" alt="Event image"></img>
            </div> */}

            <div className="eventCard__body__container">
                <div className="eventCard__overlay"></div>

                <div className="eventCard__event__info">
                    <p className="eventCard__title">{eventName}</p>
                    <div className="eventCard__separator"></div>
                    <p className="eventCard__address">{eventInfo.address}</p>
                    <p className="eventCard__city">{eventInfo.city}</p>

                    <div className="eventCard__additional-info">
                        <p className="eventCard__info">
                            <i className="fas fa-map-marker-alt"></i>
                            at: {eventSchedule.eventStartTime.date} {eventSchedule.eventStartTime.time}
                        </p>
                        <p className="eventCard__info">
                            <i className="fas fa-map-marker-alt"></i>
                            untill: {eventSchedule.eventEndTime.date} {eventSchedule.eventEndTime.time}
                        </p>
                        {isLoggedIn ? (
                            <p className="eventCard__info">
                                <i className="far fa-calendar-alt"></i>
                                {participants.map(participant => (
                                    `${participant.name} - ${participant.status} `
                                ))}
                            </p>
                        ) : (<p className="eventCard__info">
                            <i className="far fa-calendar-alt"></i>
                        </p>)}

                        <p className="eventCard__about">
                            {about}
                            {/* <a href={eventInfo.contactInfo.www} target="_blank"> more...</a> */}
                        </p>
                        {eventInfo.contactInfo.www ? (<p className="eventCard__info"><a href={eventInfo.contactInfo.www} target="_blank" rel="noreferrer">{eventInfo.contactInfo.www}</a></p>) : null}
                        {eventInfo.contactInfo.phone ? (<p className="eventCard__info">Phone: {eventInfo.contactInfo.phone}</p>) : null}
                        {eventInfo.contactInfo.email ? (<p className="eventCard__info">Email: {eventInfo.contactInfo.email}</p>) : null}
                    </div>
                </div>
                {isLoggedIn ? (<button className="eventCard__action">Attend</button>) : (<button className="eventCard__action">Login to register</button>) }
            </div>
        </div>
    )
}

export default EventCard;