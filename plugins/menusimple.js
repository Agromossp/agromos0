let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
//    pp = await conn.getProfilePicture(who)
} catch (e) {
} finally {
let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let username = conn.getName(who)
let str = `
â­ââã ðâ¡ðâ¡ð ãââ®
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡
ââ¤ *ððola, ${username}ð*
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡
â°âââ¡ðâ¡ðâ¡ðââââ¯
âââââââââââââââ
â *<MENU SIMPLE/>*
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡
â£ â±â _${usedPrefix}sc_
â£ â±â _${usedPrefix}donar_
â£ â±â _${usedPrefix}infobot_
â£ â±â _${usedPrefix}grupos_
â£ â±â _${usedPrefix}instalarbot_
â£ â±â _${usedPrefix}menusimple_
â£ â±â _${usedPrefix}menuaudios_
â£ â±â _${usedPrefix}menu2_
â£ â±â _${usedPrefix}labiblia_
â£ â±â _${usedPrefix}estado_
â£ â±â _Â¿QuÃ© es un Bot?_
â£ â±â _Codigos para audios_
â£ â±â _TÃ©rminos y condiciones_
â£ â±â_${usedPrefix}reglas_
â£ â±ð¹ï¸ _${usedPrefix}ytcomment_
â£ â±ð° _${usedPrefix}creditos_
â£ â±ð³ð _${usedPrefix}cuentasanime_
â£ â±ð³ð _$usedPrefix}cuentaspotify_
â£ â±ð¥ _${usedPrefix}menunuevo
â£ â±â»ï¸ _${usedPrefix}instalarbot_
â£ â±ð¬ _${usedPrefix}bug_
â£ â±ð¬ _${usedPrefix}report_
â£ â±ð¤ _${usedPrefix}join_ 
â£ â±ð¤ _${usedPrefix}bots_
â£ à¶¬âðï¸ _${usedPrefix}top10gays_
â£ à¶¬âðï¸ _${usedPrefix}toplind@s_
â£ à¶¬âðï¸ _${usedPrefix}topput@s_
â£ à¶¬âðï¸ _${usedPrefix}toppajer@s_
â£ à¶¬âðï¸ _${usedPrefix}topotakus_
â£ à¶¬âð» _${usedPrefix}agromos_
â£ à¶¬âð¹ _${usedPrefix}math_
â£ à¶¬âð® _${usedPrefix}ttt_
â£ à¶¬âð¹ _${usedPrefix}delttt_
â£ à¶¬âð® _${usedPrefix}2gay_
â£ à¶¬âð¹ _${usedPrefix}gay_
â£ à¶¬âð® _${usedPrefix}lesbi_
â£ à¶¬âð¹ _${usedPrefix}pajero_
â£ à¶¬âð® _${usedPrefix}pajera_
â£ à¶¬âð¹ _${usedPrefix}puta_
â£ à¶¬âð® _${usedPrefix}puto_
â£ à¶¬âð¹ _${usedPrefix}rata_
â£ à¶¬âð® _${usedPrefix}manco_
â£ à¶¬âð¹ _${usedPrefix}manca_
â£ à¶¬âð® _${usedPrefix}formarpareja_
â£ à¶¬âð¹ _${usedPrefix}dado_
â£ à¶¬âð® _${usedPrefix}simsimi_
â£ à¶¬âð¹ _${usedPrefix}formartrio_
â£ à¶¬âð® _${usedPrefix}love_
â£ à¶¬âð¹ _${usedPrefix}amigorandom_
â£ à¶¬âð® _${usedPrefix}slot_
â£ à¶¬âð¹ _${usedPrefix}ppt_
â£ à¶¬âð® _${usedPrefix}prostituta_
â£ à¶¬âð¹ _${usedPrefix}prostituto_
â£ à¶¬âð¥ _${usedPrefix}imagen_
â£ à¶¬âð¥ _${usedPrefix}ytsearch_
â£ à¶¬âð¥ _${usedPrefix}dlaudio_
â£ à¶¬âð¥ _${usedPrefix}dlvid_
â£ à¶¬âð¥ _${usedPrefix}ytmp3_
â£ à¶¬âð¥ _${usedPrefix}ytmp4_
â£ à¶¬âð¥ _${usedPrefix}ytmp4.2_
â£ à¶¬âð¥ _${usedPrefix}play_
â£ à¶¬âð¥ _${usedPrefix}play2_
â£ à¶¬âð¥ _${usedPrefix}play3_
â£ à¶¬âð¥ _${usedPrefix}play4_
â£ à¶¬âð¥ _${usedPrefix}letra_
â£ à¶¬âð¥ _${usedPrefix}google_
â£ à¶¬âð¥ _${usedPrefix}googlef_
â£ à¶¬âð¥ _${usedPrefix}wikipedia_
â£ à¶¬âð¥ _${usedPrefix}pinterestvideo_
â£ à¶¬âð¥ _${usedPrefix}tiktokaudio_
â£ à¶¬âð¥ _${usedPrefix}tiktok_
â£ à¶¬âð¥ _${usedPrefix}spotify_
â£ à¶¬âð¥ _${usedPrefix}acortar_
â£ à¶¬âð¥ _${usedPrefix}pinterest_
â£ à¶¬âð¥ _${usedPrefix}xnxx_
â£ à¶¬âð¥ _${usedPrefix}xnxxsearch_
â£ à¶¬âð¥ _${usedPrefix}ssweb_
â£ à¶¬âð¥ _${usedPrefix}igstory_
â£ à¶¬âð¥ _${usedPrefix}igstalk_
â£ à¶¬âð¥ _${usedPrefix}animeinfo_
â£ à¶¬âð¥ _${usedPrefix}twvid_
â£ à¶¬âð _${usedPrefix}admins_ 
â£ à¶¬âð _${usedPrefix}aÃ±adir_ 
â£ à¶¬âð _${usedPrefix}sacar_ 
â£ à¶¬âð _${usedPrefix}save_
â£ à¶¬âð _${usedPrefix}daradmin_
â£ à¶¬âð _${usedPrefix}quitaradmin_
â£ à¶¬âð _${usedPrefix}grupo abrir/cerrar_
â£ à¶¬âð _${usedPrefix}enable welcome_
â£ à¶¬âð _${usedPrefix}disable welcome_
â£ à¶¬âð _${usedPrefix}enable antilink_
â£ à¶¬âð _${usedPrefix}disable antilink_
â£ à¶¬âð _${usedPrefix}enable antilink2_
â£ à¶¬âð _${usedPrefix}disable antilink2_
â£ à¶¬âð _${usedPrefix}enable delete_
â£ à¶¬âð _${usedPrefix}disable  delete_ 
â£ à¶¬âð _${usedPrefix}link_
â£ à¶¬âð _${usedPrefix}notificar_
â£ à¶¬âð _${usedPrefix}setname_
â£ à¶¬âð _${usedPrefix}setdesc_
â£ à¶¬âð _${usedPrefix}infogrupo_
â£ à¶¬âð _${usedPrefix}invocar_
â£ à¶¬âð _${usedPrefix}del_
â£ à¶¬âð _${usedPrefix}fantasmas_
â£ à¶¬âð _${usedPrefix}banchat_
â£ à¶¬âð _${usedPrefix}unbanchat_
â£ à¶¬âð§§ _${usedPrefix}s_
â£ à¶¬âð§§ _${usedPrefix}sticker_
â£ à¶¬âð§§ _${usedPrefix}semoji_
â£ à¶¬âð§§ _${usedPrefix}wasted_
â£ à¶¬âð§§ _${usedPrefix}stonks_
â£ à¶¬âð§§ _${usedPrefix}trash_
â£ à¶¬âð§§ _${usedPrefix}rainbow_
â£ à¶¬âð§§ _${usedPrefix}circle_
â£ à¶¬âð§§ _${usedPrefix}trigger_
â£ à¶¬âð§§ _${usedPrefix}stickermaker_
â£ à¶¬âð§§ _${usedPrefix}attp_
â£ à¶¬âð§§ _${usedPrefix}style_
â£ à¶¬âð§§ _${usedPrefix}attp2_
â£ à¶¬âð§§ _${usedPrefix}stickerfilter_
â£ à¶¬âð§§ _${usedPrefix}mp3_
â£ à¶¬âð§§ _${usedPrefix}img_
â£ à¶¬âð§§ _${usedPrefix}blur_
â£ à¶¬âð§§ _${usedPrefix}swm_
â£ à¶¬âð§§ _${usedPrefix}gif_
â£ à¶¬âð§§ _${usedPrefix}tovideo_
â£ à¶¬âð¾ _${usedPrefix}frase_
â£ à¶¬âð¾ _${usedPrefix}futbol_
â£ à¶¬âð¾ _${usedPrefix}Messi_
â£ à¶¬âð¾ _${usedPrefix}animal_
â£ à¶¬âð¾ _${usedPrefix}meme_
â£ à¶¬âð¾ _${usedPrefix}meme2_
â£ à¶¬âð¾ _${usedPrefix}meme3_
â£ à¶¬âð¾ _${usedPrefix}cat_
â£ à¶¬âð¾ _${usedPrefix}dog_
â£ à¶¬âð¾ _${usedPrefix}pikachu_
â£ à¶¬âð¾ _${usedPrefix}waifu_
â£ à¶¬âð¾ _${usedPrefix}blackpink_
â£ à¶¬âð¾ _${usedPrefix}reto_
â£ à¶¬âð¾ _${usedPrefix}verdad_
â£ à¶¬âð¾ _${usedPrefix}imagenrandom_
â£ à¶¬âð¾ _${usedPrefix}neko_
â£ à¶¬âð¾ _${usedPrefix}lolivid_
â£ à¶¬âð¾ _${usedPrefix}iqtest_
â£ à¶¬âð¾ _${usedPrefix}kpopitzy_
â£ à¶¬âð¾ _${usedPrefix}navidad_
â£ à¶¬âð¾ _${usedPrefix}loli_
â£ à¶¬âð¾ _${usedPrefix}gawrgura_
â£ à¶¬âð¾ _${usedPrefix}miku_
â£ à¶¬âð¾ _${usedPrefix}nyan_
â£ à¶¬âð¾ _${usedPrefix}pat_
â£ à¶¬âð¾ _${usedPrefix}itachi_
â£ à¶¬âð¾ _${usedPrefix}slap_
â£ à¶¬âð¾ï¸ _${usedPrefix}pat_
â£ à¶¬âð¾ _${usedPrefix}perfil_
â£ à¶¬âð¾ _${usedPrefix}scan_
â£ à¶¬âð¾ _${usedPrefix}kpop_
â£ à¶¬âð¾ _${usedPrefix}qr_
â£ à¶¬âð¾ _${usedPrefix}afk_
â£ à¶¬âð¾ _${usedPrefix}CristianoRonaldo_
â£ à¶¬âð¾ _${usedPrefix}pregunta_
â£ à¶¬âð¾ _${usedPrefix}mention_
â£ à¶¬âð¾ _${usedPrefix}spamchat_
â£ à¶¬âð¾ _${usedPrefix}traducir es_
â£ à¶¬âð¾ _${usedPrefix}zodiac_
â£ à¶¬âð¾ _${usedPrefix}readmore_
â£ à¶¬âð¾ _${usedPrefix}calc_ 
â£ à¶¬âð¾ _${usedPrefix}spamwa_
â£ à¶¬âð¾ _${usedPrefix}readqr_
â£ à¶¬âð¾ _${usedPrefix}anime_
â£ à¶¬âð¾ _${usedPrefix}subirestado_
â£ à¶¬âð _${usedPrefix}labiblia_
â£ à¶¬âð¤ _${usedPrefix}bass_
â£ à¶¬âð¤ _${usedPrefix}deep_
â£ à¶¬âð¤ _${usedPrefix}earrape_
â£ à¶¬âð¤ _${usedPrefix}fast_
â£ à¶¬âð¤ _${usedPrefix}fat_
â£ à¶¬âð¤ _${usedPrefix}nightcore_
â£ à¶¬âð¤ _${usedPrefix}reverse_
â£ à¶¬âð¤ _${usedPrefix}robot_
â£ à¶¬âð¤ _${usedPrefix}slow_
â£ à¶¬âð¤ _${usedPrefix}smooth_
â£ à¶¬âð¤ _${usedPrefix}vibracion_
â£ à¶¬âð _${usedPrefix}menu2_
â£ à¶¬âð _${usedPrefix}menuaudios_
â£ à¶¬âð³ _${usedPrefix}start_
â£ à¶¬âð³ _${usedPrefix}next_
â£ à¶¬âð³ _${usedPrefix}leave_
â£ à¶¬âð· _${usedPrefix}stop_
â£ à¶¬âð· _${usedPrefix}jadibot_
â£ à¶¬âð· _${usedPrefix}getcode_
â£ à¶¬âðï¸ _${usedPrefix}logos_ 
â£ à¶¬âðï¸ _${usedPrefix}lolice_
â£ à¶¬âðï¸ _${usedPrefix}simpcard_
â£ à¶¬âðï¸ _${usedPrefix}hornycard_ 
â£ à¶¬âðï¸ _${usedPrefix}lblackpink_
â£ à¶¬âðï¸ _${usedPrefix}neon_
â£ à¶¬âðï¸ _${usedPrefix}tahta_
â£ à¶¬âðï¸ _${usedPrefix}nulis_
â£ à¶¬âðï¸ _${usedPrefix}horror_
â£ à¶¬âðï¸ _${usedPrefix}nulis2_
â£ à¶¬âðï¸ _${usedPrefix}lolice_
â£ à¶¬âðï¸ _${usedPrefix}simpcard_
â£ à¶¬âðï¸ _${usedPrefix}logosky_ 
â£ à¶¬âðï¸ _${usedPrefix}logocolor_
â£ à¶¬âðï¸ _${usedPrefix}logogura_ 
â£ à¶¬âðï¸ _${usedPrefix}logololi_
â£ à¶¬âðï¸ _${usedPrefix}neonheart_
â£ à¶¬âðï¸ _${usedPrefix}logocorazon_
â£ à¶¬âðï¸ _${usedPrefix}logosad_
â£ à¶¬âðï¸ _${usedPrefix}logowolf_
â£ à¶¬âðï¸ _${usedPrefix}logovintage_
âââââââââââââââ
`.trim()
let mentionedJid = [who]
conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
}}
handler.command = /^(menusimple)$/i
handler.fail = null
module.exports = handler
