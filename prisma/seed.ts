import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const author1 = await prisma.author.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Author 1",
      url: "https://google.com",
    },
  });

  const author2 = await prisma.author.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: "Author 2",
      url: "https://google.com",
    },
  });
  const Item1 = await prisma.item.upsert({
    where: { id: 1 },
    update: {
      title:
        "Bad Apple!! played on Desmos but it's high quality with Bezier Curves",
      description: "This is a sample item description.",
      authorId: 1,
      videoUrl: "MVrNn5TuMkY",
      previewImgUrl: "https://img.youtube.com/vi/MVrNn5TuMkY/hqdefault.jpg",
      tags: ["Software", "Bezier Curves"]
    },
    create: {
      title:
        "Bad Apple!! played on Desmos but it's high quality with Bezier Curves",
      description: "This is a sample item description.",
      authorId: 1,
      videoUrl: "MVrNn5TuMkY",
      previewImgUrl: "https://img.youtube.com/vi/MVrNn5TuMkY/hqdefault.jpg",
      tags: ["Software", "Bezier Curves"]
    },
  });
  const Item2 = await prisma.item.upsert({
    where: { id: 2 },
    update: {
      title: "Bad Apple!! played on Google Maps",
      description: "Another sample item description.",
      authorId: 2,
      videoUrl: "r-axdVfM0c0",
      previewImgUrl: "https://img.youtube.com/vi/r-axdVfM0c0/hqdefault.jpg",
      tags: ["Software"]
    },
    create: {
      title: "Bad Apple!! played on Google Maps",
      description: "Another sample item description.",
      authorId: 2,
      videoUrl: "r-axdVfM0c0",
      previewImgUrl: "https://img.youtube.com/vi/r-axdVfM0c0/hqdefault.jpg",
      tags: ["Software"]
    },
  });
  console.log({ Item1, Item2 });
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
