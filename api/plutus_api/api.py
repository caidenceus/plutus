from flask import Flask, jsonify
from flask_cors import CORS
import boto3
import os

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Dev
import sys
sys.path.insert(0, '../')

from vanguard import Vanguard
from errors import *

API = '/api/vanguard/v1'


@app.route(f'{API}/<username>/total-assets')
def vanguard_total_assets(username):
    res = {}
    api = None

    try:
        dynamodb_client = boto3.client('dynamodb', region_name='us-east-1')
        response = dynamodb_client.get_item(
            TableName=os.environ.get('DYNAMO_TABLE_NAME'),
            Key={'username': {'S': username}}
        )
        user = response['Item']
    except Exception as e:
        res = {
            'error': e,
            'reason': f'Unable to find user {username}'
        }
        return jsonify(res)

    try:
        for integration in user['integrations']['L']:
            if integration['M']['integration']['S'] == 'vanguard':
                api = Vanguard(
                    username=integration['M']['username']['S'],
                    password=integration['M']['password']['S']
                )
                api.start()
                api.login()
                total_assets = api.get_total_assets()
                res = dict(total=total_assets)
                break
    except Exception as e:
        res = {
            'error': e,
            'reason': 'Unable to retrieve data from Vanguard'
        }
    finally:
        if api:
            api.teardown()
        return jsonify(res)


@app.route(f'{API}/<username>/account-holdings')
def vanguard_get_account_holdings(username):
    res = {}
    api = None

    try:
        dynamodb_client = boto3.client('dynamodb', region_name='us-east-1')
        response = dynamodb_client.get_item(
            TableName=os.environ.get('DYNAMO_TABLE_NAME'),
            Key={'username': {'S': username}}
        )
        user = response['Item']
    except Exception as e:
        res = {
            'error': e,
            'reason': f'Unable to find user {username}'
        }
        return jsonify(res)

    try:
        for integration in user['integrations']['L']:
            if integration['M']['integration']['S'] == 'vanguard':
                api = Vanguard(
                    username=integration['M']['username']['S'],
                    password=integration['M']['password']['S']
                )
                api.start()
                api.login()
                total_assets = api.get_account_holdings()
                res = dict(accounts=total_assets)
                break
    except Exception as e:
        res = {
            'error': e,
            'reason': 'Unable to retrieve data from Vanguard'
        }
    finally:
        if api:
            api.teardown()
        return jsonify(res)


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
