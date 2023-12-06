import { Router } from 'express'
import * as notaController from '../controllers/notes-controller'

const router: Router = Router()

router.get("/api/note", notaController.allNotes) 
router.get("/api/note/:n", notaController.notesCategory)
router.get("/api/id", notaController.getLastNotesID)

export default router