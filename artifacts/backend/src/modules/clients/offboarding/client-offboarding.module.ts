import { Module } from "@nestjs/common";
import { ClientOffboardingController } from "./client-offboarding.controller";
import { ClientOffboardingService } from "./client-offboarding.service";

@Module({
  controllers: [ClientOffboardingController],
  providers: [ClientOffboardingService],
})
export class ClientOffboardingModule {}