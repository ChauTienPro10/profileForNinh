@echo off
echo ==============================
echo Deploy React Vite to GitHub Pages
echo ==============================
echo Pull latest code from main branch...
git checkout main
git pull origin main

echo Installing dependencies...
npm install

echo Building project...
npm run build

echo Deploying to GitHub Pages...
npm run deploy

echo Deployment completed!
pause
