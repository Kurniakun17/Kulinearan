-- AlterTable
ALTER TABLE `restaurants` ADD COLUMN `totalReviews` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `reviews` MODIFY `rating` INTEGER NOT NULL DEFAULT 0;
