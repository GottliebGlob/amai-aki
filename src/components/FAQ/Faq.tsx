import React from 'react';
import {Container} from "@mui/material";
import FaqItem from "../FaqItem"

export const Faq = () => {


    return (
        <div>
            <FaqItem question="What is the supply?" answer="300" />
            <FaqItem question="When is mint date?" answer="September 14" />
            <FaqItem question="What is the mint time?" answer="19:00 UTC" />
            <FaqItem question="How much will mint price be?" answer="0.1 SOL - Public and 0.075 SOL - WL" />
            <FaqItem question="How to get whitelisted?" answer="Join our discord to learn more info" />
            <FaqItem question="What do I get by owning a Kazoku?" answer="Earn $LOVE daily by staking your Kazoku NFT; 
            Access to alpha information on our private discord channel; Whitelists from upcoming mints that we will collaborate with; Weekly giveaways and competitions" />
            <FaqItem question="Why to hold $LOVE token?" answer="Upgraded Kazoku NFT; Animated 1/1 auctions;
            Participation in Kazoku Wheel Of Luck Game; Opportunity to become a member of DAO" />
        </div>
    );
};

