let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')

let handler = async (m, { conn, usedPrefix }) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw 'โฐ โ ๏ธ โฑ ALTO HAY PAJERO  EN ESTE GRUPO NO SE PERMITE COMANDOS PORNO POR DESION DE UN ADM๐ *Funciรณn Nsfw Desactivada*\n*Escriba #on nsfw para activar esta Funciรณn.*'

let pp = './+18.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
let vn = './media/mariana.mp3'
let menu =`
โญโโใ ๐โก๐โก๐ ใโโฎ
โโโโโโโโโโโโโโโโโโโโโโโโ 
โโค *๐๐ola, ${username}๐*
โโโโโโโโโโโโโโโโโโโโโโโโ 
โฐโโโก๐โก๐โก๐โโโโฏ
โโโโโโโโโโโโโโโ
โ *<MENU +18/>*
โโโโโโโโโโโโโโโโโโโโโโโโ 
โ   *๐ฅต๐ฅ  IMAGENES๐ฅต๐ฅ*
โฃ โฌ๐ _${usedPrefix}imglesbians_
โฃ โฌ๐ _${usedPrefix}porno_
โฃ โฌ๐ _${usedPrefix}randomnsfw_
โฃ โฌ๐ _${usedPrefix}sideboobs_
โฃ โฌ๐ _${usedPrefix}hentai_
โฃ โฌ๐ _${usedPrefix}pene_
โฃ โฌ๐ _${usedPrefix}ecchi_
โฃ โฌ๐ _${usedPrefix}pussy_
โฃ โฌ๐ _${usedPrefix}boobs_
โฃ โฌ๐ _${usedPrefix}panties_
โฃ โฌ๐ _${usedPrefix}porno2_
โฃ โฌ๐ _${usedPrefix}yaoi_
โฃ โฌ๐ _${usedPrefix}yuri_
โฃ โฌ๐ _${usedPrefix}pack_
โฃ โฌ๐ _${usedPrefix}pack2_
โฃ โฌ๐ _${usedPrefix}pack3_
โฃ โฌ๐ _${usedPrefix}loli2_
โฃ โฌ๐ _${usedPrefix}muslos_
โฃ โฌ๐ _${usedPrefix}muslitos_
โฃ โฌ๐ _${usedPrefix}booty_
โฃ โฌ๐ _${usedPrefix}htrap_
โฃ โฌ๐ _${usedPrefix}furro_
โฃ โฌ๐ _${usedPrefix}nsfwass_
โฃ โฌ๐ _${usedPrefix}bdsm_
โฃ โฌ๐ _${usedPrefix}cum_
โฃ โฌ๐ _${usedPrefix}ero_
โฃ โฌ๐ _${usedPrefix}femdom_
โฃ โฌ๐ _${usedPrefix}foot_
โฃ โฌ๐ _${usedPrefix}pies_
โฃ โฌ๐ _${usedPrefix}glass_
โฃ โฌ๐ _${usedPrefix}yuri_
โฃ โฌ๐ _${usedPrefix}nsfwloli_
โโโโโโโโโโโโโโโโโโโโโโโโ 
โ  *VIDEOS๐ฅต๐ฅ*
โฃ โฌ๐ _${usedPrefix}video_
โฃ โฌ๐ _${usedPrefix}pornobivid_
โฃ โฌ๐ _${usedPrefix}pornoaleatorio_
โฃ โฌ๐ _${usedPrefix}pornovid/pornovideo_
โฃ โฌ๐ _${usedPrefix}pornogayvid_
โฃ โฌ๐ _${usedPrefix}pornolesbivid/pornolesbianavid_
โโโโโโโโโโโโโโโโโโโโโโโโ 
โ  *STICKERS๐ฅต๐ฅ*
โฃ โฌ๐ _${usedPrefix}pornogif_
โฃ โฌ๐ _${usedPrefix}porno2_
โฃ โฌ๐ _${usedPrefix}yaoigif_
โฃ โฌ๐ _${usedPrefix}nekogif_
โฃ โฌ๐ _${usedPrefix}yurigif_
โโโโโโโโโโโโโโโ`.trim()
let mentionedJid = [who]
conn.sendButtonImg(m.chat, pp, menu, 'Paragua- Bot', 'MENU DESCARGAS', `#menudescargas`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'ora.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})}
handler.command = /^(labiblia)$/i
handler.fail = null
module.exports = handler
