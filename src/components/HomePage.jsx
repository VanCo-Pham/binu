import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { CardActionArea } from '@mui/material';
import { Outlet, Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div>
        <h1>Welcome to Middleman Management</h1>
        <Stack spacing={2}>
            <Card >
            <Link to= {`/quanlynd`}>
            <CardActionArea  >
                <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/600/92c952"
                alt="danh sach"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Quản lý nông dân
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Danh sách nông dân, thêm mới, xóa bỏ, lịch sử giao hàng,...
                </Typography>
                </CardContent>
            </CardActionArea>
                </Link>                
            </Card>
            <Card>
                
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/600/92c952"
                alt="danh sach"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Quản lý nông dân
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Danh sách nông dân, thêm mới, xóa bỏ, lịch sử giao hàng,...
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
            <Card>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/600/92c952"
                alt="danh sach"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Quản lý nông dân
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Danh sách nông dân, thêm mới, xóa bỏ, lịch sử giao hàng,...
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </Stack>


        
    </div>
  );
}