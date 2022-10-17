import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {TimelineOppositeContent} from "@mui/lab";
import {Typography, useTheme} from "@mui/material";

export const Roadmap = () => {
    const theme = useTheme()

    return (
        <Timeline style={{
            width: '100%'
        }}>
            <TimelineItem>
                <TimelineOppositeContent/>
                <TimelineSeparator>
                    <TimelineDot style={{
                        backgroundColor: theme.palette.primary.contrastText,
                        width: 40,
                        height: 40
                    }}>
                        <Typography variant="h4" style={{
                            color: '#fff',
                            fontFamily: 'main',
                            fontWeight: 'bold',
                            marginTop: -2,
                            marginLeft: 11
                        }}>
                          1
                        </Typography>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <div>
                        <Typography variant="h4" style={{
                            color: theme.palette.primary.contrastText,
                            display: 'inline',
                            fontFamily: 'main',
                            fontWeight: 'bold'
                        }}>
                            PHASE I
                        </Typography>
                    </div>

                    <Typography variant="h5" style={{
                        color: '#fff',
                        fontFamily: 'main',
                        paddingBottom: 10
                    }}>
                        • Social media launch
                    </Typography>

                    <Typography variant="h5" style={{
                        color: '#fff',
                        fontFamily: 'main',
                        paddingBottom: 10
                    }}>
                        • Partnership with strong & established communities
                    </Typography>

                    <Typography variant="h5" style={{
                        color: '#fff',
                        fontFamily: 'main',
                        paddingBottom: 10
                    }}>
                        • Community giveaways
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <div>
                        <Typography variant="h4" style={{
                            color: theme.palette.primary.contrastText,
                            display: 'inline',
                            fontFamily: 'main',
                            fontWeight: 'bold'
                        }}>
                          PHASE II
                        </Typography>
                    </div>
                    <Typography variant="h5" style={{
                        color: '#fff',
                        fontFamily: 'main',
                        paddingBottom: 10
                    }}>
                        • Website development
                    </Typography>
                    <Typography variant="h5" style={{
                        color: '#fff',
                        fontFamily: 'main',
                        paddingBottom: 10
                    }}>
                        • Completion of the artist's work on the collection
                    </Typography>
                    <Typography variant="h5" style={{
                        color: '#fff',
                        fontFamily: 'main',
                        paddingBottom: 10
                    }}>
                        • Create $LOVE token
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot style={{
                        backgroundColor: theme.palette.primary.contrastText,
                        width: 40,
                        height: 40
                    }}>
                        <Typography variant="h4" style={{
                            color: '#fff',
                            fontFamily: 'main',
                            fontWeight: 'bold',
                            marginTop: -1,
                            marginLeft: 10
                        }}>
                           2
                        </Typography>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent/>
                <TimelineSeparator>
                    <TimelineDot style={{
                        backgroundColor: theme.palette.primary.contrastText,
                        width: 40,
                        height: 40
                    }}>
                        <Typography variant="h4" style={{
                            color: '#fff',
                            fontFamily: 'main',
                            fontWeight: 'bold',
                            marginTop: -1,
                            marginLeft: 11
                        }}>
                            3
                        </Typography>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>  <div>
                    <Typography variant="h4" style={{
                        color: theme.palette.primary.contrastText,
                        display: 'inline',
                        fontFamily: 'main',
                        fontWeight: 'bold'
                    }}>
                        PHASE III
                    </Typography>
                </div>
                    <Typography variant="h5" style={{
                        color: '#fff',
                        fontFamily: 'main',
                        paddingBottom: 10
                    }}>
                        • Mint day 
                    </Typography>

                    <Typography variant="h5" style={{
                        color: '#fff',
                        fontFamily: 'main',
                        paddingBottom: 10
                    }}>
                        • Staking launch
                    </Typography>

                    <Typography variant="h5" style={{
                        color: '#fff',
                        fontFamily: 'main',
                        paddingBottom: 10
                    }}>
                        • DAO formation to share all the alpha and vote for future project development
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent>
                    <div>
                        <Typography variant="h4" style={{
                            color: theme.palette.primary.contrastText,
                            display: 'inline',
                            fontFamily: 'main',
                            fontWeight: 'bold'
                        }}>
                           PHASE IV
                        </Typography>
                    </div>
                    <Typography variant="h5" style={{
                        color: '#fff',
                        fontFamily: 'main',
                        paddingBottom: 10
                    }}>
                        • Release KAZOKU MUTATOR to upgrade your NFTs
                    </Typography>

                    <Typography variant="h5" style={{
                        color: '#fff',
                        fontFamily: 'main',
                        paddingBottom: 10
                    }}>
                        • Animated 1/1 auctions using $LOVE
                    </Typography>

                    <Typography variant="h5" style={{
                        color: '#fff',
                        fontFamily: 'main',
                        paddingBottom: 10
                    }}>
                        • Kazoku Wheel Of Luck Game
                    </Typography>

                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot style={{
                        backgroundColor: theme.palette.primary.contrastText,
                        width: 40,
                        height: 40
                    }}>
                        <Typography variant="h4" style={{
                            color: '#fff',
                            fontFamily: 'main',
                            fontWeight: 'bold',
                            marginTop: 0,
                            marginLeft: 7
                        }}>
                            4
                        </Typography>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent/>
                <TimelineSeparator>
                    <TimelineDot style={{
                        backgroundColor: theme.palette.primary.contrastText,
                        width: 40,
                        height: 40
                    }}>
                        <Typography variant="h4" style={{
                            color: '#fff',
                            fontFamily: 'main',
                            fontWeight: 'bold',
                            marginTop: -1,
                            marginLeft: 10
                        }}>
                            5
                        </Typography>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>  <div>
                    <Typography variant="h4" style={{
                        color: theme.palette.primary.contrastText,
                        display: 'inline',
                        fontFamily: 'main',
                        fontWeight: 'bold'
                    }}>
                        PHASE V
                    </Typography>
                </div>
                    <Typography variant="h5" style={{
                        color: '#fff',
                        fontFamily: 'main',
                        paddingBottom: 10
                    }}>
                        • Development of ROADMAP 2  together with DAO
                    </Typography>

            
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
};

