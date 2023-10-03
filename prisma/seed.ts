import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const Item1 = await prisma.item.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title:
        "Bad Apple!! played on Desmos but it's high quality with Bezier Curves",
      description: "This is a sample item description.",
      authorId: 1,
      videoUrl: "https://www.youtube.com/watch?v=MVrNn5TuMkY",
      previewImgUrl: "https://img.youtube.com/vi/MVrNn5TuMkY/maxresdefault.jpg",
    },
  });
  const Item2 = await prisma.item.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: "Bad Apple!! played on Google Maps",
      description: "Another sample item description.",
      authorId: 2,
      videoUrl: "https://www.youtube.com/watch?v=r-axdVfM0c0",
      previewImgUrl: "https://img.youtube.com/vi/r-axdVfM0c0/hqdefault.jpg",
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
