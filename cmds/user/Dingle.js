const Command = require('../BaseCmd')
const ioTools = new (require('../../util/IOTools'))()

class Dingle extends Command {
  constructor (client) {
    super(client, {
      name: 'dingle',
      memberName: 'dingle',
      group: 'user',
      description: 'Does a dingly thingy.',
      aliases: ['dingleflop', 'dingleberry', 'dingler'],
      examples: ['+dingle']
    })
  }

  async run (msg, args) {
    let image = await ioTools.getRandomImage('dingle', args)
    return Command.sendMessage(msg.channel, '', this.client.user, { files: [image] })
  }
}

module.exports = Dingle
