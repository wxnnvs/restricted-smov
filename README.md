# Restricted Sudo-Flix
![Sudo-Flix Image](.github/Sudo-Flix.png)

**Sudo-Flix without public registration**

*I **do not** endorse piracy of any kind I simply enjoy programming and large user counts.*

## Running Locally

1. Run `setup.sh` or `setup.bat` depending on your platform.
2. Type `pnpm run dev` in your cmd/terminal
3. Visit the local instance [here](http://localhost:5173) or, at local host on port 5173.


## Updating a sudo-flix Instance
To update a sudo-flix instance you can type the below commands into a terminal at the root of your project.
```bash
git remote add upstream https://github.com/wxnnvs/restricted-smov.git
git fetch upstream # Grab the contents of the new remote source
git checkout <YOUR_MAIN_BRANCH>  # Most likely this would be `origin/main`
git merge upstream/main
# * Fix any conflicts present during merge *
git add .  # Add all changes made during merge and conflict fixing
git commit -m "Update sudo-flix instance (merge upstream/main)"
git push  # Push to YOUR repository
```


## Contact Me
**Discord:** *@wxnnvs* 
