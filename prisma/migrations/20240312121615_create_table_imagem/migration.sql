-- CreateTable
CREATE TABLE `Imagem` (
    `idImagem` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeImagem` VARCHAR(191) NOT NULL,
    `uriImagem` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idImagem`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
