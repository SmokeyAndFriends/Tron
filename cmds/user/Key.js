const Command = require('../BaseCmd')

const ioTools = new (require('../../util/IOTools'))()

class Key extends Command {
  constructor (client) {
    super(client, {
      name: 'key',
      group: 'user',
      memberName: 'key',
      description: 'Returns a random image/gif given to me by Key.',
      examples: ['+key']
    })
  }

  async run (msg, args) {
    let image = await ioTools.getRandomImage('key', args)
    return Command.sendMessage(msg.channel, '', this.client.user, { files: [image] })
  }
}

module.exports = Key
