from typing import List

import pandas as pd
import psycopg2

from backend.config.postgres_config import PostgresClientConfig


class PostgresClient:
    def __init__(self, postgres_client_config: PostgresClientConfig):
        self.__config = postgres_client_config

    def retrieve_user(self, username: str) -> pd.DataFrame:
        connection = self.__create_connection()
        query: str = f"select * from test.users where username = '{username}';"
        return pd.read_sql(query, connection)

    def retrieve_users(self, usernames: List[str]) -> pd.DataFrame:
        connection = self.__create_connection()
        query: str = f"select * from test.users where username in {tuple(usernames)};"
        return pd.read_sql(query, connection)

    def save_user(self, user_df: pd.DataFrame) -> None:
        connection = self.__create_connection()
        cursor = connection.cursor()
        query: str = """
            INSERT INTO test.user (username, password, email) values ('%s','%s','%s');
            """ % (user_df.iloc[0]['username'],
                   user_df.iloc[0]['password'],
                   user_df.iloc[0]['email'])
        try:
            cursor.execute(query)
            connection.commit()
        except (Exception, psycopg2.DatabaseError) as error:
            print("Error: %s" % error)
            connection.rollback()
            cursor.close()
        cursor.close()

    def __create_connection(self):
        return psycopg2.connect(
            host=self.__config.url,
            port=self.__config.port,
            database=self.__config.database,
            user=self.__config.user_name,
            password=self.__config.password
        )
