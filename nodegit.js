const simpleGit = require('simple-git/promise')

const git = simpleGit()

async function t () {
  const branch = await git.branch()
  console.log(branch)
}

t()
