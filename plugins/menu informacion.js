//7W7 PORFAVOR  DEJAME CREDITOS NO SEAS MALO XD
let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
let vn = './media/menu-informacion.mp3'
let menu =`
โญโใ ๐โก๏ธ๐โก๏ธ๐โก๏ธ๐โก๏ธ๐ ใโโฎ
 โ    โก _*AGROMOS BOT SP_* โก
 โ ๐*ยก๐ola! ${username}* ๐
 โ
 โ โ๏ธ *_MENร INFORMACION_* โ๏ธ
 โโโโโโโโโโโโโโโ
โ *<INFORMACIรN|MENUS/>*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โฑ๐ฐ _${usedPrefix}sc_โฃ 
โฃ โฑ๐ฐ _${usedPrefix}donar_
โฃ โฑ๐ฐ _${usedPrefix}infobot_
โฃ โฑ๐ฐ _${usedPrefix}grupos_
โฃ โฑ๐ฐ _${usedPrefix}instalarbot_
โฃ โฑ๐ฐ _${usedPrefix}menusimple_
โฃ โฑ๐ฐ _${usedPrefix}menuaudios_
โฃ โฑ๐ฐ _${usedPrefix}menu2_
โฃ โฑ๐ฐ _${usedPrefix}labiblia_
โฃ โฑ๐ฐ _${usedPrefix}estado_
โฃ โฑ๐ฐ _ยฟQuรฉ es un Bot?_
โฃ โฑ๐ฐ _Codigos para audios_
โฃ โฑ๐ฐ _Tรฉrminos y condiciones_
โโโโโโโโโโโโโโโโโโโโโโโโ 
โ *IMPORTANTE*
โฃ โฌโ _${usedPrefix}reglas_
โฃ โฑ๐ฐ_${usedPrefix}Bot
โโโโโโโโโโโโโโโโโโโโโโโโ 
โ *Reportar fallas*
โฃ โฌโ _${usedPrefix}bug *comando con fallas*_
โฃ โฌโ _${usedPrefix}report *comando con fallas*_
โ *instalar el bot agromos*
โโฑโป๏ธ _${usedPrefix}instalarbot_
โโโโโโโโโโโโโโโโโโโโโโโโ 
โ*agregar al bot atu grupo*
โฃ เถฌโ๐ค _${usedPrefix}join *link del grupo*_ 
โฃ เถฌโ๐ค _${usedPrefix}bots_
โโโโโโโโโโโโโโโโโโโโโโโโ 
โ *ser sub bot*
โฃ โฑ๐ _${usedPrefix}stop_
โฃ โฑ๐ _${usedPrefix}jadibot_
โฃ โฑ๐ _${usedPrefix}getcode_
โโโโโโโโโโโโโโโ
โใ ๐โก๐โก๐โก๐โก๐ ใโ`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '๐ด๐บ๐๐๐๐๐ ๐๐-๐ต๐๐', 'MENU CREADOR', `#menucreador`, '๐ผ๐ด๐ฝ๐ ๐ณ๐ด๐๐ฒ๐ฐ๐๐ถ๐ฐ๐ ', `#menudescargas`, 'La BIBLIA', `#labiblia`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'menu-informacion.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(menuinformacion)$/i
handler.fail = null
module.exports = handler
