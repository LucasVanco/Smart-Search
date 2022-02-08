import {
    Card,
    CardActions,
    CardContent, CardHeader,
    CardMedia,
    IconButton,
    Typography
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Record(props) {

    /**
     * hardcoded string url for map images
     *
     * @type {string}
     */
    const MAP_URL = 'https://dev.virtualearth.net/REST/V1/Imagery/Map/Road/%POS_Y%,%POS_X%/16?mapSize=300,250&format=png&pushpin=%POS_Y%,%POS_X%;65;&key=Ah12kIOAYzmW3ONiCcYEImWIp2xL8pwMXEvlOjhzjLRhjBBOCgBygJe4PHOY_aKU';

    /**
     * handle click on favorite icon
     * send info back to parent with id
     */
    function handleFavoriteClick() {
        props.onFavoriteClick(props.recordId);
    }

    return (
        <Card sx={{minHeight: 435}}>
            <CardHeader
                title={props.nom_tournage}
                subheader={props.nom_realisateur}
            />
            <CardMedia
                component="img"
                height="140"
                image={MAP_URL.replaceAll('%POS_X%', props.coord_x).replaceAll('%POS_Y%', props.coord_y)}
                alt="map location"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.nom_producteur} <br/>
                    {props.adresse_lieu} <br/>
                    {props.type_tournage} <br/>
                    {props.date_debut} - {props.date_fin} <br/>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
                    { props.isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Record;
