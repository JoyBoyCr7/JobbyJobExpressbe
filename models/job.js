import mongoose from "../db/connection.js";
const { Schema, model } = mongoose;

const jobSchema = new Schema({
    role: String,
    location: String,
    description: String,
    intrest_level: Number,
    application_date: String,
    userName: String
});
const Jobs = model("Job", jobSchema);
export default Jobs;
//# sourceMappingURL=show.js.map