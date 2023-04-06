FROM python:3.8

WORKDIR /app

COPY reqs.txt .

RUN pip install -r reqs.txt

COPY . .

EXPOSE 8000
