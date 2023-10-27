import {Args, Command, Flags} from '@oclif/core'

export default class Hello extends Command {
  static args = {
    person: Args.string({description: 'Person to say hello to', required: true}),
  }

  static description = 'Say hello'

  static examples = [
    `$ oex hello friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  static flags = {
    from: Flags.string({char: 'f', description: 'Who is saying hello', required: true}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Hello)

    switch (flags.from) {
      case 'zero': {
        this.exit(0)
        this.log('should have exited with zero')
        break
      }

      case 'one': {
        this.exit(1)
        this.log('should have exited with one')
        break
      }

      default: {
        this.log(`hello ${args.person} from ${flags.from}! (./src/commands/hello/index.ts)`)
      }
    }
  }
}
