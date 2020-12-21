import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import '../../../scss/product.scss'


const useStyles = makeStyles((theme) => ({
    card: {
        paddingLeft: "15px",
        paddingRight: "15px",
        paddingBottom: "10px",
        paddingTop: "5px",
    },
    titleProduct: {
        fontWeight: "bold",
        textAlign: "center"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    iconFavorite: {
        float: "right"
    },
    actionProduct: {
        justifyContent: "center"
    }


}));

export default function ProductCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return ( <Card className = { classes.card } >
            <CardMedia className = { classes.media }
            image = "https://jollibee.com.vn/uploads/dish/ee8e7512368728-6mingggin.png"
            title = "Paella dish" />
            <CardContent >
            <Typography variant = "body2"
            component = "p"
            className = { classes.titleProduct } >
            3 CHICKENJOY </Typography> </CardContent >
             <CardActions disableSpacing className = { classes.actionProduct } >

            <Button variant = "contained"
            size = "small"
            className = "button__addToCart" >
            Add To Cart </Button> {
            /* <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton> */
        } </CardActions> </Card >
);
}