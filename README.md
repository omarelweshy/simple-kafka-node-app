# simple-kafka-node-app

1. Create zooKeeper Container via ```bash docker run --name zookeeper -p 2181:2181 zookeeper```
2. Create Kafka Container via ```bash docker run -p 9092:9092 --name kafka  -e KAFKA_ZOOKEEPER_CONNECT=<Your-PC-IP-Address>:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<Your-PC-IP-Address>:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka```
3. Create Topic via ```bash node topics.js```
4. Create Producer via ```bash node producer.js <Message>```
5. Receive it by the consumer via ```bash node consumer.js```

#### That is it! You Created simple Kafka Cluster.
