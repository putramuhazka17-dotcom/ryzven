
const { Telegraf } = require("telegraf");

const TOKEN = process.env.BOT_TOKEN;

if (!TOKEN) {
  throw new Error("BOT_TOKEN belum diatur!");
}

const bot = new Telegraf(TOKEN);

bot.start((ctx) => {
  ctx.reply(
    "RYZVEN ONLINE!\nKetik /menu untuk melihat command."
  );
});

bot.command("menu", (ctx) => {
  ctx.reply(
    "「 R Y Z V E N 」\n\n" +
    "/start - Mulai bot\n" +
    "/menu - Daftar command\n" +
    "/ping - Cek respons\n" +
    "/info - Informasi bot\n" +
    "/ai - AI Assistant"
  );
});

bot.command("ping", (ctx) => {
  ctx.reply("Pong! RYZVEN aktif.");
});

bot.command("info", (ctx) => {
  ctx.reply("RYZVEN v1.0\nDeveloper: Azka");
});

bot.launch()
  .then(() => console.log("RYZVEN berhasil dijalankan!"))
  .catch((err) => console.error("Bot gagal:", err.message));

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
