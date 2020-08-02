# Espresso.io

## Prerequisites

1. Install git
```bash
Linux-Debian #> sudo apt update &&  sudo apt upgrade && sudo apt install git
Linux-RedHat #> sudo yum upgrade && sudo yum install git
MacOSX Terminal #> /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" && brew doctor && brew install git
Windows Chocolatly #> choco install git
```
2. Download the latest release from GitHub
3. Login to GitHub and go to `User > Profile > ...` 
4. Create the file `.env.local` and copy the two variables from the step before into the following format:
```Ini
# OAuth App Credentials from GitHub
GITHUB_CLIENT_ID=4fe55614dd5174b7423a
GITHUB_CLIENT_SECRET=f7744f852eea8e172693b0e9c75c9fc47561aa86

# The path to your repository in GitHub
REPO_FULL_NAME=vigorcrust/espress.io

# The base branch that new changes and forks are created from. Defaults to 'master'.
BASE_BRANCH=master

# The signing key used for token encryption
SIGNING_KEY=TQrFyueF2te3o6RpEBz3erBB5PkKED1CbGpPzX5sVt8=
```
5. Open `Espresso.io`