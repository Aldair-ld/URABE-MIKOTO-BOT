import { createHash } from 'crypto';
import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix }) => {
    let fkontak = { 
        "key": { 
            "participants": "0@s.whatsapp.net", 
            "remoteJid": "status@broadcast", 
            "fromMe": false, 
            "id": "Halo" 
        }, 
        "message": { 
            "contactMessage": { 
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` 
            }
        }, 
        "participant": "0@s.whatsapp.net" 
    };

    let pp = 'https://telegra.ph/file/1db8fa0cb55d015021da7.mp4';
    let user = global.db.data.users[m.sender];
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    try {
        pp = await conn.getProfilePicture(who);
    } catch (e) {
        // Usar imagen de perfil predeterminada si no se puede obtener la imagen del perfil
    } finally {
        let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who];
        let mentionedJid = [who];
        let username = conn.getName(who);
        let prem = global.prems.includes(who.split`@`[0]);
        let sn = createHash('md5').update(who).digest('hex');
        let str = 
`[#URABE_MIKOTO]

PERFIL COMPLETO DE ${username}

DATOS GENERALES

[🙎‍♂️] ID → ${who.split('@')[0]}
[🗒] NOMBRES → ${name ? name : 'No registrado'}
[💎] DIAMANTES → ${user.limit ? user.limit : 0}
[〽️] PREMIUM → ${prem ? 'Sí' : 'No'}
[👺] ESTADO → ${user.status ? user.status : 'No disponible'}
[🔗] ENLACE DE REFERIDO → https://api.whatsapp.com/send/?phone=51973846456&text=.menu`.trim();

        conn.sendFile(m.chat, pp, 'pp.jpg', str, fkontak, false, { contextInfo: { mentionedJid }});
    }
}

handler.help = ['perfil [@usuario]'];
handler.tags = ['xp'];
handler.command = /^perfil|profile?$/i;

export default handler;
