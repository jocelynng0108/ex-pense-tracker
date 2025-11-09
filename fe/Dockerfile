# Gunakan Node image
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package dan install dependency
COPY package*.json ./
RUN npm install

# Copy semua file ke container
COPY . .

# Build frontend
RUN npm run build

# ==========================
# Stage 2: Jalankan Nginx
# ==========================
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
