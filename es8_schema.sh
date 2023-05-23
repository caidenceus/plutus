# Integration index
curl -X PUT localhost:9200/integrations -H "Content-Type: application/json" -d '
{
    "mappings": {
        "properties": {
            "username": { "type": "keyword" },
            "password": { "type": "keyword" },
            "integrations": {
                "properties": {
                    "integration": { "type": "keyword" },
                    "username": { "type": "keyword" },
                    "password": { "type": "keyword" }
                }
            }
        }
    }
}
'

# Add data
curl -XPOST -H "content-type: application/json" localhost:9200/integrations/_create/username -d '
{
    "username": "testing",
    "password": "app_pass",
    "integrations": [
        {
            "integration": "vanguard",
            "username": "van_user",
            "password": "van_pass"
        },
        {
            "integration": "fidelity",
            "username": "fid_user",
            "password": "fid_pass"
        }
    ]
}
'

# Get all documents from index
curl -XGET localhost:9200/integrations/_search