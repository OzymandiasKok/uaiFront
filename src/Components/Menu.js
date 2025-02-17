import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const Menu = () => {
  const menuItems = [
    { id: 1, name: 'Combo 1', image: '/images/combo1.jpg', description: 'Delicioso combo', price: 'R$ 29,90' },
    { id: 2, name: 'Hambúrguer', image: '/images/hamburguer.jpg', description: 'Saboroso hambúrguer', price: 'R$ 19,90' },
    // Adicionar outros itens
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Grid container spacing={2}>
        {/* Seção Combos e Promoções */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>Combos e Promoções</Typography>
        </Grid>

        {menuItems.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardMedia
                component="img"
                alt={item.name}
                height="200"
                image={item.image}
              />
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" color="textSecondary">{item.description}</Typography>
                <Typography variant="h6" color="primary">{item.price}</Typography>
                <Button variant="contained" fullWidth>Adicionar</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Menu;
