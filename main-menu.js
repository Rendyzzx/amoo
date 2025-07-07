/*
██╗███████╗██╗░░░██╗███╗░░░███╗██╗
██║╚════██║██║░░░██║████╗░████║██║
██║░░███╔═╝██║░░░██║██╔████╔██║██║
██║██╔══╝░░██║░░░██║██║╚██╔╝██║██║
██║███████╗╚██████╔╝██║░╚═╝░██║██║
╚═╝╚══════╝░╚═════╝░╚═╝░░░░░╚═╝╚═╝

Kayoko WhatsApp Bot
@description Private script for WhatsApp bot based on Node.js and Baileys.
@author      གྷ 𝑵𝒂𝒓𝒖𝒚𝒂 𝑰𝒛𝒖𝒎𝒊 <https://linkbio.co/naruyaizumi>
@co-author   གྷ 𝑺𝑿𝒁𝒏𝒊𝒈𝒉𝒕𝒎𝒂𝒓 <wa.me/6281398961382>
@copyright   © 2024 - 2025 Naruya Izumi & SXZnightmare
@license     Private License - All Rights Reserved
@notice      This is a privately licensed script.
             Redistribution, reverse-engineering, resale, or modification
             without explicit permission is strictly prohibited.
*/

import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import os from 'os'
import fs from 'fs'

const defaultMenu = {
before: `
${wish()}

🌸 *I N F O   U S E R* 🌸
────────────────────────
🧚‍♀️ *Nama: %name*
🎀 *Status: %status*
🍭 *Limit: %limit*
📈 *Level: %level*
🧸 *Role: %role*
🫧 *EXP: %exp*

🌸 *I N F O  C O M M A N D* 🌸
────────────────────────
*🅟 = Premium*
*🅛 = Limit*
*🅐 = Admin*
*🅓 = Developer*
*🅞 = Owner*
%readmore
`.trimStart(),
header: `*%category*
────────────────────────`,
body: `*⚘ %cmd* %islimit %isPremium %isAdmin %isMods %isOwner`,
footer: `────────────────────────`,
after: `🍓 *Copyright © RendyZ*`
}
let handler = async (m, { conn, usedPrefix, command, __dirname, isOwner, isMods, isPrems, args }) => {
try {
await global.loading(m, conn)
let tags
let teks = `${args[0]}`.toLowerCase()
let arrayMenu = [
'all',
'ai',
'anime',
'audio',
'database',
'downloader',
'fun',
'game',
'genshin',
'group',
'info',
'internet',
'kerang',
'maker',
'main',
'news',
'nulis',
'nsfw',
'owner',
'primbon',
'quran',
'quotes',
'random',
'rpg',
'search',
'server',
'sound',
'sticker',
'store',
'tools',
'xp'
]
if (!arrayMenu.includes(teks)) teks = '404'
if (teks == 'all') tags = {
'ai': '🧠 AI & Chatbot',
'anime': '🐰 Anime & Manga',
'audio': '🎧 Audio & Musik',
'database': '🧺 Database & Penyimpanan',
'downloader': '🍥 Unduh Media',
'fun': '🍭 Fun & Hiburan',
'game': '🕹️ Game & Hiburan',
'genshin': '🌸 Genshin Impact',
'group': '🧃 Grup & Administrasi',
'info': '📖 Info & Bantuan',
'internet': '💌 Internet & Sosmed',
'kerang': '🧿 Kerang Ajaib',
'main': '🧁 Main Menu',
'maker': '🎀 Kreator & Desain',
'news': '📰 Berita & Informasi',
'nsfw': '🍓 Konten Dewasa',
'nulis': '✏️ Tulisan & Logo',
'owner': '🪄 Admin & Developer',
'primbon': '🔮 Ramalan & Primbon',
'quran': '️🍃 Al-Qur\'an & Islami',
'quotes': '🫧 Kutipan & Motivasi',
'random': '🎲 Acak & Hiburan',
'rpg': '🗡️ RPG & Petualangan',
'search': '🔍 Pencarian & Info',
'server': '🖥️ Server Management',
'sound': '🔊 Sound & Efek',
'sticker': '🌼 Sticker & Kreator',
'tools': '🧸 Alat & Utilitas',
'xp': '🍰 Level & Exp System'
}
if (teks == 'ai') tags = {
'ai': '🧠 AI & Chatbot'
}
if (teks == 'anime') tags = {
'anime': '🐰 Anime & Manga'
}
if (teks == 'audio') tags = {
'audio': '🎧 Audio & Musik'
}
if (teks == 'database') tags = {
'database': '🧺 Database & Penyimpanan'
}
if (teks == 'downloader') tags = {
'downloader': '🍥 Unduh Media'
}
if (teks == 'fun') tags = {
'fun': '🍭 Fun & Hiburan'
}
if (teks == 'game') tags = {
'game': '🍬 Game & Hiburan'
}
if (teks == 'genshin') tags = {
'genshin': '🌸 Genshin Impact'
}
if (teks == 'group') tags = {
'group': '🧃 Grup & Administrasi'
}
if (teks == 'info') tags = {
'info': '📖 Info & Bantuan'
}
if (teks == 'internet') tags = {
'internet': '💌 Internet & Sosmed'
}
if (teks == 'kerang') tags = {
'kerang': '🧿 Kerang Ajaib'
}
if (teks == 'main') tags = {
'main': '🧁 Main Menu'
}
if (teks == 'maker') tags = {
'maker': '🎀 Kreator & Desain'
}
if (teks == 'news') tags = {
'news': '📰 Berita & Informasi'
}
if (teks == 'nulis') tags = {
'nulis': '✏️ Tulisan & Logo'
}
if (teks == 'nsfw') tags = {
'nsfw': '🍓 Konten Dewasa'
}
if (teks == 'owner') tags = {
'owner': '🪄 Admin & Developer'
}
if (teks == 'premium') tags = {
'premium': '💎 Fitur Premium'
}
if (teks == 'primbon') tags = {
'primbon': '🔮 Ramalan & Primbon'
}
if (teks == 'quran') tags = {
'quran': '🍃️ Al-Qur\'an & Islami'
}
if (teks == 'quotes') tags = {
'quotes': '🫧 Kutipan & Motivasi'
}
if (teks == 'random') tags = {
'random': '🎲 Acak & Hiburan'
}
if (teks == 'rpg') tags = {
'rpg': '🗡️ RPG & Petualangan'
}
if (teks == 'search') tags = {
'search': '🔍 Pencarian & Info'
}
if (teks == 'server') tags = {
'server': '🖥️ Server Management'
}
if (teks == 'sound') tags = {
'sound': '🔊 Sound & Efek'
}
if (teks == 'sticker') tags = {
'sticker': '🌼 Sticker & Kreator'
}
if (teks == 'store') tags = {
'store': '🛍️ Toko & Premium'
}
if (teks == 'tools') tags = {
'tools': '🧸 Alat & Utilitas'
}
if (teks == 'xp') tags = {
'xp': '🍰 Level & Exp System'
}
let { exp, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let user = global.db.data.users[m.sender]
let limit = isPrems ? 'Unlimited' : toRupiah(user.limit)
let name = user.registered ? user.name: conn.getName(m.sender)
let status = isMods ? '🧁 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑' : isOwner ? '🪄 𝙊𝙒𝙉𝙀𝙍 𝙈𝙊𝘿𝙀' : isPrems ? '💖 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍' : user.level > 1000 ? '🌟 𝙀𝙇𝙄𝙏𝙀 𝙐𝙎𝙀𝙍' : '🍬 𝙁𝙧𝙚𝙚 𝙐𝙨𝙚𝙧'
let vcard = `BEGIN:VCARD
VERSION:3.0
FN:ཀ RendyZ
TEL;type=CELL;waid=6281249578370:+6281249578370
X-WA-BIZ-DESCRIPTION:𝐓𝐡𝐞 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 𝐎𝐟 𝐌𝐢𝐥𝐥𝐢𝐜𝐞𝐧𝐭
END:VCARD`
let res = await fetch('https://raw.githubusercontent.com/Rendyzzx/op/main/73cce500c57ddf2f750272a923900fef%20(1).jpg')
let buffer = Buffer.from(await res.arrayBuffer())
if (!global._audioIndex) global._audioIndex = 0
let audioList = [
  'https://files.cloudkuimages.guru/audios/I2AgEuCw.mp3',
  'https://files.cloudkuimages.guru/audios/sEgWn28p.mp3',
  'https://files.cloudkuimages.guru/audios/LIVQwem7.mp3'
]
let audio = audioList[global._audioIndex % audioList.length]
global._audioIndex++
let member = Object.keys(global.db.data.users).filter(v => typeof global.db.data.users[v].commandTotal != 'undefined' && v != conn.user.jid).sort((a, b) => {
const totalA = global.db.data.users[a].command
const totalB = global.db.data.users[b].command
return totalB - totalA
})
let commandToday = 0
for (let number of member) {
commandToday += global.db.data.users[number].command
}
let totalf = Object.values(global.plugins)
.filter(v => Array.isArray(v.help))
.reduce((acc, v) => acc + v.help.length, 0)
let totalreg = Object.keys(global.db.data.users).length
let uptime = runtime(process.uptime())
let muptime = runtime(os.uptime())
let listRate = Object.values(global.db.data.bots.rating).map(v => v.rate)
let averageRating = listRate.length > 0 ? listRate.reduce((sum, rating) => sum + rating, 0) / listRate.length : 0
let timeID = new Intl.DateTimeFormat('id-ID', {
timeZone: 'Asia/Jakarta',
hour: '2-digit',
minute: '2-digit',
second: '2-digit',
hour12: false
}).format(new Date())
let subtitle = `🕒 ${timeID}`
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))
const Version = packageJson.version
const mode = global.opts.self ? 'Private' : 'Public'
let listCmd = `
${wish()}
🌸 I N F O   B O T 🌸
━━━━━━━━━━━━━━━━━━━━━
🎀 Name              : ${conn.user.name}  
👑 Generation        : Takanashi hoshino v8  
💫 Version           : ${Version}  
🧸 Mode Bot          : ${mode}  
📦 Database Size     : ${bytesToMB(fs.readFileSync("./database.json").byteLength)} Mb  
⏳ Uptime            : ${uptime}  
⚡ Machine Uptime    : ${muptime}  
🌟 Total Features    : ${totalf}  
🧍‍♂️ Total Register   : ${totalreg}  
🖋️ Command Today     : ${commandToday}  
🌠 Rating            : ${averageRating.toFixed(2)}/5.00 by ${listRate.length} users  
━━━━━━━━━━━━━━━━━━━━━

💖 Tentang Millicent Bluenight  
━━━━━━━━━━━━━━━━━━━━━  
Millicent Bluenight adalah bot AI yang  
cerdas dan elegan — sahabat digitalmu  
yang siap membantu, menghibur, dan  
mendampingimu setiap hari.  

Dengan fitur lengkap, desain lembut,  
dan respons yang cepat, ia hadir untuk  
memberi pengalaman unik di setiap  
perintah yang kamu berikan.  

✨ Dibuat dan dikembangkan oleh RendyZ  
━━━━━━━━━━━━━━━━━━━━━
`.trimStart()
let lists = arrayMenu.map((v, i) => {
return [`${usedPrefix + command} ${v}`, (i + 1).toString(), `📂 Menu ${capitalize(v)} 🍡
Untuk Membuka Menu ${capitalize(v)} ✨`
]
})
if (teks == '404') {
return await conn.textList(m.chat, listCmd, false, lists, m, {
mentions: [m.sender],
contextInfo: {
externalAdReply: {
mentionedJid: [m.sender],
mediaType: 1,
title: `👋🏻 Hai kak, ${name}!`,
body: subtitle,
thumbnail: buffer,
renderLargerThumbnail: true
}
}
}).then(() => {
conn.sendMessage(m.chat, {
audio: { url: audio },
mimetype: "audio/mpeg",
ptt: true
})
})
}
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
return {
help: Array.isArray(plugin.tags) ? plugin.help: [plugin.help],
tags: Array.isArray(plugin.tags) ? plugin.tags: [plugin.tags],
prefix: 'customPrefix' in plugin,
limit: plugin.limit,
premium: plugin.premium,
mods: plugin.mods,
owner: plugin.owner,
admin: plugin.admin,
enabled: !plugin.disabled,
}
})
let groups = {}
for (let tag in tags) {
groups[tag] = []
for (let plugin of help)
if (plugin.tags && plugin.tags.includes(tag))
if (plugin.help) groups[tag].push(plugin)
}
conn.menu = conn.menu ? conn.menu: {}
let before = conn.menu.before || defaultMenu.before
let header = conn.menu.header || defaultMenu.header
let body = conn.menu.body || defaultMenu.body
let footer = conn.menu.footer || defaultMenu.footer
let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '': `*Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}*`) + defaultMenu.after
let _text = [
before,
...Object.keys(tags).map(tag => {
return header.replace(/%category/g, tags[tag]) + '\n' + [
...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
return menu.help.map(help => {
return body.replace(/%cmd/g, menu.prefix ? help: '%p' + help)
.replace(/%islimit/g, menu.limit ? '🅛' : '')
.replace(/%isPremium/g, menu.premium ? '🅟' : '')
.replace(/%isAdmin/g, menu.admin ? '🅐' : '')
.replace(/%isMods/g, menu.mods ? '🅓' : '')
.replace(/%isOwner/g, menu.owner ? '🅞' : '')
.trim()
}).join('\n')
}),
footer
].join('\n')
}),
after
].join('\n')
let text = typeof conn.menu == 'string' ? conn.menu: typeof conn.menu == 'object' ? _text: ''
let replace = {
'%': '%',
p: usedPrefix,
exp: toRupiah(exp - min),
level: toRupiah(level),
limit,
name,
role,
status,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let kontak = {
key: {
fromMe: false,
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast"
},
message: {
contactMessage: {
displayName: "𝑴𝒊𝒍𝒍𝒊𝒄𝒆𝒏𝒕 𝑩𝒍𝒖𝒆𝒏𝒊𝒈𝒉𝒕",
vcard
}
}
}
await conn.sendMessage(m.chat, {
product: {
productImage: { url: 'https://raw.githubusercontent.com/Rendyzzx/op/main/73cce500c57ddf2f750272a923900fef%20(1).jpg' },
productId: '24043107111979533',
title: global.config.watermark,
description: `🗂️ *Database: ${bytesToMB(fs.readFileSync("./database.json").byteLength)} Mb*`,
currencyCode: 'EGP',
priceAmount1000: '9999999999999',
retailerId: global.config.author,
url: 'https://wa.me/p/24043107111979533/6281249578370',
productImageCount: 999999999999
},
businessOwnerJid: '6281249578370@s.whatsapp.net',
caption: text.trim(),
title: `👋🏻 Hai kak, ${name}!`,
subtitle: subtitle,
footer: `⏱️ *Uptime: ${uptime}*`,
shop: {
surface: 1,
id: 'https://wa.me/p/24043107111979533/6281249578370'
},
hasMediaAttachment: false,
viewOnce: true
}, { quoted: kontak })
await conn.sendMessage(m.chat, {
audio: { url: audio },
mimetype: 'audio/mpeg',
ptt: true
})
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help)$/i
handler.register = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function runtime(seconds) {
seconds = Number(seconds)
let d = Math.floor(seconds / (3600 * 24)).toString().padStart(2, '0')
let h = Math.floor((seconds % (3600 * 24)) / 3600).toString().padStart(2, '0')
let m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0')
let s = Math.floor(seconds % 60).toString().padStart(2, '0')
return `${d}:${h}:${m}:${s}`
}

function wish() {
let time = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }))
let hours = time.getHours()
let minutes = time.getMinutes()
let quarter = Math.floor(minutes / 15)
const messages = {
0: [
'🌙 Tengah malam banget, waktunya tidur, ya! Jangan begadang terus~',
'💤 Udah malam banget nih. Masih melek? Coba deh istirahat dulu.',
'🌌 Sunyi banget tengah malam gini, jangan lupa tidur biar segar besok!',
],
1: [
'🛌 Udah jam 1 lebih, ayo tidur yuk. Jangan keseringan begadang~',
'😴 Mata udah berat belum? Tidur yuk, biar badan nggak capek.',
'🌙 Jam segini mending udah di tempat tidur sambil mimpi indah~',
],
2: [
'💤 Masih begadang jam 2? Jangan lupa kesehatan, ya!',
'🌌 Udah dini hari banget nih, coba istirahat biar nggak lelah~',
'🌙 Suasana dingin jam 2, nyaman banget buat tidur, coba deh~',
],
3: [
'🛌 Udah jam 3 dini hari, waktunya tidur, sayang kesehatanmu~',
'💤 Bobo yuk, biar bangun pagi nanti nggak malas~',
'🌌 Jam segini tidur yang nyenyak enak banget, cobain deh!',
],
4: [
'☀️ Pagi buta nih! Udah mulai terang, semangat buat bangun!',
'🍵 Pagi-pagi begini, enaknya ngopi atau minum teh, setuju?',
'🌅 Subuh datang, suasananya adem banget, yuk olahraga ringan!',
],
5: [
'🐓 Ayam berkokok udah kedengeran, waktunya bangun pagi nih!',
'🌞 Matahari mulai muncul, selamat pagi! Jangan malas-malasan~',
'🥪 Udah waktunya sarapan, yuk isi energi buat aktivitas hari ini~',
],
6: [
'🏃‍♂️ Pagi-pagi gini olahraga dulu yuk, biar tubuh lebih sehat~',
'📚 Jangan lupa kerjain tugas atau persiapan kerja ya!',
'☀️ Matahari udah tinggi, semangat ya buat harimu hari ini~',
],
7: [
'💻 Pagi produktif yuk! Fokus ke kerjaan atau tugas dulu~',
'☕ Udah ngopi belum? Kalau belum, waktunya buat ngopi nih!',
'📊 Jangan lupa cek jadwal atau to-do list buat hari ini~',
],
8: [
'🍎 Cemilan pagi penting lho, biar kamu tetap bertenaga!',
'🖥️ Lagi kerja atau belajar? Jangan lupa istirahat mata sebentar~',
'🥗 Udah mulai siang, siap-siap makan siang nanti ya!',
],
9: [
'🌤️ Selamat siang! Yuk makan siang biar energi kamu balik lagi~',
'🍛 Lagi makan siang apa nih? Yang penting sehat dan enak ya~',
'😌 Habis makan siang santai bentar, biar badan lebih rileks~',
],
10: [
'📖 Siang gini enaknya baca buku sambil minum es teh, gimana?',
'☀️ Panasnya mulai terasa nih, jangan lupa banyak minum air ya!',
'🖋️ Masih semangat kan? Yuk, fokus kerja atau belajarnya~',
],
11: [
'🌇 Sore mulai mendekat, jangan lupa selesaikan aktivitasmu~',
'🛋️ Sambil kerja, boleh lho ngemil biar makin produktif~',
'📸 Siang terakhir sebelum sore, coba liat keluar, cakep banget!',
],
12: [
'🌤️ Udah masuk jam 12 nih, siapin makan siang yuk~',
'🍽️ Jangan skip makan siang ya, biar tenaga kamu nggak habis~',
'😌 Habis makan siang jangan lupa istirahat sebentar ya~',
],
13: [
'📖 Abis makan, siang gini cocok buat baca buku santai nih~',
'☀️ Panas banget jam segini, jangan lupa minum biar nggak lemas!',
'☀️ Lagi panas nih, jangan lupa minum air biar nggak dehidrasi~',
],
14: [
'📖 Siang-siang gini, cocok buat baca buku atau dengerin podcast!',
'🥤 Waktunya ngemil atau minum yang seger-seger nih~',
'🖋️ Kerjaan masih belum selesai? Santai, satu-satu aja ya~',
],
15: [
'🌇 Udah sore! Jangan lupa stretching biar badan nggak kaku~',
'🍪 Sore-sore gini ngemil apa nih yang cocok? Cookies enak kali ya~',
'🏞️ Langit sore udah mulai berubah warna, cantik banget deh~',
],
16: [
'📸 Coba deh foto-foto langit sore, pasti aesthetic banget!',
'🛋️ Sore gini cocok buat santai di sofa sambil nonton~',
'🍵 Teh sore emang paling nikmat, apalagi sama camilan~',
],
17: [
'🌅 Menjelang malam nih, suasananya adem banget ya~',
'🕯️ Udah sore, jangan lupa nyiapin makan malam ya!',
'🍽️ Mau makan apa malam ini? Yuk, siap-siap makan bareng~',
],
18: [
'🌙 Malam tiba, waktunya buat tenangin pikiran~',
'🍲 Jangan lupa makan malam biar nggak kelaperan nanti~',
'📺 Waktunya nonton acara favorit atau film seru malam ini~',
],
19: [
'🎮 Lagi main game? Jangan lupa cek waktu, ya!',
'📱 Scroll sosmed sambil denger musik malam juga asik lho~',
'🎶 Musik slow malam ini bikin suasana lebih santai banget~',
],
20: [
'📖 Malam gini cocok banget buat baca novel atau jurnal~',
'✨ Jangan lupa skincare malam biar glowing terus ya~',
'🛌 Udah jam 8 lebih, waktunya relaksasi sebelum tidur~',
],
21: [
'🌌 Udah malam nih, jangan begadang ya, nggak baik buat badan~',
'💤 Siapin diri buat tidur yang nyenyak, biar besok fresh~',
'🌙 Tidur lebih awal itu bagus lho, coba deh biasain~',
],
22: [
'🌌 Udah larut malam nih, jangan lupa matiin lampu sebelum tidur~',
'✨ Mimpi indah ya nanti, semoga besok lebih baik lagi~',
'🛌 Jangan lupa tidur yang cukup, biar badan tetap sehat~',
],
23: [
'💤 Udah tengah malam banget, waktunya tidur nyenyak~',
'🌙 Jangan begadang terus ya, kasihan badan kamu~',
'🕯️ Tidur malam yang nyenyak bikin kamu lebih segar besok!',
'✨ Selamat malam, sampai jumpa besok! Tidur nyenyak ya~'
]
}
let message = messages[hours]?.[quarter] || messages[hours]?.[3] || '✨ Waktu berjalan terus, semangat jalani harimu ya~'
return `*${message}*`
}

function capitalize(word) {
return word.charAt(0).toUpperCase() + word.substr(1)
}

const toRupiah = number => parseInt(number).toLocaleString().replace(/,/g, ".")

function bytesToMB(bytes) {
return (bytes / 1048576).toFixed(2)
}