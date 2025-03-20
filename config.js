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
global.devs = "https://wa.me/50944162295 , https://wa.me/242065155487";
global.sudo = process.env.SUDO || "50944162295";
global.owner = process.env.OWNER_NUMBER || "50944162295‪‬";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0p6QSt1US9EMXZwWHhXemhPT29oeDNDVDJPNzdlQ1h4bWFtblZhT3NXbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVQrSVBHc3VMSi9tQ3NPMnRnYTZMb2JWSS83SUNuWnFBYVBsbmd0K3ZCOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTVZET0JKVXFuanVFdlIzeGcvemYyR0VXNG9CU1J3ZmhTcHAyTVBFOGt3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsWEppQWJzVDBsN1RUMm02WmdxNGdHemNsck5HZW85cENHbEE3d3UzdWswPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndQblpBQkVRdGRHOVpSdDVNRWlkQ2I2dlE1bENKMnk4c1BWVWd0a0xoVnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdlUkExUE9PSEErblBOU0lqS3gvL0RhaVJuZ2hoblQ1ZGR3R1dYcUZzMTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUpqRWlCMk4xYVg2dytnenYrQ3ZsNmo3UWtzSU5xLytFS0xra1BvWkRYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWNmNHRML0dDZ3RGRHlzQm5xWlR4c0d2OGZkakhjRnRTTXZjVTVDYndqUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktlNzdpZFQxbHNxa2E5MHJ3eUxMSDhpdHhLTW5QOXFxUGdPbmFtM3BuMTZnTXhjalJkK1VOYUdRakc2RWZhMkpNYmVNTVVGKzlvTlhTbUtKa2Q4aWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjExLCJhZHZTZWNyZXRLZXkiOiI0Yjd4UVZpckhzb3lxbUhPTmlvUVovWmwvVTJRcytyZ2FFb2dnOUhNTXZZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFUG9TRDRXVFRMbWh3bGpuaHl3ZVhBIiwicGhvbmVJZCI6IjQ5MDM1ZmYxLTE2ZDAtNDUwZC1iZjc5LTI3YmQ4NWU5NjY3ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzMmNTNUc0QzRFcFUyOXNTT2JZOVVZblRmM0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkU0WWR5cVRESDZzbHBSWkd5OXNYRHVEVWx3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllDWjZCRzlIIiwibWUiOnsiaWQiOiI1MDk0NDE2MjI5NTo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkxBTUVMTyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTis3OUkwSUVMak04TDRHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVFg4M2kvWmFMbXFJRFBDWTUyVDRheDd3TDg0ZUoxSFVyKzQzSGc0REduND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMW1rbEMydnA0VEdJR056b3ZDOHdLWTcvNHlLZ3dMMEZ4V3IrMTVtTy8xUUhDVjFyL082UTFJejlSVEdhb09JSkhvTXc5QUdJdmtaTEg5R054bVMwalE9PSIsImRldmljZVNpZ25hdHVyZSI6IjU4V2VHc01WSUx2RkJDTjRObEdLK01zR0RrRllVbjNTQlVxQjRkbjlvc0dXOVNCVkRmMGxBRGJVZlJrdktpYlFkYUdyRjI1Ym92ZGkvL1BQOHE1Y2lBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5NDQxNjIyOTU6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVMS9ONHYyV2k1cWlBendtT2RrK0dzZThDL09IaWRSMUsvdU54NE9BeHArIn19XSwicGxhdGZvcm0iOiJzbWJpIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQyNDgwOTY1fQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
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
