import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
export function before(m, { conn }) {
//if (!db.data.chats[m.chat].autonivel && m.isGroup) throw 
	
let user = global.db.data.users[m.sender]
if (!user.autolevelup) //throw `${ag}ππ πΌππππππππ ππππΌ πΏπππΌπΎππππΌπΏπ πππ *#on autonivel* ππΌππΌ πΌπΎππππΌπ\n\nπππ πΌππππππππ ππππ πΏπππΌπ½πππΏ πππ *#on autonivel* ππ πππΌπ½ππ`
  return !0
	
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
 if (before !== user.level) {
	  
/*m.reply(`
*β­βββ[ πππππ | πππππ ]βββββ¬£*
*β NIVEL ANTERIOR: ${before}*
*ββββββββββββββββββ*
*β NIVEL ACTUAL: ${user.level}*
*ββββββββββββββββββ*
*β FECHA: ${new Date().toLocaleString('id-ID')}*
*β°βββγ π  ${vs} γββββββ¬£*

*_Cuanto mΓ‘s interactΓΊes con GataBot-MD, mayor serΓ‘ tu nivel!!_*
`.trim())*/
	 
conn.sendButton(m.chat, 'π ' + wm, `*β­βββ[ πππππ | πππππ ]ββββ¬£*
*β NIVEL ANTERIOR: ${before}*
*ββββββββββββββ*
*β NIVEL ACTUAL: ${user.level}*
*ββββββββββββββ*
*β RANGO:* ${user.role}
*ββββββββββββββ*
*β FECHA: ${new Date().toLocaleString('id-ID')}*
*β°βββγ π  ${vs} γβββββ¬£*

*_Cuanto mΓ‘s interactΓΊes conmigo, mayor serΓ‘ tu nivel!!_*`, null, [['π π  π π‘ π¨', `/menu`]], m)
}}		
//export const disabled = false 
