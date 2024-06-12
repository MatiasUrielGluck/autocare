import { Image } from "@mui/icons-material"
import { Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material"
import { Box } from "@mui/system"
import AvatarImg from "/src/assets/icon/avatar.png";

export const UserInfo = () => {
    return (
        <Card sx={{ display: "flex", justifyContent: "space-between", width: "100%", height: 200 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                    <Box sx={{ paddingBottom: 1, textAlign: "center" }}>
                        <Typography component="div" variant="h6">
                            Perfil
                        </Typography>
                    </Box>
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                    >
                        <strong>Usuario</strong>
                        <br />
                        Felipe Random
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                    >
                        <strong>Mail</strong>
                        <br />
                        feliperandom@gmail.com
                    </Typography>
                </CardContent>
            </Box>
            <CardMedia
                sx={{ width: "100%", objectFit: "contain" }} image={AvatarImg}>
            </CardMedia>
</Card>
    )
}