import { configureStore } from "@reduxjs/toolkit";
import users  from "./slices/users/usersSlice";
// import userSlice  from "./slices/users/usersSlice";
// import users from './slices/users';


// Reducer de estado global con varios reducer adentro
// Este comp. hay q pasarlo a toda la App por medio de un provider
// reparte todos los reducers slice que exitan

export default configureStore({
  reducer: {
    users,
  },
});
