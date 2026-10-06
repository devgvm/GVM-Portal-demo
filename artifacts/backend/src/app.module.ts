import { Module } from "@nestjs/common";
import { AuthModule } from "./modules/auth/auth.module";
import { ClientOffboardingModule } from "./modules/clients/offboarding/client-offboarding.module";
import { ClientOnboardingModule } from "./modules/clients/onboarding/client-onboarding.module";
import { HealthModule } from "./modules/health/health.module";
import { IncidentsModule } from "./modules/incidents/incidents.module";
import { PartnerOffboardingModule } from "./modules/partners/offboarding/partner-offboarding.module";
import { PartnerOnboardingModule } from "./modules/partners/onboarding/partner-onboarding.module";
import { ProfilesModule } from "./modules/profiles/profiles.module";
import { TasksModule } from "./modules/tasks/tasks.module";

@Module({
  imports: [
    AuthModule,
    ClientOffboardingModule,
    ClientOnboardingModule,
    HealthModule,
    IncidentsModule,
    PartnerOffboardingModule,
    PartnerOnboardingModule,
    ProfilesModule,
    TasksModule,
  ],
})
export class AppModule {}