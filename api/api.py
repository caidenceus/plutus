from flask import Flask, jsonify
app = Flask(__name__)

# Dev
import sys
sys.path.insert(0, '../selenium_wrapper/')

from vanguard import Vanguard
from errors import *


@app.route("/vanguard/api/v1/total-assets")
def vanguard_total_assets():
    res = None
    try:
        api = Vanguard('username', 'password')
        api.start()
        api.login()
        total_assets = api.get_total_assets()
        res = dict(total=total_assets)
    except Exception as e:
        # Dev
        print(e)
    finally:
        api.teardown()
        if not res:
            return res
    return jsonify(res)


@app.route("/vanguard/api/v1/get-account-holdings")
def vanguard_get_account_holdings():
    res = None
    try:
        api = Vanguard('username', 'password')
        api.start()
        api.login()
        account_holdings = api.get_account_holdings()
        res = {'accounts': account_holdings}
    except Exception as e:
        # Dev
        print(e)
    finally:
        api.teardown()
        if not res:
            return res
    return jsonify(res)


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
