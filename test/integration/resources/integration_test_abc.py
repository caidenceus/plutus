from abc import ABC
from pathlib import Path

import psycopg2
import testcontainers.compose

from backend.config.postgres_config import PostgresClientConfig

RESOURCES_DIRECTORY: Path = Path(__file__).parent / Path("./")


class IntegrationTestABC(ABC):
    COMPOSE_PATH: Path = RESOURCES_DIRECTORY.joinpath("./docker")

    compose = None

    postgres_url = None
    postgres_port = None
    postgres_database = None
    postgres_user_name = None
    postgres_password = None

    @classmethod
    def setup(cls) -> None:
        cls.postgres_url = "localhost"
        cls.postgres_port = "5432"
        cls.postgres_database = "testing"
        cls.postgres_user_name = "postgres"
        cls.postgres_password = "postgres"

        cls.postgres_client_config = PostgresClientConfig(
            url=cls.postgres_url,
            port=cls.postgres_port,
            database=cls.postgres_database,
            user_name=cls.postgres_user_name,
            password=cls.postgres_password
        )

        # Start Database
        cls.compose = testcontainers.compose.DockerCompose(cls.COMPOSE_PATH.as_posix())
        cls.compose.start()

    @classmethod
    def tear_down(cls):
        cls.compose.stop()

    def create_connection(self):
        return psycopg2.connect(
            host=self.postgres_client_config.url,
            port=self.postgres_client_config.port,
            database=self.postgres_client_config.database,
            user=self.postgres_client_config.user_name,
            password=self.postgres_client_config.password
        )
