/*
  Warnings:

  - The primary key for the `category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `categoryId` on the `category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `_categorytorestaurants` DROP FOREIGN KEY `_CategoryToRestaurants_A_fkey`;

-- AlterTable
ALTER TABLE `_categorytorestaurants` MODIFY `A` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `category` DROP PRIMARY KEY,
    DROP COLUMN `categoryId`,
    ADD PRIMARY KEY (`categoryName`);

-- AddForeignKey
ALTER TABLE `_CategoryToRestaurants` ADD CONSTRAINT `_CategoryToRestaurants_A_fkey` FOREIGN KEY (`A`) REFERENCES `Category`(`categoryName`) ON DELETE CASCADE ON UPDATE CASCADE;
