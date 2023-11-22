import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const authorsData = [
    {
      id: 1,
      name: "montarion",
      url: "https://www.youtube.com/channel/UCUC2GWAOMNYw8qotNLJd-DQ",
      itemCount: 0,
    },
  ];

  const itemsData = [
    {
      id: 1,
      title: "[Touhou] Bad Apple - 8Bit NES/Famicom Rendition via Powerpak",
      description:
      "UPDATED ROM LINK: http://www.mediafire.com/file/gc964wsodbrbtdu/bad_apple_2_5_2015-12-20.zip/file\n\nShamelessly stolen from Applesorcez Channel - http://www.youtube.com/watch?v=AZehH55i_wg\n\nReproducing it here as I thought I'd have a crack at a nice sound mix, I like what's been achieved here SO much. It deserves to be more widely viewed! So, credit to Applesorce, and Kara for the song, and Num_Kadoma for what I assume is the Video programming.",
      authorId: 1,
      videoUrl: "https://www.youtube.com/watch?v=cuMkI6cDKMs",
      previewImgUrl: "https://img.youtube.com/vi/cuMkI6cDKMs/hqdefault.jpg",
    },
  ];

  const authors = await Promise.all(
    authorsData.map((author) =>
      prisma.author.upsert({
        where: { id: author.id },
        update: { id: author.id, name: author.name, url: author.url, itemCount: author.itemCount },
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

  console.log({ authors, items });
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
