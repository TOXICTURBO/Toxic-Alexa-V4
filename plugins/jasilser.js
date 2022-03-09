/* Copyright (C) 2021 AMALSER.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Amalser - Amal
Wa.me/+918281440156
*/

const Neotro = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


Neotro.addCommand({pattern: 'help', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: 'Aʙᴜ Bᴏᴛ Oᴡɴᴇʀs Nᴜᴍʙᴇʀ', description: "⚙Bᴏᴛ Oᴡɴᴇʀ Nᴜᴍᴇʀ\n\n\n*◁ === Tɪs Oᴡɴᴇʀs Turbo & Jifi === ▷*\n\n🎭 *Alexa Bᴏᴛ Bʏ Turbo *\n 🔮 http://wa.me/+916380260672.\n\n🎭 *Alexa Bᴏᴛ Bʏ jifi*\n🔮 http://wa.me/+919995801023\n\n ", rowId:" rowid1"},
        {title: 'Gɪᴛ', description: "Alexa Bᴏᴛ Mᴀᴋɪɴɢ Lɪɴᴋ.\n\n\n*◁ === 🥰🤗 Gɪᴛ Lɪɴᴋ === ▷*\n\ncoming soon\n\n ", rowId:"rowid2"},
        {title: 'Toxic Alexa Oғғɪᴄᴀʟ Gʀᴏᴜᴘ Bʏ Turbo & Jifi', description: "Gʀᴏᴜᴘ Lɪɴᴋ .\n\n\nhttps://chat.whatsapp.com/LWjJ4tu2qe9BWQZ1JzRZgp\n\n ", rowId:" rowid5"},
        {title: 'Turbo Cʜᴀɴᴀʟ Lɪɴᴋ ', description: "Alexa Mᴀᴋɪɴɢ Vɪᴅᴇᴏ Tʜɪs Cʜᴀɴᴀʟ\n\n\n*Turbo Cʜᴀɴᴀʟ Sᴜʙsᴄʀᴀɪʙᴇ*\n\n*https://www.youtube.com/c/TurboMods* ", rowId:" rowid6"},
        {title: 'Bᴏᴛ Gʀᴏᴜᴘ Dᴇsᴄʀɪᴘᴛɪᴏɴ', description: "Nɪʏᴀᴍᴀᴍ Iɴɪ Eʟʟᴀᴠᴀʀᴋᴋᴜᴍ Bᴀᴅʜᴀᴋᴀ Mᴀɴ \n\n\n☃️ᴏɴɴᴜᴍ ɪʟʟᴀ ɢʀᴏᴜᴘ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ😁 \n\n  ", rowId:" rowid7"}
       ]
       
       const sections = [{title: "Aʙᴜ sᴇʀ ❤️", rows: rows}]
       
       const button = {
        buttonText: '💚Alexa Bᴏᴛ💚',
        description: "💖✻Toxic Alexa Bᴏᴛ✻💖",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
