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
let vn = './media/menu-bienvenidos.mp3'
let menu =`
â­âãð­ð­ð­ð­ð­ð­ð­ð­ð­ð­ð­ãââ®
 â    â¡ _*PARAGUA BOT_* â¡
 â ð*Â¡ðola! ${username}* ð
 â
 â âï¸ *_MENÃ GRUPOS_* âï¸
 âââââââââââââââ
â *<GESTION DE GRUPOS/>* 
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡
â£ â±â¡ _${usedPrefix}admins *texto*_ 
â£ â±â¡ _${usedPrefix}aÃ±adir *numero*_ 
â£ â±â¡ _${usedPrefix}sacar @tag_
â£ â±â¡ _${usedPrefix}save *@tag + nombre de contacto*_
â£ â±â¡ _${usedPrefix}daradmin *@tag*_
â£ â±â¡ _${usedPrefix}quitaradmin *@tag*_
â£ â±â¡ _${usedPrefix}grupo *abrir / cerrar*_
â£ â±â¡ _${usedPrefix}enable welcome_
â£ â±â¡ _${usedPrefix}disable welcome_
â£ â±â¡ _${usedPrefix}enable antilink_
â£ â±â¡ _${usedPrefix}disable antilink_
â£ â±â¡ _${usedPrefix}enable antilink2_
â£ â±â¡ _${usedPrefix}disable antilink2_
â£ â±â¡ _${usedPrefix}enable delete_
â£ â±â¡ _${usedPrefix}disable  delete_ 
â£ â±â¡ _${usedPrefix}link_
â£ â±â¡ _${usedPrefix}notificar *texto*_
â£ â±â¡ _${usedPrefix}setname *Nuevo nombre del grupo*_
â£ â±â¡ _${usedPrefix}setdesc *Nueva descripciÃ³n del grupo*_
â£ â±â¡ _${usedPrefix}infogrupo_
â£ â±â¡ _${usedPrefix}invocar *texto*_
â£ â±â¡ _${usedPrefix}del *responder a un mensaje del bot*_
â£ â±â¡ _${usedPrefix}fantasmas_
â£ â±â¡ _${usedPrefix}banchat_
â£ â±â¡ _${usedPrefix}unbanchat_
âââââââââââââââ
âã ðâ¡ðâ¡ðâ¡ðâ¡ð ãâ`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, 'PARAGUA-BOT', 'ð¼ð´ð½ð ðð¸ð¼ð¿ð»ð´', `#menusimple`, 'ð¼ð´ð½ð ð°ðð³ð¸ð¾ð', `#menuaudios`, 'ð¶ððð¿ð¾ ð¾ðµð¸ð²ð¸ð°ð»', `#grupos`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'menu-bienvenidos.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(menugrupos)$/i
handler.fail = null
module.exports = handler
