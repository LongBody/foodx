import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import ProductCard from './productCard'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function ProductGrid() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
      </Typography>
      <Grid container spacing={3} >
        <Grid item  xs={12} sm={12} md={6} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item  xs={12} sm={12} md={6} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item  xs={12} sm={12} md={6} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item  xs={12} sm={12} md={6} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item  xs={12} sm={12} md={6} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item  xs={12} sm={12} md={6} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item  xs={12} sm={12} md={6} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item  xs={12} sm={12} md={6} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item  xs={12} sm={12} md={6} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item  xs={12} sm={12} md={6} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item  xs={12} sm={12} md={6} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item  xs={12} sm={12} md={6} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item  xs={12} sm={12} md={6} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item  xs={12} sm={12} md={6} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item  xs={12} sm={12} md={6} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item  xs={12} sm={12} md={6} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item  xs={12} sm={12} md={6} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item  xs={12} sm={12} md={6} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item  xs={12} sm={12} md={6} lg={3}>
          <ProductCard />
        </Grid>
        <Grid item  xs={12} sm={12} md={6} lg={3}>
          <ProductCard />
        </Grid>
     
    
     
       
       

      </Grid>
      <Divider className={classes.divider} />
    </div>
  );
}
