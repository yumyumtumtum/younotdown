import React from "react";
import Header from "../components/Header/header";
import Button from "../components/Button/Button";

const Plan = () => {
    return (
        <div>
            <Header />
            <div className="text-4xl font-bold">
                Hello, World!
                <Button bg={'black'} btnText={'Follow me'} textColor={'white'}/>            </div>
        </div>
    );
}

export default Plan;
