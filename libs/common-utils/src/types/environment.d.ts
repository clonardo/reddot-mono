export {}; //force this file to be a module

declare global {
  namespace NodeJS {
    /**
     * Environment var names for Discord.js API
     */
    type DiscordEnvVars = {
      /**
       * Name of Discord app
       */
      DISCORD_APP_NAME: string;
      /**
       * ID of Discord app
       */
      DISCORD_APP_ID: string;
      /**
       * Discord app public key
       */
      DISCORD_APP_PUB_KEY: string;
      /**
       * Discord bot token
       */
      DISCORD_BOT_TOKEN: string;
      /**
       * Discord "Add Bot" URL with client ID + selected permissions
       */
      DISCORD_PERMS_URL: string;
    };

    /**
     * Environment var names for Cockroach DB connection
     */
    type CrdbEnvVars = {
      /**
       * CRDB hostname
       */
      CRDB_HOST: string;
      /**
       * CRDB port
       */
      CRDB_PORT: string;
      /**
       * CRDB user name
       */
      CRDB_USER: string;
      /**
       * CRDB password
       */
      CRDB_PASS: string;
      /**
       * Initial database to connect to
       */
      CRDB_DBNAME: string;
    };

    /**
     * AWS + S3 config
     */
    type AwsEnvVars = {
      /**
       * Region ID
       */
      AWS_REGION: string;
      /**
       * Access key ID for selected user
       */
      AWS_ACCESS_KEY_ID: string;
      /**
       * Secret key for selected user
       */
      AWS_SECRET_ACCESS_KEY: string;
    };

    /**
     * Assorted environment vars.
     */
    type MiscEnvVars = {
      /**
       * Unique ID for Google Analytics
       */
      GOOGLE_ANALYTICS_ID: string;
      /**
       * API key for full access, not just SMTP
       */
      SENDGRID_API_KEY: string;
    };

    /**
     * Union type for all environment vars
     */
    type CombinedEnvVars = MiscEnvVars & DiscordEnvVars & CrdbEnvVars;
    /**
     * Extend types for process.env
     */
    interface ProcessEnv extends CombinedEnvVars {}
  }
}
