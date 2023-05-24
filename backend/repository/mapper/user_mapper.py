import pandas as pd

from backend.model.user import User


class Mapper:
    @staticmethod
    def convert_dataframe_to_user(user_df: pd.Series) -> User:
        return User(username=user_df['username'],
                    password=user_df['password'],
                    email=user_df['email'])

    @classmethod
    def convert_user_to_dataframe(cls, user: User) -> pd.DataFrame:
        return pd.DataFrame({'username': [user.username],
                             'password': [user.password],
                             'email': [user.email]})
