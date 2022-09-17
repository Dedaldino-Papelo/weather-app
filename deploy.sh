# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
git add .
git commit -m 'deploy'
# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Dedaldino-Papelo/weather-app.git main:gh-pages
cd -