from vanguard_wrapper import Vanguard
import boto3


if __name__ == '__main__':
    dynamodb_client = boto3.client('dynamodb', region_name="us-east-1")

    response = dynamodb_client.get_item(
        TableName="customer_integration",
        Key={'username': {'S': 'caidenceus'}}
    )
    user = response['Item']

    for integration in user['integrations']['L']:
        if integration['M']['integration']['S'] == 'vanguard':
            api = Vanguard(
                username=integration['M']['username']['S'],
                password=integration['M']['password']['S']
            )
            api.start()
            api.login()
            # print(api.get_total_holdings())
            print(api.get_account_holdings())
            api.teardown()
