from dataclasses import dataclass
from mage_ai.shared.config import BaseConfig
from mage_ai.streaming.sources.base import BaseSource
import nats
from nats.aio.client import Client as NATS
from enum import Enum
from typing import Callable, Dict, Union, List
import importlib
import json
import time
import asyncio

DEFAULT_BATCH_SIZE = 100

@dataclass
class TLSConfig:
    ca_file: str = None
    cert_file: str = None
    key_file: str = None

@dataclass
class AuthCredentials:
    user_credentials_file: str = None
    username: str = None
    password: str = None
    token: str = None


@dataclass
class NatsConfig(BaseConfig):
    servers: Union[str, List[str]]
    subject: str
    batch_size: int = DEFAULT_BATCH_SIZE
    tls_config: TLSConfig = None
    user_credentials: AuthCredentials  = None

    @classmethod
    def parse_config(self, config: Dict) -> Dict:
        tls = config.get('tls')
        credentials = config.get('credentials')
        if tls and type(tls) is dict:
            config['tls_config'] = TLSConfig(**tls)
        if credentials and type(credentials) is dict:
            config['user_credentials'] = AuthCredentials(**credentials)
        return config


class NatsSource(BaseSource):
    config_class = NatsConfig

    async def disconnected_cb():
        print('Nats client disconnected!')

    async def reconnected_cb():
        print(f'Got reconnected to {self.nc.connected_url.netloc}')

    async def error_cb(e):
        print(f'There was an error: {e}')

    async def closed_cb():
        print('Connection is closed')

    async def __init_client(self,options):
        # Connect to NATS with logging callbacks.
        self.nc = NATS()
        self.nc = await nats.connect(
                self.config.servers,
                **options
                )

    def init_client(self):
        self._print('Start initializing NATS client.')
        # Initialize NATS client
        nats_options = {
                'disconnected_cb' : self.disconnected_cb,
                'reconnected_cb' : self.reconnected_cb,
                'error_cb' : self.error_cb,
                'closed_cb' : self.closed_cb,
        }

        if self.config.tls_config:
            ssl_ctx = ssl.create_default_context(purpose=ssl.Purpose.SERVER_AUTH)
            ssl_ctx.load_verify_locations(self.config.tls_config.ca_file)
            ssl_ctx.load_cert_chain(certfile=self.config.tls_config.cert_file,
                        keyfile=self.config.tls_config.key_file)
            nats_options['tls'] = ssl_ctx
            self.config.servers = list(map(lambda s: 'tls://' + s, self.config.servers))

        if self.config.user_credentials:
            nats_options['user_credentials'] = self.config.user_credentials.user_credentials_file
            nats_options['user'] = self.config.user_credentials.username
            nats_options['password'] = self.config.user_credentials.password
            nats_options['token'] = self.config.user_credentials.token

        asyncio.run(self.__init_client(nats_options))


        self._print('Finish initializing consumer.')

    async def read(self, handler: Callable):
        await self.__read(handler,0)

    def batch_read(self, handler: Callable):
        if self.config.batch_size > 0:
            batch_size = self.config.batch_size
        else:
            batch_size = DEFAULT_BATCH_SIZE

        asyncio.run(self.__read(handler,batch_size))

    async def __read(self, handler: Callable, max_msgs: int):
        self._print('Start consuming messages.')

        print("kokokokoko")
        print(type(self.nc))
        print("kokokokoko")
        sub = await self.nc.subscribe(self.config.subject, cb=self.subscribe_handler, max_msgs=max_msgs)
        while True:
            await asyncio.sleep(0.1)
        #asyncio.run(await self.nc.subscribe(self.subject, cb=self.subscribe_handler, max_msgs=max_msgs))


    async def subscribe_handler(msg):
        print("handler called kakakakaka")
        handle(self.__deserialize_message(msg))

    def test_connection(self):
        return self.nc.is_connected

    def __deserialize_message(self, message):
        return message.data.decode()

    def __print_message(self, message):
        self._print(f'Received message with subject={msg.subject}, data={msg.data}')
