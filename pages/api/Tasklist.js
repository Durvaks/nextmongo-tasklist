import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("test");
       const tasks = await db //<== continuar a partir daqui!
           .collection("tasks")
           .find({})
           .toArray();
      res.json(tasks);
   } catch (e) {
       console.error(e);
   }
};