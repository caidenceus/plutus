FROM python:3.10-alpine

COPY requirements.txt ./
COPY browser.py ./

RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

COPY ./fidelity .

EXPOSE 5000

CMD ["python", "./api.py"]