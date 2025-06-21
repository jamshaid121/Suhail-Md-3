const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923497749223";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923497749223";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_16_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI4LFxuICAgICAgICAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYxLFxuICAgICAgICA0MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDkwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NCxcbiAgICAgICAgNixcbiAgICAgICAgMTExLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODgsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA3NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTExLFxuICAgICAgICA2NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMyLFxuICAgICAgICAwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk3LFxuICAgICAgICA4NyxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxODksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAzMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDc3LFxuICAgICAgICAyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDUxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MixcbiAgICAgICAgNTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDMsXG4gICAgICAgIDIxLFxuICAgICAgICAzMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDExLFxuICAgICAgICA3MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA5LFxuICAgICAgICA0MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODYsXG4gICAgICAgIDkyLFxuICAgICAgICA4NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDgwLFxuICAgICAgICA3NixcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDkwLFxuICAgICAgICAzMixcbiAgICAgICAgNzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDksXG4gICAgICAgIDYxLFxuICAgICAgICA0NSxcbiAgICAgICAgODUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDUwLFxuICAgICAgICA5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvRFIwZmYrQ0lqaTRtTXhwaVN3QWR0Qjk2S0J2cTRPbEIxYWV0UVlrU1FZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaOEpPbDFiQlRyT3hBazZtLVZVQVl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjMzZTBlZWNhLTk4YWMtNDA3Ny05NTYxLTc5NzgxODBhYTI5ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjksXG4gICAgICAyMTYsXG4gICAgICAxNzgsXG4gICAgICAyMzksXG4gICAgICA0OSxcbiAgICAgIDQ0LFxuICAgICAgMjQsXG4gICAgICAyNTEsXG4gICAgICAxMzYsXG4gICAgICAxMzIsXG4gICAgICAyNDAsXG4gICAgICA3NCxcbiAgICAgIDI1MCxcbiAgICAgIDYsXG4gICAgICAxNTYsXG4gICAgICA1MyxcbiAgICAgIDE1LFxuICAgICAgMTAzLFxuICAgICAgMTUsXG4gICAgICAyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc2LFxuICAgICAgMjA1LFxuICAgICAgMjE3LFxuICAgICAgMTY3LFxuICAgICAgMzksXG4gICAgICAyMSxcbiAgICAgIDE5MyxcbiAgICAgIDg3LFxuICAgICAgOTYsXG4gICAgICAzNixcbiAgICAgIDIxOCxcbiAgICAgIDE3OCxcbiAgICAgIDIyMCxcbiAgICAgIDIxOSxcbiAgICAgIDExNSxcbiAgICAgIDI0LFxuICAgICAgMTc1LFxuICAgICAgODgsXG4gICAgICA5NixcbiAgICAgIDM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGVTcCtNSEVPMm8yc0lHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0QWQzVkk0S1VISGJBc2c0WEJnWlhOcHhFM0Jidkc5SE5GeVczRGxiMGswPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNTU28vblZUN1lGRWt5NHhKemRKVXByWjRMcXBLWVVEZlhqS2x0aGVqK1hBSVdYVWlpMGMwckxhSlFrYmRQSWFKVzB4S2dubE5qUVZCTU5jQ0wreUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlpnNU5XSjU4dnJlcEhjMHZLYkNoRG52cDgzQW81MUovQXZRenl6Zm5kNDJpM1RVaXJkaVh4SVZYLy94ODdWZ3dyY0c2VWJsa2FnOTNDVzhnWUFtUkFBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDk3NzQ5MjIzOjkyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDM2MjA4Njc1NDMxMDI6OTJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0OTc3NDkyMjM6OTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzUwNTA0NTYwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTHdJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMd0cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4TkpxWGd4aUN6alNNMTVxVi9jOXRGVHhkK0p5T3FGZkdwMlFkUDJPSFo4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwODczMDc2MzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUx3SC5qc29uIjogIntcImtleURhdGFcIjpcImZMYTRoeFlCcmdnTEx1U1BvVlVHcWZMM1RaMlZrQmhmdjFYQTFYN2dyQms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA4NzMwNzYzOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc1MDM1MjMyOTA3MFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUx3SS5qc29uIjogIntcImtleURhdGFcIjpcIktWQkRyNlR2cnhDeTg0cVdqRk9iQnJLdjR4ejBxMnhrclBsVG1jQmpiNXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA4NzMwNzYzOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzUwMzUyMzgyODk1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Asad",
  packname: process.env.PACK_NAME || "Asad💗",
  botname : process.env.BOT_NAME  || "ASAD-MD",
  ownername:process.env.OWNER_NAME|| "ASAD MALIK",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ASAD"  ).toUpperCase(),



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
