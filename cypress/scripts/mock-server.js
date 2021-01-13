import talkback from 'talkback/es6'
import path from 'path'

export const startTalkBackServer = async (opts) => {
  const server = talkback({
    silent: true,
    record: talkback.Options.RecordMode.NEW,
    ...opts
  })
  await server.start(() => console.log(`Talkback server started on port ${opts.port}`))
}

const go = async () => {
  await startTalkBackServer({
    host: 'https://jsonplaceholder.typicode.com',
    port: 5544,
    record: talkback.Options.RecordMode.DISABLED,
    path: path.resolve(__dirname, '../fixtures/tapes'),
    ignoreHeaders: ['origin', 'user-agent', 'referer', 'accept-language']
  })
}

go()
