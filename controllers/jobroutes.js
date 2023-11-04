import express from "express";
import Jobs from "../models/job.js";
import isLoggedIn from "../utilss/isloggedin.js";
const router = express.Router();
router.get("/", isLoggedIn, async (req, res) => {
    console.log("door")
    try {
        console.log("liin")
        const userName = req.payload.userName;
        const jobs = await Jobs.find({ userName });
        res.json(jobs);
    }
    catch (error) {
        console.log("falsds")
        console.log(error)
        res.json(error)
        res.status(400).json({ error });
    }
});
router.get("/:id", isLoggedIn, async (req, res) => {
    console.log("hoodfade")
    try {
        const userName = req.payload.userName;
        console.count("yoo")
        const job = await Jobs.findOne({ userName, _id: req.params.id });
        res.json(job);
    }
    catch (error) {
        console.log("when")
        res.status(400).json({ error });
    }
});
router.post("/", isLoggedIn, async (req, res) => {
    console.log("favew")
    try {
        req.body.userName = req.payload.userName;
        console.log(req.body);
        console.log("got here 1")
        const job = await Jobs.create(req.body);
        console.log(job);
        console.log("got here 2")
        res.json(job);
    }
    catch (error) {
        res.status(400).json({ error });
    }
    // try {
    //     const userName = req.payload.userName
    //     console.log(req.payload)
    //     req.body.userName = userName
    //     console.log(userName)
    //     const show = await Show.create(req.body)
    //     res.json(show)
    // } catch(error){
    //     res.status(400).json({error})
    // }
});
router.put("/:id", isLoggedIn, async (req, res) => {
    console.log("bich")
    try {
        const userName = req.payload.userName;
        req.body.username = userName;
        const job = await Jobs.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(job);
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
router.delete("/:id", isLoggedIn, async (req, res) => {
    console.log("cass")
    try {
        const userName = req.payload.userName;
        req.body.username = userName;
        const job = await Jobs.deleteOne({ _id: req.params.id, userName });
        res.json(job);
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
export default router;
//# sourceMappingURL=show.js.map