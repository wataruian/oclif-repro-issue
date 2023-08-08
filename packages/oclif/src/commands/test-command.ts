import { Flags } from '@oclif/core';
import { BaseCommand } from '../baseCommand';

export default class TestCommand extends BaseCommand {
  static override description = 'Test Command';

  static override enableJsonFlag = true;

  static override flags = {
    ...BaseCommand.flags,
    testFlag: Flags.string({
      char: 't',
      description: 'Some test flag',
      default: 'Some default value',
    }),
    // Add this for workaround
    // json: Flags.boolean({
    //   description: 'JSON output',
    //   default: false,
    // }),
  };

  async run() {
    const { flags } = await this.parse(TestCommand);

    const testFlag = flags.testFlag;

    return {
      message: 'Test Command',
      testFlag,
    };
  }
}
