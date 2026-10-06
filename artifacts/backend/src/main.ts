import "reflect-metadata";
import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap(): Promise<void> {
  const rawPort = process.env["PORT"];
  const port = Number(rawPort);

  if (!rawPort || !Number.isInteger(port) || port <= 0) {
    throw new Error(`A valid PORT is required; received "${rawPort ?? ""}".`);
  }

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  app.enableCors();

  await app.listen(port, "0.0.0.0");
}

void bootstrap().catch((error: unknown) => {
  new Logger("Bootstrap").error(error);
  process.exit(1);
});
