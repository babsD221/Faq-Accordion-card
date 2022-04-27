import React from "react";
import "../App.css";
import QuesAnsw from "./QuesAnsw";



class FaqContainer extends React.Component {
    render() {
        return (
            <div className="faq">
                <h1>FAQ</h1>

                <QuesAnsw question="  How many team members can I invite?"
                answer="  You can invite up to 2 additional users on the Free plan. There is no limit on 
                team members for the Premium plan."
   />
                <QuesAnsw question="What is the maximum file upload size?"
                answer="No more than 2GB. All files in your account must fit your allotted storage space."
   />
                <QuesAnsw question="How do I reset my password?"
                answer="Click “Forgot password” from the login page or “Change password” from your profile page.A reset link will be emailed to you."
   />
                <QuesAnsw question="  How many team members can I invite?"
                answer="Yes! Send us a message and we’ll process your request no questions asked."
   />
                <QuesAnsw question="Can I cancel my subscription?"
                answer="  You can invite up to 2 additional users on the Free plan. There is no limit on 
                team members for the Premium plan."/>

                <QuesAnsw question="Do you provide additional support?"
                answer="Chat and email support is available 24/7. Phone lines are open during normal business hours."/>
    </div>
        );
    }
}

export default FaqContainer;