import React from 'react';
import css from "./CardSection.module.css"
import Card from "../Card/Card"

const CardSection = () => {
    return (
<div className={css.container}>
<Card
    iconId="circle-icon-green"  
    title="Online Counseling"
    content="Many therapists offer counselling online or by telephone, check their profile to learn more or use our online and telephone search."
    tagline="Find therapist"
    variant="variant1"
    lastIconId="white-arrow"
/>
<Card
    iconId="circle-icon-blue"  
    title="Advice By Phone"
    content="If you are in trouble and want our immediate help, simply pick up the phone and call us anytime you need help."
    tagline="Find therapist"
    variant="variant2"
    lastIconId="white-arrow"
/>
<Card
    iconId="circle-grey"  
    title="Direct Counseling"
    content="Psychological counseling, direct psychotherapy with leading psychologists at Medcaline."
    tagline="Find therapist"
    variant="variant3"
    lastIconId="grey-arrow"
/>
</div>
    );
}
export default CardSection;