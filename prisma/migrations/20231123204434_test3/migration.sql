-- AlterTable
ALTER TABLE "Author" ADD COLUMN     "thumbnail" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "itemCount" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "createdAt" DROP DEFAULT;
