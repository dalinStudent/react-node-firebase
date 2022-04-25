import React from "react";
import NewMeetupForm from "../components/layout/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

function NewMeetupPage() { 
    const history = useHistory();
    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-nodejs-5abaa-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        });
    }

    return <section>
        <h1>ADD NEW MEETUP</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
}

export default NewMeetupPage;