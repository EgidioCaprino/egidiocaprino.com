# My website

## Build app
```shell script
rm -rf node_modules .next \
  && nvm use 12 \
  && npm install \
  && npm run build
```

## Build Docker image
```shell script
version=$(node -p -e "require('./package.json').version") \
  && tag="egidiocaprino/web:${version}" \
  && docker build --tag "${tag}" . \
  && docker push "${tag}"
```

Update version in `ansible/roles/web/vars/main.yml`.
