import unittest
from unittest.mock import Mock

import pandas as pd

# TODO: temp fix to import backend (this is the path from the caller location to backend)
import sys
sys.path.insert(0, './')

from backend.repository.user_repository import UserRepository


class UserRepositoryTest(unittest.TestCase):
    def test_should_get_user(self):
        # given
        client = Mock()
        client.retrieve_user.return_value = pd.DataFrame(
            {
                'username': ['testing'],
                'password': ['secure_hash'],
                'email': ['testing@test.com'],
            })
        user_repository = UserRepository(postgres_client=client)

        # when
        user = user_repository.get_user('testing')

        # then
        self.assertIsNotNone(user)
        self.assertEqual(user.username, 'testing')
        self.assertEqual(user.password, 'secure_hash')
        self.assertEqual(user.email, 'testing@test.com')

    def test_should_get_users(self):
        # given
        client = Mock()
        client.retrieve_users.return_value = pd.DataFrame(
            {
                'username': ['test1', 'test2'],
                'password': ['hash_1', 'hash_2'],
                'email': ['email@test1.com', 'email@test2.com'],
            })

        user_repository = UserRepository(postgres_client=client)

        # when
        users = user_repository.get_users_by_usernames(['test1', 'test2'])

        # then
        self.assertIsNotNone(users)
        self.assertEqual(len(users), 2)

        self.assertEqual(users[0].username, 'test1')
        self.assertEqual(users[0].password, 'hash_1')
        self.assertEqual(users[0].email, 'email@test1.com')

        self.assertEqual(users[1].username, 'test2')
        self.assertEqual(users[1].password, 'hash_2')
        self.assertEqual(users[1].email, 'email@test2.com')
