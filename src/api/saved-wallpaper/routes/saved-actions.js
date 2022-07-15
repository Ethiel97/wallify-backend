module.exports = {
  routes: [
    {
      method: "DELETE",
      path: "/saved-wallpapers/remove/:uid",
      handler: "saved-wallpaper.deleteByUid"
    },
    {
      method: "GET",
      path: "/saved-wallpapers/find/:uid",
      handler: "saved-wallpaper.findByUid"
    }
  ]
}
