let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')

let handler = async (m, { conn, usedPrefix }) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '❰ ⚠️ ❱ ALTO HAY PAJERO  EN ESTE GRUPO NO SE PERMITE COMANDOS PORNO POR DESION DE UN ADM🔞 *Función Nsfw Desactivada*\n*Escriba #on nsfw para activar esta Función.*'

let pp = './+18.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
let vn = './media/mariana.mp3'
let menu =`
╭══〘 💚⚡💚⚡💚 〙═╮
║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 
║➤ *💚𝗛ola, ${username}💚*
║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 
╰══╡💚⚡💚⚡💚╞══╯
┏━━━━━━━━━━━━━┓
┃ *<MENU +18/>*
║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 
┃   *🥵🔥  IMAGENES🥵🔥*
┣ ➬🔞 _${usedPrefix}imglesbians_
┣ ➬🔞 _${usedPrefix}porno_
┣ ➬🔞 _${usedPrefix}randomnsfw_
┣ ➬🔞 _${usedPrefix}sideboobs_
┣ ➬🔞 _${usedPrefix}hentai_
┣ ➬🔞 _${usedPrefix}pene_
┣ ➬🔞 _${usedPrefix}ecchi_
┣ ➬🔞 _${usedPrefix}pussy_
┣ ➬🔞 _${usedPrefix}boobs_
┣ ➬🔞 _${usedPrefix}panties_
┣ ➬🔞 _${usedPrefix}porno2_
┣ ➬🔞 _${usedPrefix}yaoi_
┣ ➬🔞 _${usedPrefix}yuri_
┣ ➬🔞 _${usedPrefix}pack_
┣ ➬🔞 _${usedPrefix}pack2_
┣ ➬🔞 _${usedPrefix}pack3_
┣ ➬🔞 _${usedPrefix}loli2_
┣ ➬🔞 _${usedPrefix}muslos_
┣ ➬🔞 _${usedPrefix}muslitos_
┣ ➬🔞 _${usedPrefix}booty_
┣ ➬🔞 _${usedPrefix}htrap_
┣ ➬🔞 _${usedPrefix}furro_
┣ ➬🔞 _${usedPrefix}nsfwass_
┣ ➬🔞 _${usedPrefix}bdsm_
┣ ➬🔞 _${usedPrefix}cum_
┣ ➬🔞 _${usedPrefix}ero_
┣ ➬🔞 _${usedPrefix}femdom_
┣ ➬🔞 _${usedPrefix}foot_
┣ ➬🔞 _${usedPrefix}pies_
┣ ➬🔞 _${usedPrefix}glass_
┣ ➬🔞 _${usedPrefix}yuri_
┣ ➬🔞 _${usedPrefix}nsfwloli_
║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 
┃  *VIDEOS🥵🔥*
┣ ➬🔞 _${usedPrefix}video_
┣ ➬🔞 _${usedPrefix}pornobivid_
┣ ➬🔞 _${usedPrefix}pornoaleatorio_
┣ ➬🔞 _${usedPrefix}pornovid/pornovideo_
┣ ➬🔞 _${usedPrefix}pornogayvid_
┣ ➬🔞 _${usedPrefix}pornolesbivid/pornolesbianavid_
║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 
┃  *STICKERS🥵🔥*
┣ ➬🔞 _${usedPrefix}pornogif_
┣ ➬🔞 _${usedPrefix}porno2_
┣ ➬🔞 _${usedPrefix}yaoigif_
┣ ➬🔞 _${usedPrefix}nekogif_
┣ ➬🔞 _${usedPrefix}yurigif_
┗━━━━━━━━━━━━━┛`.trim()
let mentionedJid = [who]
conn.sendButtonImg(m.chat, pp, menu, 'Paragua- Bot', 'MENU DESCARGAS', `#menudescargas`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'ora.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})}
handler.command = /^(labiblia)$/i
handler.fail = null
module.exports = handler
