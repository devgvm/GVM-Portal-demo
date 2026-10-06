import { Module } from "@nestjs/common";
import { PartnerOffboardingController } from "./partner-offboarding.controller";
import { PartnerOffboardingService } from "./partner-offboarding.service";

@Module({
  controllers: [PartnerOffboardingController],
  providers: [PartnerOffboardingService],
})
export class PartnerOffboardingModule {}