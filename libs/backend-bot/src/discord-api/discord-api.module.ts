import { Logger, Module } from '@nestjs/common';
import { DiscordProfileController } from './discord-api.controller';
import { DiscordProfileService } from './discord-profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileEntity } from '@rdd/backend-shared';

/**
 * Manage basic Discord info (e.g., profile)
 */
@Module({
  imports: [TypeOrmModule.forFeature([ProfileEntity])],
  controllers: [DiscordProfileController],
  providers: [Logger, DiscordProfileService],
  exports: []
})
export class DiscordApiModule {}
