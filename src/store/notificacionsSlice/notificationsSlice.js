import { createSlice } from "@reduxjs/toolkit";
import * as API from "../../helpers/API";
import store from "../store";

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
    loading: false
  },
  reducers: {
    loadNotifications: (state) => {
      state.loading = true
      API.fetchNotifications().then(noti => {
        store.dispatch(setNotifications(noti))
      })
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload
      state.loading = false
    },
    deleteNotificacion: (state, action) => {
      state.notifications = state.notifications.filter(x => x.id != action.payload)
    }
  }
})



export const { loadNotifications, setNotifications, deleteNotificacion } = notificationsSlice.actions
export default notificationsSlice.reducer