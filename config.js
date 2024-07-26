const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ameermuavia604@gmail.com"
global.location="Chiniot,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/Fn1RXt1oBN0Gc6DEw9OOnT";
global.website=process.env.GURL || "https://chat.whatsapp.com/Fn1RXt1oBN0Gc6DEw9OOnT" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/Cb81NxN/251.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐀𝐌𝐄𝐄𝐑 𝐌𝐔𝐀𝐖𝐈𝐘𝐀" 


global.devs = "923456148137" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923456148137";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_49_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDYwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDUsXG4gICAgICAgIDQsXG4gICAgICAgIDM1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDMzLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY4LFxuICAgICAgICAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTksXG4gICAgICAgIDkwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDM4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDUyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTExLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA2LFxuICAgICAgICA4NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDc5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjExLFxuICAgICAgICA4MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyLFxuICAgICAgICAxLFxuICAgICAgICA3MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDk4LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK3owS00vOGhrcGpQb1dmZm5sLzBFMVp0dUlkS1RnaC9VTzB2Q3RzN2JPbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwielJjck5NYUFTNVctYUpYcTlSNnQ0UVwiLFxuICBcInBob25lSWRcIjogXCJjNjEzMjRjZi00YTk3LTRhZTgtODg4Mi02NzMxNjc3N2Y1NzJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzYsXG4gICAgICAxMjAsXG4gICAgICA0MCxcbiAgICAgIDEyLFxuICAgICAgMTQ5LFxuICAgICAgNzksXG4gICAgICAxMSxcbiAgICAgIDM4LFxuICAgICAgMTU3LFxuICAgICAgNDcsXG4gICAgICAxNjgsXG4gICAgICA1MixcbiAgICAgIDIxNCxcbiAgICAgIDM0LFxuICAgICAgOTAsXG4gICAgICAxOCxcbiAgICAgIDEwMSxcbiAgICAgIDE0LFxuICAgICAgNyxcbiAgICAgIDE2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDMsXG4gICAgICAxMTIsXG4gICAgICAyMTksXG4gICAgICAxMCxcbiAgICAgIDIxOSxcbiAgICAgIDIzNCxcbiAgICAgIDIxOCxcbiAgICAgIDIyOCxcbiAgICAgIDcwLFxuICAgICAgMzcsXG4gICAgICAxOTEsXG4gICAgICA0NSxcbiAgICAgIDIwNyxcbiAgICAgIDAsXG4gICAgICAyMjcsXG4gICAgICAyMjksXG4gICAgICAyMDIsXG4gICAgICAxNTUsXG4gICAgICA4MCxcbiAgICAgIDg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhWQTdSWUMzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0NTYxNDgxMzc6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuC8hOG2nMqz4bWD4ba7yrjwnZmx8J2ZvvCdmogg4L+QXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxu5LqXIPCdkIDwnZCM8J2QhPCdkITwnZCRIPCdkIzwnZCU8J2QgPCdkJbwnZCI8J2QmPCdkIAg5LqXXCIsXG4gICAgXCJsaWRcIjogXCIxOTE3MzY0MTY2MjQ4NDE6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMMml0c0lIRUtYaWpiVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkN1d2grZU5DNTRZK3k0MzJJY3JYQW5WRDB4ZHFWOXA2Z1BtMTROUFY2Z009XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNlN6MDVBTStlWVF2U3RROTY4S3FTMVIvSUxJQ2NXT3htT2pPQ1p6M0hOYUZIUnN4WmZEcDhodE1iemIxME1LLzcrRzFhQWFMbnBzdWg5S01wUnIvRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZHFFclNURjRZQ2ZpcFpzbHNjTjRqdHRHNURnRWxESTg1Nk41L1lKZjBkOEhidFJzK2dGYlhVRTM2dVVudS9hVW5LRm1XSE95eTRpYWFUY2ZScVYvRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDU2MTQ4MTM3OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5ODczNzFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐀𝐌𝐄𝐄𝐑 𝐌𝐔𝐀𝐖𝐈𝐘𝐀 』```"
 
  author : process.env.PACK_AUTHER|| "𝐀𝐌𝐄𝐄𝐑 𝐌𝐔𝐀𝐖𝐈𝐘𝐀",
  packname: process.env.PACK_NAME || "𝐀𝐌𝐄𝐄𝐑 𝐌𝐔𝐀𝐖𝐈𝐘𝐀",
  botname : process.env.BOT_NAME  || "𝐀𝐌𝐄𝐄𝐑 𝐌𝐔𝐀𝐖𝐈𝐘𝐀",
  ownername:process.env.OWNER_NAME|| "𝐀𝐌𝐄𝐄𝐑 𝐌𝐔𝐀𝐖𝐈𝐘𝐀",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "iWEwbzUZCZ2pHHFHm13tXbJk",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
