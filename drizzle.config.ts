import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({ path: ".env.local" });

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/data/db/schema.ts",
  out: "./src/data/db/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
