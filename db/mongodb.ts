import { MongoClient } from "https://deno.land/x/mongo@v0.29.4/mod.ts";

const client = new MongoClient()

await client.connect("linkmongo")

const db = client.database('DenoBase')

export default db