import schedule
import time
from elasticsearch import Elasticsearch


class PollCycle:
    def __init__(self, username):
        self.username = username
    
    def startup(self):
        self.es = Elasticsearch('http://localhost:9200')

        resp = self.es.search(
            index='integrations',
            query={
                'bool': {
                    'must': [
                        {
                            'term': {'username.keyword': self.username}
                        }
                    ]
                }
            }
        )
        print(resp)


if __name__ == '__main__':
    test = PollCycle('caidenceus')
    test.startup()
