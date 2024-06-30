const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349133843583";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_50_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDc2LFxuICAgICAgICA5MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM1LFxuICAgICAgICA1LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNixcbiAgICAgICAgNSxcbiAgICAgICAgOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk4LFxuICAgICAgICA4OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDc4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUwLFxuICAgICAgICA5NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDczLFxuICAgICAgICA1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDQxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDk1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDYyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA5OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTkwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDksXG4gICAgICAgIDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDY0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDYxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDcsXG4gICAgICAgIDMwLFxuICAgICAgICA1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIitpcHhUSktkMENWVkdQVXVQSW5DbDIxZ0NwSVo2YUJtVGRWUzJVMUJVSVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInV6MDE3RnJHU1BhOHhZMk9fUnR4OUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTU2YTAzMzEtMWNiNy00NTMxLWIyODItYWM0MjA1ZGY0YTA4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMSxcbiAgICAgIDksXG4gICAgICAyLFxuICAgICAgMTg0LFxuICAgICAgMjMxLFxuICAgICAgMTEyLFxuICAgICAgNDMsXG4gICAgICAxNzIsXG4gICAgICAxMjksXG4gICAgICA5MyxcbiAgICAgIDI4LFxuICAgICAgMjEyLFxuICAgICAgMTg1LFxuICAgICAgMjI1LFxuICAgICAgMjA0LFxuICAgICAgMjgsXG4gICAgICA4OSxcbiAgICAgIDIxOCxcbiAgICAgIDQxLFxuICAgICAgMjA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkyLFxuICAgICAgMjIzLFxuICAgICAgMjIzLFxuICAgICAgNjMsXG4gICAgICA2MSxcbiAgICAgIDExNyxcbiAgICAgIDEwMixcbiAgICAgIDE0OCxcbiAgICAgIDI0LFxuICAgICAgMjI1LFxuICAgICAgMjU0LFxuICAgICAgMTExLFxuICAgICAgMjUxLFxuICAgICAgMjQyLFxuICAgICAgODksXG4gICAgICAxNjUsXG4gICAgICAxOTQsXG4gICAgICAxMzIsXG4gICAgICA2LFxuICAgICAgMjAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5EMzNES0dEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTMzODQzNTgzOjQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQ2h1a3d1dGVtXCIsXG4gICAgXCJsaWRcIjogXCIxMzYzNTI0Nzc3NjU3MTA6NDdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFBrdFBFRkVMejloYlFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmaDYxZ0JpUnh2eG5EVlpueFlYcVd6bi9oamEySnFrU1BPZDkvb2IweHo0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkpvUExScjFlbk5DWjZhRktBcTJnZEhROCtyQW1UUnBKaDNEdFhKaUpsbDN6bC9GVEs2UHduYVR0V1d5WGJzeHRzeU1DODYzdWNZRDVSaHlpY3J5dUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVudGczaTFFekVVamZoaDRyd3RsU3NJUUs2TDNQZ1dMVzVHd09rZkROb2lGNkUrQUNzcHdTS3ZPWGk5RDZKalE0T0c0VU9wdXpGczljbHBsT05ReGl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzM4NDM1ODM6NDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NzYyNjI0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
