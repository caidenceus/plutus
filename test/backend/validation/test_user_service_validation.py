import unittest

# TODO: temp fix to import backend (this is the path from the caller location to backend)
import sys
sys.path.insert(0, './')

from backend.validation.user_validation_service import UsernameValidationService


class UsernameValidationServiceTest(unittest.TestCase):
    def test_should_raise_an_exception_when_name_is_invalid(self):
        # given
        username = 'testing1234!'

        # when
        with self.assertRaises(Exception) as context:
            UsernameValidationService.validate_username(username)

        # then
        self.assertTrue('Username may only contain alpha-numeric characters.' in str(context.exception))

    def test_should_not_raise_an_exception_when_name_is_valid(self):
        # given
        username = 'testing1234'

        # when
        UsernameValidationService.validate_username(username)