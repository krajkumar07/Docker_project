FROM python:3.11-slim

WORKDIR /app

# Install build tools and runtime dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install
COPY requirments.txt ./
RUN pip install --no-cache-dir -r requirments.txt

# Copy application code
COPY . /app

EXPOSE 5000

CMD ["python", "app.py"]
