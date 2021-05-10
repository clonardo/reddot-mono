import {
  Controller,
  Get,
  Logger,
  Post,
  Body,
  Req,
  UnauthorizedException,
  Delete,
  Inject,
  Param
} from '@nestjs/common';
import { DiscordProfileService } from './discord-profile.service';

/**
 * Get/set user Discord profiles
 */
@Controller('profiles')
export class DiscordProfileController {
  constructor(
    @Inject(Logger) private readonly logger: Logger,
    private readonly profileService: DiscordProfileService
  ) {
    this.logger.setContext(DiscordProfileController.name);
  }

  /**
   * Create a user profile objecy
   *
   * @param dto DTO to create a user profile object
   */
  @Post()
  async createProfile(
    @Body() dto: { id?: string; email?: string; name?: string }
  ) {
    if (dto) {
      return this.profileService.createProfile(dto.id, dto.email, dto.name);
    } else {
      return new Error('Invalid arguments provided');
    }
  }

  @Get()
  getAll() {
    return this.profileService.getAll();
  }
}
