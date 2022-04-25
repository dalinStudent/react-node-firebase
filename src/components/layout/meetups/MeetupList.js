import React from "react";
import classes from '../../../css/MeetupList.module.css'
import MeetupItem from "./MeetupItem";

export default function MeetupList(props) {
    return (
        <ul className={classes.list}>
         {props.meetups.map((meetup) => (
            <MeetupItem
                key={meetup.id}
                id={meetup.id}
                image={meetup.image}
                title={meetup.title}
                address={meetup.address}
                description={meetup.description}
        />
      ))}
    </ul>
  );
}