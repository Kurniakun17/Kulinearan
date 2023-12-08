-- AlterTable
ALTER TABLE `reviews` MODIFY `rating` DOUBLE NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `totalReviews` INTEGER NOT NULL DEFAULT 0;
