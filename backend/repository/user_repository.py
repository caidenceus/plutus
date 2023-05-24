from typing import List

import pandas as pd

from backend.database.postgres_client import PostgresClient
from backend.model.user import User
from backend.repository.mapper.user_mapper import Mapper


class UserRepository:
    def __init__(self, postgres_client: PostgresClient):
        self.__postgres_client = postgres_client

    def get_user(self, username: str) -> User:
        user_df: pd.DataFrame = self.__postgres_client.retrieve_user(username)
        if user_df.empty:
            return None
        return Mapper.convert_dataframe_to_user(user_df.iloc[0])

    def get_users_by_usernames(self, usernames: List[str]) -> List[User]:
        usernames_df: pd.DataFrame = self.__postgres_client.retrieve_users(usernames)
        user_list: List[User] = list(usernames_df.apply(Mapper.convert_dataframe_to_user, axis=1))
        return user_list

    def save_user(self, musician: User) -> None:
        user_df: pd.DataFrame = Mapper.convert_user_to_dataframe(musician)
        self.__postgres_client.save_user(user_df)
