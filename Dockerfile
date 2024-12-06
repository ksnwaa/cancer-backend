# Gunakan Node.js sebagai base image
FROM node:18
ENV HOST 0.0.0.0

# Set working directory
WORKDIR /usr/src/app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install TensorFlow.js globally
RUN npm install -g @tensorflow/tfjs

# Copy semua file dari proyek ke dalam container
COPY . .

# Expose port 8080 (sesuai dengan server Hapi.js)
EXPOSE 8080

# Menetapkan variabel lingkungan untuk model URL
ENV MODEL_URL=https://storage.cloud.google.com/model-cancer-bucket/model.json

# Jalankan aplikasi
CMD ["node", "src/app/app.js"]
