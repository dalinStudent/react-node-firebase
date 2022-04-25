import Card from "../../ui/Card";
import classes from '../../../css/MeetupForm.module.css';
import { useRef } from "react";

export default function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const addressInputRef = useRef();
    const imageInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredDes = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDes,
        };

        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' ref={titleInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor="image">Image</label>
                    <input type="url" required id="image" ref={imageInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" required id="address" ref={addressInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea type="text" required id="description" rows='5' ref={descriptionInputRef} />
                </div>
                <div className={classes.actions}>
                    <button type="submit">Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}