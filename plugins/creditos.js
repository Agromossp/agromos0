let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭═════• 🎭🎭🎭 •═════╮ 

*paragua bot por el paragua bot tiene funciones que pertenezcan a las siguentes Empresa(s)|Organizacion(es)|Persona(s):*

 🔰BrunoSobrino 
THE SHADOW BROKERS 

🔰Gatanina
𝐺𝐴𝑇𝐴 𝐵𝑂𝑇

 
╰═════• 🎭🎭🎭 •═════╯
`.trim() 
//¡GRACIAS!
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Paragua🇵🇾Bot', 'status@broadcast')
}
handler.command = /^(creditos|CREDITOS|Creditos|Credito|Crédito)$/i

module.exports = handler
