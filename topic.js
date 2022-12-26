const { Kafka } = require("kafkajs");

const run = async () => {
    try {
        const kafka = new Kafka({
            clientId: "app",
            brokers: ["192.168.1.88:9092"],
        });
        const admin = kafka.admin();
        console.log("Connecting.....");
        await admin.connect();
        console.log("Connected.....");
        await admin.createTopics({
            topics: [
                {
                    topic: "Users",
                    numPartitions: 2,
                },
            ],
        });
        console.log("Created Successfully");
    } catch (e) {
        console.log("Error", e);
    } finally {
        process.exit(0);
    }
};
run();
