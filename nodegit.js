const simpleGit = require('simple-git/promise')

const git = simpleGit()

async function t () {
  const branch = await git.branch()
  console.log(branch)
  if (branch.all.includes('dev2')) {
    const res = await git.checkoutBranch('dev2')
    console.log(res, '1')
  } else {
    const res = await git.checkoutLocalBranch('dev2')
    console.log(res, 2);
  }
}

t()
