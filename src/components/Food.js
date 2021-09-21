import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import { Button, Container, Paper } from '@mui/material';
import Grid from '@material-ui/core/Grid'
import FoodCard from './FoodCard';


const foods = [
    {
        name: 'Buttermilk Pancakes',
        price: '$15', 
        description: 'I am baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
        image: 'https://cdn2.foodviva.com/static-content/food-images/pancake-recipes/buttermilk-pancakes/buttermilk-pancakes.jpg',
        tags: 'breakfast'
    },
    {
        name: 'Country Delight', 
        price :'$15', 
        description: 'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.',
        image: 'https://simply-delicious-food.com/wp-content/uploads/2018/10/breakfast-board.jpg',
        tags: 'breakfast'
    },
    {
        name: 'Bacon Overflow', 
        price: '$15', 
        description: 'Carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird.',
        image: 'https://www.melissassouthernstylekitchen.com/wp-content/uploads/2016/03/Open-Faced-Egg-and-Canadian-Bacon-Rolls-2.jpg',
        tags: 'breakfast'
    },
    {
        name: 'Diner Double', 
        price: '$20', 
        description: 'Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats.',
        image: 'https://crummbs.co.uk/wp-content/uploads/2016/10/Diner-Double-Diablo-Burger-PWF-0085.jpg',
        tags: 'lunch'
    },
    {
        name: 'Egg Attack', 
        price: '$25', 
        description: 'franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90s pop-up.',
        image: 'https://res.cloudinary.com/drfgkfzk2/image/upload/v1607927020/foodmenu/lunch4_plwybh.jpg',
        tags: 'lunch'
    },
    {
        name: 'American Classic', 
        price: '$17', 
        description: 'On it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut.',
        image: 'https://www.robersonwine.com/media/3w1alqfu/americanfood.jpg?anchor=center&mode=crop&width=800&height=600&rnd=132551111502270000',
        tags: 'lunch'
    },
    {
        name: 'Godzilla Milkshake', 
        price: '$14', 
        description: 'Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral..',
        image: 'https://d3hkrbfxf7jd3r.cloudfront.net/article/lead_image/6371095/0_DSC_5334-copy-1.jpg',
        tags: 'shakes'
    },
    {
        name: 'Oreo Dream', 
        price: '$15', 
        description: 'Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday.',
        image: 'https://rajuomlet.com.au/wp-content/uploads/2020/09/1326B46F-5A55-45AE-AC33-0B588671E77D.jpeg',
        tags: 'shakes'
    },
    {
        name: 'Quarantine Buddy', 
        price: '$15', 
        description: 'Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
        image: 'http://d39cy8ulqxbvhv.cloudfront.net/wp-content/uploads/2020/01/14110014/5Jan-RTD-Cold-Brew-Drink-Web_0003.jpg',
        tags: 'shakes'
    },
]
const Food = () => {
    const [data, setDate] = useState(foods);

    const handleBtn = (e) =>{
      let food = e.target.value;
      if(food === 'all'){
          setDate(foods)
      }
      else if(food === 'breakfast'){
          const filtered = foods.filter(item => item.tags === 'breakfast');
          setDate(filtered)
      }
      else if(food == 'lunch'){
          const filtered = foods.filter(item => item.tags === 'lunch');
          setDate(filtered)
      }
      else if(food == 'shakes'){
          const filtered = foods.filter(item => item.tags === 'shakes');
          setDate(filtered)
      }
    }
    return (
        <Container>
            <div className="title">
                <Typography variant="h4" color="primary">Our <span>Menu</span> </Typography>
            </div>
             <div className="btn">
                <Button variant="text" onClick={handleBtn} value="all">
                    All
                </Button>
                <Button variant="text" onClick={handleBtn} value="breakfast">
                    Break Fast
                </Button>
                <Button variant="text" onClick={handleBtn} value="lunch">
                    Lunch
                </Button>
                <Button variant="text" onClick={handleBtn} value="shakes">
                    Shakes
                </Button>
            </div>
           
           <Grid container spacing={3}>
            {data.map((data)=>{
            return (
            <Grid item md={4} sm={12}>
                <Paper>
                   <FoodCard food={data}/>
                </Paper> 
            </Grid>
            )
        })}
          </Grid>
        </Container>
    )
}

export default Food
