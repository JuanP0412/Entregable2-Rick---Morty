import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './CardCharacter.css';

export default function CardCharacter({ name, status, species, gender, image, onClick }) {
  const colorEstado = {
    'Alive': '#97ce4c',
    'Dead': 'red',
    'unknown': 'gray'
  };

  return (
    <Card onClick={onClick}
    sx={{
      cursor: 'pointer',
      maxWidth: 260,
      backgroundColor: '#16213e',
      border: '1px solid #2d3748',
      borderRadius: 3,
      transition: 'border-color 0.2s',
      '&:hover': { 
        borderColor: '#97ce4c',
        boxShadow: '0px 4px 20px rgba(151, 206, 76, 0.25)'
      }
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{ color: '#e2e8f0', fontWeight: 700, fontSize: '1rem' }}>
            {name}
          </Typography>
          <Typography variant="body2" component="div" sx={{ color: '#a0aec0', mt: 0.5 }}>
              <span className='icon-state' style={{ backgroundColor: colorEstado[status], boxShadow: `0px 0px 6px 2px ${colorEstado[status]}` }}></span>
              <span style={{ color: colorEstado[status],  }}>{status}</span>
              <div>{species} · {gender}</div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
