-- CreateTable
CREATE TABLE `Skin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `happy` VARCHAR(191) NOT NULL,
    `sad` VARCHAR(191) NOT NULL,
    `neutral` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tamagotchi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `bornAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `diedAt` DATETIME(3) NULL,
    `age` INTEGER NOT NULL,
    `health` INTEGER NOT NULL,
    `weight` INTEGER NOT NULL,
    `temprature` INTEGER NOT NULL,
    `hunger` INTEGER NOT NULL,
    `happiness` INTEGER NOT NULL,
    `cleaness` INTEGER NOT NULL,
    `skinId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Tamagotchi` ADD CONSTRAINT `Tamagotchi_skinId_fkey` FOREIGN KEY (`skinId`) REFERENCES `Skin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
