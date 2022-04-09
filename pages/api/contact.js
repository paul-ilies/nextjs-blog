import { MongoClient } from "mongodb";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const { email, name, message } = req.body;
        const newMessage = {
            email, name, message
        }
        let client
        try {
            client = await MongoClient.connect(`mongodb+srv://paul:${process.env.PASS}@cluster0.yz2j4.mongodb.net/mySite?retryWrites=true&w=majority`)
        } catch (error) {
            res.status(500).json({ message: "Could not connect to database" })
        }
        const db = client.db();
        try {
            const result = await db.collection("messages").insertOne(newMessage);
            newMessage.id = result.insertedId

        } catch (error) {
            client.close();
            res.status(500).json({ message: "message failed" })
        }
        client.close()
        res.status(201).json({ message: "bla bla" })
    }
}

export default handler