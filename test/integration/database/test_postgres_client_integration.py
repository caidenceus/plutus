import unittest

import pandas as pd
import os
import subprocess

# TODO: temp fix to import backend (this is the path from the caller location to backend)
import sys
sys.path.insert(0, './')

from backend.database.postgres_client import PostgresClient
from integration.resources.integration_test_abc import IntegrationTestABC


class PostgresClientIntegrationTest(unittest.TestCase, IntegrationTestABC):
    @classmethod
    def setUpClass(cls) -> None:
        cls.setup()

    @classmethod
    def tearDownClass(cls) -> None:
        cls.tear_down()

    def test_should_retrieve_user(self):
        # given
        postgres_client_config = self.postgres_client_config
        postgres_client = PostgresClient(postgres_client_config)

        # when
        user_df = postgres_client.retrieve_user('test_user1')

        # then
        self.assertIsNotNone(user_df)
        self.assertEqual(user_df.iloc[0]['username'], 'test_user1')
        self.assertEqual(user_df.iloc[0]['password'], 'secure_password')
        self.assertEqual(user_df.iloc[0]['email'], 'test1@test.com')
