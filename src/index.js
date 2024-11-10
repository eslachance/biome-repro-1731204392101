// has no problem saying "let" is wrong because it doesn't get reassigned...
export let createSessionsMiddleware = () => ({
  // This isn't triggering "unused variable" errors
  sessionPreflight: async (request, env) => {
    // not triggering "db is not defined" error
    db.test()
    // or missing semicolong for that matter.
  },    

  sessionify: async () => {
    // things
  }
})

const someObject = {
  // not complaining about missing trailing comma
  someKey: 'someValue'
  // not complaining about missing semicolon either
}

// not seeing any problems with this, there are 3.
const somefunc = t => console.log(t)
