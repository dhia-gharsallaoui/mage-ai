from enum import Enum


class SourceType(str, Enum):
    AZURE_EVENT_HUB = 'azure_event_hub'
    KAFKA = 'kafka'
    KINESIS = 'kinesis'
    NATS = 'nats'
    RABBITMQ = 'rabbitmq'


class SinkType(str, Enum):
    KAFKA = 'kafka'
    KINESIS = 'kinesis'
    NATS = 'nats'
    OPENSEARCH = 'opensearch'
