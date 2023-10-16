import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const authorsData = [
    { id: 1, name: "Junferno", url: "https://www.youtube.com/@Junferno" },
    { id: 2, name: "Author 2", url: "https://google.com" },
  ];

  const itemsData = [
    {
      id: 1,
      title: "Bad Apple!! played on Desmos but it's high quality with Bezier Curves",
      description: "This is a sample item description.",
      authorId: 1,
      videoUrl: "MVrNn5TuMkY",
      previewImgUrl: "https://img.youtube.com/vi/MVrNn5TuMkY/hqdefault.jpg",
      tags: ["software", "modern", "software-application", "digital"],
    },
    {
      id: 2,
      title: "Bad Apple!! played on Google Maps",
      description: "Another sample item description.",
      authorId: 1,
      videoUrl: "r-axdVfM0c0",
      previewImgUrl: "https://img.youtube.com/vi/r-axdVfM0c0/hqdefault.jpg",
      tags: ["software", "modern", "software-application", "digital"],
    },
  ];

  const authors = await Promise.all(
    authorsData.map((author) => 
      prisma.author.upsert({
        where: { id: author.id },
        update: { id: author.id, name: author.name, url: author.url },
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
