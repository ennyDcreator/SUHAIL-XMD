const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347048521468";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_28_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDc5LFxuICAgICAgICA5MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDgzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg0LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMixcbiAgICAgICAgNTAsXG4gICAgICAgIDcsXG4gICAgICAgIDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDY1LFxuICAgICAgICA1OCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDc1LFxuICAgICAgICA2NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMixcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDYxLFxuICAgICAgICA5NixcbiAgICAgICAgMTMxLFxuICAgICAgICA2MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDk5LFxuICAgICAgICA5MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgxLFxuICAgICAgICAyOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICA4NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDM1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgNzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgODUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMyxcbiAgICAgICAgNjksXG4gICAgICAgIDY4LFxuICAgICAgICA3NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDcwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDU0LFxuICAgICAgICA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTEsXG4gICAgICAgIDU3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib0V0UCt1b2pqR3liUVRWQ3RLSDIzNGNPWklNVEd1STdORHBlK3JMUGFjQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVlRMazBiM0RTR3U0elphSm9FRi1PUVwiLFxuICBcInBob25lSWRcIjogXCI0NmNlNWQzMy00NjM1LTQ2ZjYtYjgzNi0zYTMwNTg3NWQ0ODhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI0LFxuICAgICAgNjEsXG4gICAgICAyNTIsXG4gICAgICAxNDUsXG4gICAgICAxMSxcbiAgICAgIDYyLFxuICAgICAgMjQxLFxuICAgICAgMjEyLFxuICAgICAgMjIsXG4gICAgICAxMzQsXG4gICAgICA3MSxcbiAgICAgIDE0MSxcbiAgICAgIDE1OCxcbiAgICAgIDE5NSxcbiAgICAgIDIzNCxcbiAgICAgIDU4LFxuICAgICAgNzksXG4gICAgICA2MyxcbiAgICAgIDE0NCxcbiAgICAgIDcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMSxcbiAgICAgIDI5LFxuICAgICAgMjAyLFxuICAgICAgMTMyLFxuICAgICAgMTA1LFxuICAgICAgMjU1LFxuICAgICAgNTMsXG4gICAgICA2NCxcbiAgICAgIDIyNSxcbiAgICAgIDE5OSxcbiAgICAgIDIxMixcbiAgICAgIDMzLFxuICAgICAgMTYsXG4gICAgICA2OSxcbiAgICAgIDIwLFxuICAgICAgMTU2LFxuICAgICAgMTUyLFxuICAgICAgMjI3LFxuICAgICAgNDIsXG4gICAgICAyMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOEJRSlAxREZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDg1MjE0Njg6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3NDUyNjI5MDA3OTc1MDoxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLbjAwWndCRUlQaHFic0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNyeGZERlNESG4zc2p0L1BQVjhXOURUK2dCVXBwSkpDVXIrSk9ZMFhSQTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRHM1dmVPVDRESWkyemk2eDhKZnFUQ2NlVHg1TWJFWnFPRS9MMTdob2JYOHgyd0x4UW9JT1V0ZHBVZGZsSzhrM3F3d2Q1MDFETVFreHJJVlNuNjhRQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNllEaTJMREZudmxBK1VJdVdNNWZmQnc3ZCthZ1VaY0N6aXpHMExVeG12WStHMDJBWWs0dmVTZ0g4eXYxZTJSZkhWeXlseUdwWW92UVhDdHJNU3cyQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0ODUyMTQ2ODoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzUwMjg4NzNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
