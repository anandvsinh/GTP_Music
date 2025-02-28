

module.exports = {
  TOKEN: "MTM0MTUxNTUyODE0OTE0MzYzMg.G8eAMY.otjw69ecECecLH__-myplzGHqtiYY3auS8_Fec",
  language: "en",
  ownerID: ["861185736003026985", ""], 
  mongodbUri : "mongodb+srv://anandvsinh:anand@123@cluster0.0ued8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "",
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
