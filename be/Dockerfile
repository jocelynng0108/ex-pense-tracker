# Gunakan base image Python
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy requirements dan install dependency
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Copy seluruh source code ke container
COPY . .

# Expose port backend (FastAPI default 8000)
EXPOSE 8000

# Jalankan server
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
