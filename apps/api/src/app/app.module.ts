import {
  Module,
  Logger,
  BeforeApplicationShutdown,
  OnApplicationBootstrap
} from '@nestjs/common';
import { TypeOrmModule, InjectConnection } from '@nestjs/typeorm';
import { DatabaseConfigFactory } from '../config/db-config.factory';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { interval, Subscription } from 'rxjs';
import { DiscordApiModule } from '@rdd/backend-bot';
import { logProcessStats } from '@rdd/backend-shared';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfigFactory
    }),
    DiscordApiModule
  ],
  controllers: [AppController],
  providers: [Logger, AppService]
})
export class AppModule
  implements OnApplicationBootstrap, BeforeApplicationShutdown {
  constructor(
    @InjectConnection() private conn: Connection,
    private readonly logger: Logger
  ) {
    logger.setContext(AppModule.name);
    this.logStats = () => {
      logProcessStats(logger);
    };
  }

  /**
   * Subscription to state logger
   */
  private loggerSub: Subscription;

  /**
   * Use the module's logger to periodically log stats
   */
  logStats: () => void;
  //   private readonly logger: Logger = new Logger('API');
  async onApplicationBootstrap() {
    this.logger.log(`Bootstrapped, starting ${AppModule.name}`);
    this.logStats();
    // 1 minute timer
    this.loggerSub = interval(60000).subscribe(() => {
      this.logStats();
    });
    if (this.conn && this.conn.isConnected) {
      this.logger.log('CRDB status: connected');
    } else {
      this.logger.log('Connection unavailable');
    }
  }
  beforeApplicationShutdown = (signal?: string) => {
    this.logger.log(`${process.pid} - shutting down`);
    if (this.loggerSub && !this.loggerSub.closed) {
      this.loggerSub.unsubscribe();
    }
  };
}
