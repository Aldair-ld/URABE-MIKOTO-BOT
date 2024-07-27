import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://i.ibb.co/2jKKcrs/file.jpg')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]

  if (chat.bienvenida && m.messageStubType == 27) {
    let bienvenida = `★ *Urabe_Mikoto* \n *Nuevo parcitipante en el grupo* \n ★ @${m.messageStubParameters[0].split`@`[0]} \n *Disfruta del grupo*`
    
await conn.sendAi(m.chat, botname, textbot, bienvenida, img, img, canal)
  }
  
  if (chat.bienvenida && m.messageStubType == 28) {
    let bye = `★ *Urabe_Mikoto* \n *El usuario \n ★ @${m.messageStubParameters[0].split`@`[0]} \n *Se fue del grupo`
await conn.sendAi(m.chat, botname, textbot, bye, img, img, canal)
  }
  
  if (chat.bienvenida && m.messageStubType == 32) {
    let kick = `★ *Urabe_Mikoto* \n *El usuario \n ★ @${m.messageStubParameters[0].split`@`[0]} \n *Fue expulsado del grupo*`
await conn.sendAi(m.chat, botname, textbot, kick, img, img, canal)
}}
