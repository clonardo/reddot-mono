import { Injectable, Logger, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileEntity } from '@rdd/backend-shared';

/**
 * Get/set user profiles from Discord
 */
@Injectable()
export class DiscordProfileService {
  constructor(
    @Inject(Logger) private readonly logger: Logger,
    @InjectRepository(ProfileEntity)
    private profileRepo: Repository<ProfileEntity>
  ) {}

  /**
   * Create a new profile
   *
   * @param id ID string
   * @param email email string
   * @param name display name
   */
  createProfile(id?: string, email?: string, name?: string) {
    return this.profileRepo.insert(new ProfileEntity({ id, email, name }));
  }

  /**
   * Try to find a profile by ID
   *
   * @param id ID to query
   */
  getById(id: string) {
    return this.profileRepo.findOne({ id });
  }

  /**
   * Try to fetch all profiles
   */
  getAll() {
    return this.profileRepo.find();
  }
}
