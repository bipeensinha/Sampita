import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';


const useStyles = makeStyles({
   /* root: {
      minWidth: 175,
      // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      background: 'linear-gradient(21deg, #002147 50%, #002147 50%)',
      color: "#fafafa",
      fontSize: 16,
    },*/
    root: {
      maxWidth: 645,
      color: "#191919a",
      fontSize: 16,
      background: 'linear-gradient(21deg, #fafafa 50%, #fafafa 50%)',
      backgroundImage: "assets/images/1.jpg"
    },
    media: {
      height: 240,
    },
    image: {
      // ⚠️ object-fit is not supported by IE 11.
      objectFit: 'cover',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
 
    title: {
      backgroundColor: "#9c27b0",
      fontWeight: 'bold',
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  
  const Cards:React.FC<{image:string,title:string,certificate:string,examcode:string, tranhrs:string,exmpre:string, price:string,pdfURL:string}> = ({title,certificate,examcode, tranhrs,exmpre, price,pdfURL}) => {
    const classes = useStyles();
    return (
        //<div>
        <Card className={classes.root}>
          <CardActionArea>
              <CardMedia
                  className={classes.media}
                  image="assets/images/mcp.jpg"
                  title="MCSE Training"
              />
              <CardContent>
                {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Word of the Day
                </Typography> */}
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                {/* <Typography className={classes.pos} color="textSecondary">
                  adjective
                </Typography> */}
                <Typography variant="body2"  component="p">
               
                  <b className={classes.root}>Certificate : {certificate}</b><br />
                  <b className={classes.root}>Exam Code : {examcode}</b> <br />
                  <b className={classes.root}>Training Hours: {tranhrs}</b><br />
                  <b className={classes.root}>Exam Preparation: {exmpre}</b><br />
                  <b className={classes.root}>Price $ {price}   </b>  
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>  
             
              <a href={pdfURL} className="btn-custom" >
                        <span><i className="fas fa-cloud-download-alt"></i></span>
                        <span><b className={classes.root}>View Detail</b></span>
                    </a>    
              </CardActions>
            </Card>
       //</div>
    );
}

export default Cards
