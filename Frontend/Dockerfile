FROM node:18-alpine

WORKDIR /app

# Copy package metadata and install dependencies
COPY package.json ./
# If package-lock.json exists, npm ci will use it; otherwise fallback to npm install
COPY package-lock.json ./
RUN npm ci --omit=dev || npm install --production

# Copy source
COPY . /app

EXPOSE 3000

CMD ["node", "app.js"]
