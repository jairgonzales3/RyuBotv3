/*let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*α¦ πππππΌππ:* ${pesan}`
let teks = `β­βγ *πππππΎπΌππΏπ πΌπ πππππ* γββ¬£\n\n${oi}\n\n`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
for (let username of participants) {
teks += `ββ₯ @${username.id.split('@')[0]}\n`}
teks += `β°ββββββ[ *π  ${vs}* ]ββββββ¬£`
//conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  
conn.sendHydrated(m.chat, teks, `ππ©ππ¦πͺππ©ππ¨ | ${wm}`, null, 'https://github.com/GataNina-Li/GataBot-MD', 'ππ’ππ‘ππ­π­π’ ππ¨π­', null, null, [
['ππ£π«π€πππ§ π€π©π§π π«ππ― π£', `${usedPrefix + command}`],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ β', '.menu']
], m, { mentions: participants.map(a => a.id) })  
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocaciΓ³n)$/i
handler.botAdmin = true
handler.admin = true
handler.group = true
export default handler */



let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*α¦ πππππΌππ:* ${pesan}`
let teks = `β­βγ *πππππΎπΌππΏπ πΌπ πππππ* γββ¬£\n\n${oi}\n\n`
for (let mem of participants) {
teks += `ββ₯ @${mem.id.split('@')[0]}\n`}
teks += `β°βββββ[ *π  ${vs}* ]ββββββ¬£`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocaciΓ³n)$/i
handler.admin = true
handler.group = true
export default handler
