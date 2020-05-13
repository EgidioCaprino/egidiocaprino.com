FROM node:12.16.1-alpine
COPY --chown=node:node ./pages /home/node/pages
COPY --chown=node:node ./public /home/node/public
COPY --chown=node:node ./next.config.js ./package.json ./package-lock.json /home/node/
WORKDIR /home/node
USER node
RUN npm install
RUN ./node_modules/.bin/next telemetry disable
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
