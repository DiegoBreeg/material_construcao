/*
  Warnings:

  - You are about to drop the `comprador` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "comprador";

-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf_cnpj" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tel" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Purchase_Order" (
    "user_id" INTEGER NOT NULL,
    "order_id" SERIAL NOT NULL,
    "cpf_cnpj" TEXT NOT NULL,
    "itens" JSONB,

    CONSTRAINT "Purchase_Order_pkey" PRIMARY KEY ("order_id")
);

-- AddForeignKey
ALTER TABLE "Purchase_Order" ADD CONSTRAINT "Purchase_Order_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
