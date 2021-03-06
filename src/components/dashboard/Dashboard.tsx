import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardHeader, Grid, IconButton, Grow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { withRouter } from 'react-router-dom';
import HighChartComponent from './charts/HighChartComponent';
import HighChartPie from './charts/HighChartPie';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        flex: 1,
    },
    iconStyle: {
        fontSize: "36px",
    },
    gridContainer: {
        margin: "5px",
        flex: 1,
    },
    cardStyle: {
        background: "#fff",
    },
    cardCategory: {
        color: theme.palette.primary.main,
        margin: "0",
        fontSize: "12px",
        marginTop: "0",
        paddingTop: "10px",
        marginBottom: "0"
    },
}));


const Dashboard: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1} className={classes.gridContainer}>

                <Grow in={true} timeout={1000}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.cardStyle}>
                            <CardHeader action={
                                <IconButton>
                                    <FontAwesomeIcon icon={faGithub} className={classes.iconStyle} style={{ color: "#000000" }} />
                                </IconButton>
                            }
                                title="Github">
                            </CardHeader>
                        </Card>
                    </Grid>
                </Grow>

                <Grow in={true} timeout={1000}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.cardStyle}>
                            <CardHeader action={
                                <IconButton>
                                    <FontAwesomeIcon icon={faStackOverflow} className={classes.iconStyle} style={{ color: "#f48024" }} />
                                </IconButton>
                            }
                                title="Stackoverflow">
                            </CardHeader>
                        </Card>
                    </Grid>
                </Grow>

                <Grow in={true} timeout={1000}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.cardStyle}>
                            <CardHeader action={
                                <IconButton>
                                    <FontAwesomeIcon icon={faLinkedin} className={classes.iconStyle} style={{ color: "#0077b5" }} />
                                </IconButton>
                            }
                                title="LinkedIn">
                            </CardHeader>
                        </Card>
                    </Grid>
                </Grow>
                <Grow in={true} timeout={1000}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Card>
                            <HighChartPie />
                        </Card>
                    </Grid>
                </Grow>
                <Grow in={true} timeout={1000}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Card>
                            <HighChartComponent />
                        </Card>
                    </Grid>
                </Grow>
                <Grow in={true} timeout={1000}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Card>
                            <HighChartPie />
                        </Card>
                    </Grid>
                </Grow>
                <Grow in={true} timeout={1000}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Card>
                            <HighChartComponent />
                        </Card>
                    </Grid>
                </Grow>
            </Grid>
        </div>
    )

}

export default withRouter(Dashboard);