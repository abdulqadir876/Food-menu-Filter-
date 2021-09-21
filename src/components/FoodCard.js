import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Avatar, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';


const FoodCard = ({food}) => {
    return (
        <div>
            <Card elevation={0}>
                <CardHeader
                    avatar={
                        <Avatar
                            alt="Remy Sharp"
                            src={food.image}
                            sx={{ width: 40, height: 40 }}
                        />
                  }
                  action={
                    <IconButton>
                      {food.price}
                    </IconButton>
                  }
                    title={food.name}
                    subheader={food.tags}
                />
                <CardMedia
                     component="img"
                     height="194"
                     image={food.image}
                     alt={food.name}
                />
                <CardContent>
                    <Typography variant="body3" color="textSecondary">
                        {food.description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default FoodCard
