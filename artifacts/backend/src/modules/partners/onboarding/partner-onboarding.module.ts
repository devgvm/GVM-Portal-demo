import { Module } from "@nestjs/common";
import { PartnerOnboardingController } from "./partner-onboarding.controller";
import { PartnerOnboardingService } from "./partner-onboarding.service";

@Module({
  controllers: [PartnerOnboardingController],
  providers: [PartnerOnboardingService],
})
export class PartnerOnboardingModule {}