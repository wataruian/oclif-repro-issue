import { Command, Flags } from '@oclif/core';

export abstract class BaseCommand extends Command {
  static override enableJsonFlag = false;

  static override flags = {
    help: Flags.help({
      description: 'Display helpful information',
    }),
  };
}
