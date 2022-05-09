function handler(m) {
  this.sendContact(m.chat, '595986731337', 'CREADOR OFICIAL DE - PARAGUA BOT', m)
  this.sendContact(m.chat, '595985958156', 'COLABORADOR OFICIAL - EL MATIAS', m)
  }
handler.help = ['contacto']
handler.tags = ['info']
 
handler.command = /^(contacto|owner|creator|creador|propietario|dueño|dueña)$/i

module.exports = handler
