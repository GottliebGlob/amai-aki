import React, {useState} from 'react';
import {Typography, useTheme} from "@mui/material";

interface FAQ {
    question: string,
    answer: string,
}

export const FaqItem = (props: FAQ) => {
    const theme = useTheme()

    const [flag, setFlag] = useState(false)

    const flagHandler = () => setFlag(!flag)

    return (
        <div
            style={{
            border: '1px solid',
            cursor: 'pointer',
            borderColor: theme.palette.primary.contrastText,
            borderRadius: 10,
            padding: 10,
            maxHeight: flag ? 500 : 32,
                overflow: 'hidden',
            margin: 15,
            transition: "all 0.3s ease-in-out",
                display: 'flex',
                flexDirection: 'column'

        }}
        onClick={flagHandler}
        >
            <Typography variant="h5" style={{
                fontFamily: 'Main',
                fontWeight: 'bold',
                textAlign: 'center'
            }}>
                {props.question}
            </Typography>


        <Typography variant="h5" style={{
                fontFamily: 'Main',
                color: flag ? '#fff' : theme.palette.primary.main,
                transition: "all 0.3s ease-in-out",
                  textAlign: 'center',
            }}>
                {props.answer}
            </Typography>




        </div>
    );
};
