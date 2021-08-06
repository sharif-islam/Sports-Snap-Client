import React from "react";
import "./Product.css";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    Width: 300,
  },
  media: {
    width: 300,
    height: 260,
  },
});

const Product = (props) => {
  const classes = useStyles();
  const { name, price, imageURL, _id } = props.product;
  return (
    <div className="product">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={imageURL}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Size Available S, M, L, XL
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="price-details">
          <h2 className="price">$ {price} </h2>
          {props.showAddToCard && (
            <Button
              style={{
                borderRadius: 15,
                backgroundColor: "#daa520",
              }}
              size="medium"
              color="black"
              onClick={() => props.handleAddProduct(props.product)}
            >
              add to cart
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
