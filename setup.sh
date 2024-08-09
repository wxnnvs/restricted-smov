echo "Cloning github repo"
git clone https://github.com/wxnnvs/restricted-smov.git
cd smov
echo "Pulling changes"
git pull
echo "Installing"
pnpm install
echo "Done, use 'pnpm run dev' to start"
