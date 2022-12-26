const { Kafka } = require("kafkajs");

const run = async () => {
    try {
        const kafka = new Kafka({
            clientId: "app",
            brokers: ["192.168.1.88:9092"],
        });
        const consumer = kafka.consumer({
            groupId: "test",
        });
        console.log("Connecting.....");
        await consumer.connect();
        console.log("Connected!");
        consumer.subscribe({
            topic: "Users",
            fromBeginning: true,
        });

        await consumer.run({
            eachMessage: async (result) => {
                console.log(
                    `Recevied msg ${result.message.value} on partition ${result.partition}`
                );
            },
        });
    } catch (e) {
        console.log("Error", e);
    }
};
run();
