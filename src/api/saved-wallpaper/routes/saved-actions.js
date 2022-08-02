module.exports = {
  routes: [
    {
      method: "DELETE",
      path: "/saved-wallpapers/remove/:uid",
      handler: "saved-wallpaper.deleteByUid"
    },
    {
      method: "DELETE",
      path: "/saved-wallpapers/remove",
      handler: "saved-wallpaper.deleteAll"
    },
    {
      method: "GET",
      path: "/saved-wallpapers/find/:uid",
      handler: "saved-wallpaper.findByUid"
    },
    {
      method: "GET",
      path: "/saved-wallpapers/user",
      handler: "saved-wallpaper.findUserSavedWallpapers"
    }
  ]
}
