const express = require("express")
const {
    createTutor,
    Tutorgetting,
    Tutorupdate,
    Tutordelete
} = require("../controller/toutor.controller")

TutorRouter = express.Router()


TutorRouter.post("/tutorcreate",createTutor)

TutorRouter.get("/tutorcreate",Tutorgetting)

TutorRouter.patch("/tutorcreate",Tutorupdate)

TutorRouter.delete("/tutorcreate",Tutordelete)


module.exports={TutorRouter}