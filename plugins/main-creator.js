let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:ALDAIR 🇦🇱;;\nFN:Daniel 🇦🇱\nORG:ALDAIR 🇦🇱\nTITLE:\nitem1.TEL;waid=51925015528:51925015528\nitem1.X-ABLabel:ALDAIR 🇦🇱\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:ALDAIR 🇦🇱\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Aldair', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
