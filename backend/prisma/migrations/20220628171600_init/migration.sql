-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `words` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `word` VARCHAR(255) NOT NULL,
    `meaning` VARCHAR(1000) NOT NULL,
    `synonyms` VARCHAR(1000) NOT NULL,
    `sentence` VARCHAR(1000) NOT NULL,

    UNIQUE INDEX `words_word_key`(`word`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
