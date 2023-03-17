from mage_ai.streaming.sources.nats import NatsSource
from mage_ai.tests.base_test import TestCase
from unittest.mock import patch


class NatsTests(TestCase):
    def test_init(self):
        with patch.object(NatsSource, 'init_client') as mock_init_client:
            NatsSource(dict(
                connector_type='nats',
                servers='test_server',
                subject='test_subject',
                batch_size= 37,
            ))
            mock_init_client.assert_called_once()

    def test_init_invalid_config(self):
        with patch.object(NatsSource, 'init_client') as mock_init_client:
            with self.assertRaises(Exception) as context:
                NatsSource(dict(
                    connector_type='nats',
                    servers='test_server',
                    batch_size=37,
                ))
            self.assertTrue(
                '__init__() missing 1 required positional argument: \'subject\''
                in str(context.exception),
            )
            self.assertEqual(mock_init_client.call_count, 0)

    def test_init_with_tls_config(self):
        with patch.object(NatsSource, 'init_client') as mock_init_client:
            source = NatsSource(dict(
                connector_type='nats',
                servers='test_server',
                subject='test_subject',
                batch_size= 37,
                tls_config=dict(
                    ca_file='/etc/ssl/certs/test_ca.crt',
                    cert_file='/etc/ssl/certs/test_cert.pem',
                    key_file='/etc/ssl/certs/test_key.pem',
                ),
            ))
            mock_init_client.assert_called_once()
            self.assertEqual(source.config.tls_config.ca_file, '/etc/ssl/certs/test_ca.crt')
            self.assertEqual(source.config.tls_config.cert_file, '/etc/ssl/certs/test_cert.pem')
            self.assertEqual(source.config.tls_config.key_file, '/etc/ssl/certs/test_key.pem')
            self.assertEqual(source.config.tls_config.key_file, '/etc/ssl/certs/test_key.pem')
            self.assertIsNone(source.config.user_credentials)

    def test_init_with_user_credentials(self):
        with patch.object(NatsSource, 'init_client') as mock_init_client:
            source = NatsSource(dict(
                connector_type='nats',
                servers='test_server',
                subject='test_subject',
                batch_size= 37,
                user_credentials=dict(
                    user_credentials_file='~/.secret.creds',
                    username='Julius',
                    password='Nova Chrono',
                )
            ))
            mock_init_client.assert_called_once()
            self.assertEqual(source.config.user_credentials.user_credentials_file, '~/.secret.creds')
            self.assertEqual(source.config.user_credentials.usename, 'Julius')
