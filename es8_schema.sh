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