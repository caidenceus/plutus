class UsernameValidationService:
    @staticmethod
    def validate_username(username: str):
        if not username.isalnum():
            raise Exception('Username may only contain alpha-numeric characters.')
