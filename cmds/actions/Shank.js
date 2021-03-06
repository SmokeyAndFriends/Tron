const Command = require('../BaseCmd')
const IOTools = require('../../util/IOTools')
const ioTools = new IOTools()

module.exports = class Shank extends Command {
  constructor (client) {
    super(client, {
      name: 'shank',
      group: 'actions',
      memberName: 'shank',
      guildOnly: false,
      aliases: ['stab', 'shanks'],
      description: 'Returns a random shank gif and includes the mentions users username.',
      examples: ['+shank @Alcha#0042'],
      argsType: 'multiple'
    })
  }

  async run (msg, args) {
    if (msg.mentions.users.size > 0) {
      var content = `${this.getMentionedUsernames(msg)}, you've been shanked by **${msg.author.username}**! :knife:`
      if (msg.mentions.users.find(mention => mention.id === '258162570622533635')) {
        return msg.reply('YOU DARE TRY TO SHANK ME?! Who do you think you are?!')
      }
    }

    let image = await ioTools.getRandomImage('shank', args)
    return Command.sendMessage(msg.channel, content, this.client.user, { files: [image] })
  }
}
