import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "inavalid input" });
      return;
    }

    const newMessage = { email: email, name: name, message: message };

    const url =
      "mongodb+srv://viet1999:viet1999@cluster0.tpezi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    let client;

    try {
      client = await new MongoClient(url).connect();
    } catch (error) {
      res.status(501).json({ message: "failed to connect" });
      return;
    }

    const collection = client.db("Contact").collection("Message");

    try {
      const result = await collection.insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(503).json({ message: "failed to send Data" });
      return;
    }

    client.close();

    res.status(200).json({ message: "send success" });
  }
};

export default handler;
