import unittest

import pandas as pd

# TODO: temp fix to import backend (this is the path from the caller location to backend)
import sys
sys.path.insert(0, './')

from backend.model.user import User
from backend.repository.mapper.user_mapper import Mapper


class MapperTest(unittest.TestCase):
    def test_should_convert_dataframe_to_user(self):
        # given
        user_df = pd.DataFrame(
            {
                'username': ['testing'],
                'password': ['secure_password'],
                'email': ['test@gmail.com']
            })

        # when
        user = Mapper.convert_dataframe_to_user(user_df.iloc[0])

        # then
        self.assertIsNotNone(user)
        self.assertEqual(user.username, 'testing')
        self.assertEqual(user.password, 'secure_password')
        self.assertEqual(user.email, 'test@gmail.com')

    def test_should_convert_user_to_dataframe(self):
        # given
        user = User(username='testing',
                    password='secure_password',
                    email='test@gmail.com')

        # when
        user_df = Mapper.convert_user_to_dataframe(user=user)

        # then
        self.assertIsNotNone(user_df)
        self.assertEqual(user_df.iloc[0]['username'], 'testing')
        self.assertEqual(user_df.iloc[0]['password'], 'secure_password')
        self.assertEqual(user_df.iloc[0]['email'], 'test@gmail.com')