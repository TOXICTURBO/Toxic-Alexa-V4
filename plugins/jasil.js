const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://telegra.ph/file/f6ec3d3d845a1e3dcce39.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bᴏᴛ Nᴀᴍᴇ ᴛᴏxɪᴄ ᴀʟᴇxᴀ *

*Cʀᴇᴀᴛᴇʀ number : wa.me/916380260672?text=Hi%20ᴛᴜʀʙᴏ%20bro.%20*


 *ᴛᴜʀʙᴏ Cʜᴀɴᴀʟ : https://www.youtube.com/c/TurboMods 😁*
     
 *Iɴsᴛᴀɢʀᴀᴍ ɪᴅ: https://instagram.com/toxic_turbo777*

 *ᴛᴏxɪᴄ ᴀʟᴇxᴀ Bᴏᴛ Gʀᴏᴜᴘ: https://chat.whatsapp.com/LWjJ4tu2qe9BWQZ1JzRZgp*

 *Gɪᴛ Lɪɴᴋ : coming soon*

 *ī.am/ꪶᴛᴜʀʙᴏꫂ⁩⁩⁩*
`}) 

}));
