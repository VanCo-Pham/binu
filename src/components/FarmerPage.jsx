import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { CardActionArea } from '@mui/material';
import { Outlet, Link } from "react-router-dom";

export default function FarmerPage() {
  return (
    <Stack spacing={2}>
        <h2>Quản lý nông dân</h2>
            <Card>
            <Link to= {`/quanlynd/tracuu`}>
            <CardActionArea >
                <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    Tra Cứu
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Tra cứu lịch sử lấy giống, giao hàng
                </Typography>
                </CardContent>
            </CardActionArea>
            </Link>
            </Card>
            <Card>
            <Link to= {`/quanlynd/giaogiong`}>

            <CardActionArea>
                
                <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    Giao giống
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Giao giống cho nông dân
                </Typography>
                </CardContent>
            </CardActionArea>
            </Link>
            </Card>
            <Card>
            <Link to= {`/quanlynd/nhanhang`}>
            <CardActionArea>
                
                <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    Nhận hàng
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Nhận hàng của nông dân theo ngày,...
                </Typography>
                </CardContent>
            </CardActionArea>
            </Link>
            </Card>
            <Card>
            <Link to= {`/quanlynd/themnongdan`}>
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    Thêm nông dân
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Thêm nông dân, số điện thoại, khu vực vào cơ sở dữ liệu,...
                </Typography>
                </CardContent>
            </CardActionArea>
            </Link>
            </Card>
    </Stack>
  );
}