import { Module } from "@nestjs/common";
import { ClientOnboardingController } from "./client-onboarding.controller";
import { ClientOnboardingService } from "./client-onboarding.service";

@Module({
  controllers: [ClientOnboardingController],
  providers: [ClientOnboardingService],
})
export class ClientOnboardingModule {}