const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Ktb.addCommand({ pattern: 'git ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by saidali
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:ī.am/ꪶᴛᴜʀʙᴏꫂ⁩⁩⁩\n' // full name
            + 'ORG:ī.am/ꪶᴛᴜʀʙᴏꫂ⁩⁩⁩;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=916380260672:+91 6380260672\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "ī.am/ꪶᴛᴜʀʙᴏꫂ⁩⁩⁩", vcard: vcard}, MessageType.contact)
}))
