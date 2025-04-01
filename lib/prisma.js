import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

// this global variable is used to prevent multiple instances of Prisma Client from being created in development mode, which can lead to issues with database connections and performance. In production mode, a new instance of Prisma Client is created each time the module is imported.