

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://<db_username>:<db_password>@cluster0.0ued8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "GTP Music",
      password: "anand@123",
      host: "180.188.226.76",
      port:  7019,
      secure: false
    }
  ]
}
