import { Logger } from '@nestjs/common';

/**
 * Log process uptime + heap usage
 *
 * @param logger NestJS logger instance, or fallback to console.log
 */
export const logProcessStats = (logger?: Logger) => {
  const memoryUsageMB = Math.floor(
    process.memoryUsage().heapUsed / 1024 / 1024
  );
  const uptimeMinutes = Math.floor(process.uptime() / 60);
  const uptimeHours = Math.floor(uptimeMinutes / 60);
  const outputMsg = `PID ${process.pid} heap: ${memoryUsageMB}mb. Uptime: ${uptimeMinutes}min (${uptimeHours}hr)`;
  if (logger) {
    logger.log(outputMsg, `logStats`);
  } else {
    console.log(`logStats: ${outputMsg}`);
  }
};
