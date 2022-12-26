const { Kafka } = require("kafkajs");

const msg = process.argv[2];

const run = async () => {
    try {
        const kafka = new Kafka({
            clientId: "app",
            brokers: ["192.168.1.88:9092"],
        });
        const producer = kafka.producer();
        console.log("Connecting.....");
        await producer.connect();
        console.log("Connected!");
        const partition = msg[0] < "N" ? 0 : 1;
        const result = await producer.send({
            topic: "Users",
            messages: [
                {
                    value: msg,
                    partition: partition,
                },
            ],
        });
        console.log("Created Successfully", result);
        await producer.disconnect();
    } catch (e) {
        console.log("Error", e);
    } finally {
        process.exit(0);
    }
};
run();
