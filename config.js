//#ENJOY BRO😍
// Credit: JINHUYK|KangJinhuyk 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "chanjinhuyk@gmail.com";
global.location = "Douala, congo-brazaville";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://paulrick312:rBfEkBv2P9b6LDWH@cluster0.pmmq0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/ChanJinhuyk/JINHUYK-MD-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/sx2KY0mS/JINHUYK-MD-V1.jpg";
global.devs = "https://wa.me/242069283966 , https://wa.me/242065155487";
global.sudo = process.env.SUDO || "50944162295";
global.owner = process.env.OWNER_NUMBER || "242069283966";
global.style = process.env.STYLE || "2";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.postimg.cc/nrsBc8Td/JINHUYK-MD-V0.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "false";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://unknown-md-sessions-generator-1.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0pEK2cxNWZlV0FzSncxb1BYV2tHaWZCYWcyaU1DUlVTWUJMUjRPYVJHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTElFMTBzRk14QTBpazZiQit5dFByTDhLc3MxSVBUQUhLTm1DbHRCN1lVQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSWMxMWhXRlpJUHJNR1cwdmNoei9PRlF1aTFFekFTQ25BeVlVN0JPQlZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBMFZqS3V6V2o0YU1YZDk4NmNuanJHbXhBNlZRcUJiYVF4TlZKSXplV3dvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtDV3g5V09VQWpPaFBYQmducjMrc2tuK2phQ29PSEFadGFOSE1zKzJlbGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik13VkpaeVdDMFJSc0tEeVZCQUdjU3ZTZUZXTWgwYVdncEpBdzVZT3F6MWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0pNZUY2NkNWZVE4RTRMWnk5NjErNVRsMWJWN0xWSFczS29tSThNVXAwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia29KYzNVSnBxQzdzam5JN3NmZ2M4YW54N0svaVZ5WEtsbzM5Lzc1cXR5VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkN0SFV5TVhIazdXdFJHeW1uU2VOUnRwYnc5ZU04Mm1xZ1FuaW9nZXpER0xhTno5bWw3S3d4WWJXbjJSQ05rM2I1UWd1Wjd4NW5EdysxNGtmNkMwa0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiJVbDh6ajV2cFBFNGx0VTBBSlRQUmxWUXBhNjE3TzVmV3ErMm5CRWhzQUlBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyQTVNV1FnLVRBbW91QXo5ZEswODBnIiwicGhvbmVJZCI6ImZlODA2NzRiLWQ4NDctNDg4My1hZjQwLWYyOWE5MDg3YmQ1ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwNEtYcmprNG8rMU9XSk5GMXpIdDU0VmxSMGs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWYrbXZGVTZJSDNuOG1UeDM0dlg5bTRVRW9RPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkwzUkpHUjFMIiwibWUiOnsiaWQiOiIyNDIwNjkyODM5NjY6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJMYW1lbG8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ015dW5Zb0RFTm1TeXI4R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkNZclBhWmRyUkpldjlHcUFOd3BsUFN5aXY4dzc3OTk3R3h2UXhvSTU3U1E9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imk2bkE3KzVzSVYzbGthenhwamxnV3YzSEMweDQ0anVFM3BtVkpSZEtCdFE5OXV1b2xxNkpsUEk3dFF6R1BuNUVlbEpBYlZweHZqMUFSWGRDUDMzWGlBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI3YjRmYVBQTjNoeDU4R1pkd2RKTkNPYXNnOWRQdldsYzRUZkV6bzVkR2VLNEVDaWppVnBqQkVMNXFmZTJjQnp0dkovbTJxcFVxbUZDNktTUklKVzVDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0MjA2OTI4Mzk2Njo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFtS3oybVhhMFNYci9ScWdEY0taVDBzb3IvTU8rL2ZleHNiME1hQ09lMGsifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDM5NDgxMzUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRXlkIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "?",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "lamelo",
  packname: process.env.PACK_NAME || "🍂lamelo-𝐌𝐃🍂",
  botname: process.env.BOT_NAME || "lamelo-𝚳𝐃",
  ownername: process.env.OWNER_NAME || "LAMELO",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "JINHUYK").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
