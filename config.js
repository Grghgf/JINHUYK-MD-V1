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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0pYYWpCS0VNUzF6c2F5MU5TMjU3UmtYODVIRzVzVUdHVW5zbGFPTjMyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiLzJIdHZPOGozSmlCZDJZaGhXaG1XSW1oWGs3enJBZkFNTmNYTnY2cjB6dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSnhNNit6c3B5TXlMN0R4YkhmQVMyVlUvZDlIWjd1ZE9pYWR4WmxMNm1NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwLzlidEFaZGhBb1ozcVNVQzdpT2IvRk00WHZJK3A2c2d2dGNjNmdtbjBJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1OQlh2ODI3T3dURTNLdHRSNEdOWm1xZ1NaSDlrQ1FkZndkNnd0Rnp6R0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhNSmlpMTE3ZWl0eHR1WkptanZId1RuUjFoUllWWmQ5Mko3UDNGdkdPbkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic042a3pQaFd3L0xFdVJjK1Y0T2x5TWNqanNJTTVWSnFNZE4wcWNSYTQzdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRnEyN0tPdnhBS1hxQklrSlM4czJSVWxZZEQwdGhJNXRSeXBCOUNBMFQybz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldkZXJKd2hpL0ZEbzMvYk8xcGtUdWNWSHVYYmJyMERWamk4Wk9GVWN1MllhaFNPblZGVEZ4NzJZV0g5Qm5mSHY2MTZ5M01SdTU4QjRBVFVhWDhudmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5IjoidGRWcmlyTExlakVpRkh0RXY1aVQvWlU5Ly8vR28vM3FEdmtDUDFrYUthND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNllBN2dYS2VSM3VNeUlpeUE3OXJzZyIsInBob25lSWQiOiI5N2ExMzk5Mi0xNGJjLTRmYTUtOWI2Yy05NTRmMDZmZjlkNzUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGdwNVozOWQ1bS9JdkgvUnl4c2huMFJOUWdvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5qcWRXeGNMSS9KWUZwVTZjanE5WktPUDFQcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJYS0VHQkdNMiIsIm1lIjp7ImlkIjoiMjQyMDY5MjgzOTY2OjEwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkxhbWVsbyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkt1bllvREVLS08rcjhHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQ1lyUGFaZHJSSmV2OUdxQU53cGxQU3lpdjh3Nzc5OTdHeHZReG9JNTdTUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiU0Y4cWk5Sy9YRWM0ZW5xZWg5STZMZSt4S1NLem1IdFo3bFVqY2puM0ZwaFlQakZoeGNRNkpoL28wL0lOMDhpbDhjZGxvcjZDTjM5OXRBcCt3OTZEakE9PSIsImRldmljZVNpZ25hdHVyZSI6InJBTjluMXhSRDFzUDAzQVhiR29seHFQT2NjMFhpbzV6OW9yRk1TTEZicmRCYzhvT0tpUE1wWVE4VHlvMFBZQk5WRWVVam1zWU9UQlkwUnhwWThrN2dBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQyMDY5MjgzOTY2OjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFtS3oybVhhMFNYci9ScWdEY0taVDBzb3IvTU8rL2ZleHNiME1hQ09lMGsifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDQ3MzQwMDAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRExYIn0="
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
