/*
  Warnings:

  - You are about to drop the `Comprador` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Comprador";

-- CreateTable
CREATE TABLE "comprador" (
    "name" TEXT NOT NULL,
    "cpf_cnpj" TEXT NOT NULL,
    "itens" VARCHAR NOT NULL,

    CONSTRAINT "comprador_pkey" PRIMARY KEY ("cpf_cnpj")
);
