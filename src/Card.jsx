import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./App.css"
const CardMi = ({ user }) => {
  return (
    < Card sx={{ maxWidth: 305, height: 600 }}>
      <CardMedia
        sx={{ height: 308 }}
        image={`https://picsum.photos/200?random=${user.id}`}
        title="Hare Krishna"
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {user.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {user.body.length > 90
                ? user.body.slice(0, 100) +"..."
                : user.body}
                <span><button style={{color:"#F05A22",border:"none",backgroundColor:"white"}}>Read More</button> </span>
        
            <span>
              
              <div className="button">
                <button 
                  style={{
                    color: "white",
                    backgroundColor: "#F05A22",
                    border: "none",
                    fontSize: "1.5rem",
                  }}
                >
                  &gt;
                </button>
              </div>
            </span>
          
        </Typography>
      </CardContent>

      <CardActions></CardActions>
    </Card>
  );
};

export default CardMi;
