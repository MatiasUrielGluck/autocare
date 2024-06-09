import { useDispatch, useSelector } from "react-redux";
import { HomeTemplate } from "../../templates/HomeTemplate";
import { useEffect } from "react";
import { loadNotifications } from "../../store/notificacionsSlice/notificationsSlice";
import { NotificationTextBox } from "../../components/NotificationTextBox";
import { Container, Typography } from "@mui/material";

export const NotificationsPage = () => {
  const notificationsStore = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadNotifications());
  }, []);

  return (
    <HomeTemplate hideGoBackButton>
      <Container maxWidth="lg">
        {notificationsStore.notifications.length ? (
          notificationsStore.notifications.map((notification, index) => {
            return (
              <NotificationTextBox notification={notification} key={index} />
            );
          })
        ) : (
          <Typography>Sin notificaciones</Typography>
        )}
      </Container>
    </HomeTemplate>
  );
};
