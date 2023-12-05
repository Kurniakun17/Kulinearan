-- CreateTable
CREATE TABLE `Category` (
    `categoryId` INTEGER NOT NULL AUTO_INCREMENT,
    `categoryName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`categoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CategoryToRestaurants` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CategoryToRestaurants_AB_unique`(`A`, `B`),
    INDEX `_CategoryToRestaurants_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_CategoryToRestaurants` ADD CONSTRAINT `_CategoryToRestaurants_A_fkey` FOREIGN KEY (`A`) REFERENCES `Category`(`categoryId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategoryToRestaurants` ADD CONSTRAINT `_CategoryToRestaurants_B_fkey` FOREIGN KEY (`B`) REFERENCES `Restaurants`(`restaurantId`) ON DELETE CASCADE ON UPDATE CASCADE;
