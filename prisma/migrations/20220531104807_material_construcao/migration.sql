-- CreateTable
CREATE TABLE "Comprador" (
    "name" TEXT NOT NULL,
    "cpf_cnpj" TEXT NOT NULL,
    "itens" TEXT NOT NULL,

    CONSTRAINT "Comprador_pkey" PRIMARY KEY ("cpf_cnpj")
);
