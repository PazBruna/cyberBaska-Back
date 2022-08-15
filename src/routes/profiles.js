import * as profilesController from "../controller/profilesController";

export default {
  scope: "Profile settings",
  prefix: "/profile",
  routes: [
    {
      method: "POST",
      path: "/register",
      description: "Register player on baska database",
      middlewares: [],
      handler: profilesController.addPlayer,
    },
    {
      method: "PUT",
      path: "/players/:id",
      description: "Update player profile",
      middlewares: [],
      handler: profilesController.updateProfile,
    },
    {
      method: "GET",
      path: "/players/:id",
      description: "Get player profile",
      middlewares: [],
      handler: profilesController.getProfileByID,
    },
    {
      method: "GET",
      path: "/players",
      description: "Get all player profiles",
      middlewares: [],
      handler: profilesController.getAllPlayers,
    },
    {
      method: "DELETE",
      path: "/players/:id",
      description: "Delete player ",
      middlewares: [],
      handler: profilesController.deletePlayerId,
    },
  ],
};
