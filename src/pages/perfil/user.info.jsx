import { Image } from "@mui/icons-material"
import { Alert, Button, Card, CardContent, CardMedia, IconButton, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { perfilSelectors, editUserMail } from "../../store/perfil/perfilSlice";
import AvatarImg from "/src/assets/icon/avatar.png";
import validator from "validator"

export const UserInfo = () => {
    const { mail, phoneNumber } = useSelector(perfilSelectors.getUserData)
    const dispatch = useDispatch()
    const [editing, setEditing] = useState(false)
    const [mailValue, setMailValue] = useState("")
    const [mailError, setMailError] = useState(null)

    const changeMail = (newMail) => {
        dispatch(editUserMail({ newMail }))
        setMailValue("")
        setEditing(false)
    }

    const handleMailKeyDown = (e) => {
        if (e.key !== 'Enter') {
            return;    
        }

        console.log(mailValue)
        e.preventDefault();
        if (mailValue && validator.isEmail(mailValue)) {
            changeMail(mailValue)
            setMailError(null)
        }
        else {
            setMailError("Mail incorrecto")
        }   
    }

    return (
        <Card sx={{ display: "flex", justifyContent: "space-between", width: "100%", height: 370 }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
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
                            <strong>Celular</strong>
                            <br />
                            {phoneNumber}
                        </Typography>
                    </Box>
                    <CardMedia sx={{ width: "50%", objectFit: "contain", height: 200 }} image={AvatarImg} />
                </Box>
                <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                >
                    <strong>Mail</strong>
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", columnGap: 3 }}>
                    {editing &&
                        <Box sx={{ display: "flex", flexDirection: "column", rowGap: 1 }}>
                            <Box sx={{ display: "flex", alignItems: "center", columnGap: 2 }}>
                                <TextField 
                                    id="outlined-basic"
                                    label=""
                                    variant="outlined"
                                    placeholder={mail}
                                    value={mailValue}
                                    onChange={(e) => {
                                        setMailValue(e.target.value);
                                        setMailError(null)
                                    }}
                                    onKeyDown={handleMailKeyDown}
                                />
                                <Button
                                    onClick={() => {
                                            setEditing(false)
                                            setMailValue("")
                                        }
                                    }
                                    sx={{
                                        borderRadius: 50,
                                        maxWidth: 130,
                                        height: 45,
                                        lineHeight: "18px",
                                    }}
                                    variant="contained"
                                    size="small"
                                    color="primary"
                                >
                                    Cancelar
                                </Button>
                            </Box>
                            {mailError && <Alert severity="error">{mailError}</Alert>}
                        </Box>
                    }
                    {!editing && 
                        <>
                            {mail}
                            <IconButton sx={{ width: "20px", height: "20px" }}
                            onClick={() => {
                                setEditing(true)
                                setMailError(null)
                            }}>
                                <img width="20px" height="20px" src="/src/assets/icon/edit.png"/>
                            </IconButton>
                        </>
                    }
                    
                </Box>
            </CardContent>
        </Card>
    )
}