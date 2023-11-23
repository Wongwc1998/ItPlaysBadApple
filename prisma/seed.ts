import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const authorsData = [
    {
        "id": 1,
        "name": "montarion",
        "url": "https://www.youtube.com/channel/UCUC2GWAOMNYw8qotNLJd-DQ",
        "thumbnail": "https://yt3.ggpht.com/ytc/APkrFKZgTPo0aGT_DhBpD4MnakezF6rf1Xb1b2pZPx_K=s88-c-k-c0x00ffffff-no-rj",
        "itemCount": 2
    },
    {
        "id": 2,
        "name": "ekslong",
        "url": "https://www.youtube.com/channel/UC4oj_RwWWW3xviCw6Jf_VnA",
        "thumbnail": "https://yt3.ggpht.com/ytc/APkrFKb-v32-QZnCI6mAkidIqKp05gTs217e8YUYh9b0=s88-c-k-c0x00ffffff-no-rj",
        "itemCount": 1
    },
];

const itemsData = [
    {
        "title": "[Touhou] Bad Apple - 8Bit NES/Famicom Rendition via Powerpak",
        "description": "UPDATED ROM LINK: http://www.mediafire.com/file/gc964wsodbrbtdu/bad_apple_2_5_2015-12-20.zip/file\n\nShamelessly stolen from Applesorcez Channel - http://www.youtube.com/watch?v=AZehH55i_wg\n\nReproducing it here as I thought I'd have a crack at a nice sound mix, I like what's been achieved here SO much. It deserves to be more widely viewed! So, credit to Applesorce, and Kara for the song, and Num_Kadoma for what I assume is the Video programming.",
        "videoUrl": "https://www.youtube.com/watch?v=cuMkI6cDKMs",
        "previewImgUrl": "https://img.youtube.com/vi/cuMkI6cDKMs/hqdefault.jpg",
        "id": 1,
        "createdAt": "2011-12-30T02:28:01Z",
        "authorId": 1
    },
    {
        "title": "Play Bad Apple On Apple II",
        "description": "From bilibili http://www.bilibili.com/video/av1752770/  Up\u4e3b(author):\u539f\u5b50\u6c27 \n\u53e4\u8463\u82f9\u679c\u64ad\u653e\u70c2\u82f9\u679c-Bad Apple II~\nBGM: Bad Apple",
        "videoUrl": "https://www.youtube.com/watch?v=X8osEgYzPNo",
        "previewImgUrl": "https://img.youtube.com/vi/X8osEgYzPNo/hqdefault.jpg",
        "id": 2,
        "createdAt": "2014-11-28T09:23:21Z",
        "authorId": 2
    },
];

  const authors = await Promise.all(
    authorsData.map((author) =>
      prisma.author.upsert({
        where: { id: author.id },
        update: { id: author.id, name: author.name, url: author.url, thumbnail: author.thumbnail, itemCount: author.itemCount },
        create: author,
      })
    )
  );

  const items = await Promise.all(
    itemsData.map((item) =>
      prisma.item.upsert({
        where: { id: item.id },
        update: item,
        create: item,
      })
    )
  );

  // console.log({ authors, items });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
