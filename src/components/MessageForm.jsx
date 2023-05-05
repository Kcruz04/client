import React, { useState } from "react";

const MessageForm = (props) => {
    //Declaring state Variables
    const [msg, setMsg] = useState("");

    //Handles our form submission
    const handleSubmit = (e) => {

        //Prevent the default behavior of a page refresh
        e.preventDefault();
        // what should we do with the message?
        props.onNewMessage(msg);
        setMsg("")

    };

    return (
        <form onSubmit={handleSubmit}>
        <h1>Message Form - Set Message</h1>

        <textarea
            rows="4"
            cols="50"
            placeholder="Enter your message here"
            onChange={(e) => setMsg(e.target.value)}
            value={msg}></textarea>
        <br />
        <input type="submit" value="Send Message" />
        </form>
    );
};

export default MessageForm;