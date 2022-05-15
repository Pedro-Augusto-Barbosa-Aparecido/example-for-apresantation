-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Outsourcing" (
    "id" TEXT NOT NULL,
    "legacy_sm" TEXT NOT NULL,
    "accountId" TEXT,
    "departmentId" TEXT,

    CONSTRAINT "Outsourcing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AccountToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_DepartmentToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AccountToUser_AB_unique" ON "_AccountToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_AccountToUser_B_index" ON "_AccountToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DepartmentToUser_AB_unique" ON "_DepartmentToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_DepartmentToUser_B_index" ON "_DepartmentToUser"("B");

-- AddForeignKey
ALTER TABLE "Outsourcing" ADD CONSTRAINT "Outsourcing_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Outsourcing" ADD CONSTRAINT "Outsourcing_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AccountToUser" ADD CONSTRAINT "_AccountToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AccountToUser" ADD CONSTRAINT "_AccountToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DepartmentToUser" ADD CONSTRAINT "_DepartmentToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Department"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DepartmentToUser" ADD CONSTRAINT "_DepartmentToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
