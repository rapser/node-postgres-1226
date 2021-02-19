import { Router } from 'express'
const router = Router()


import { createProject, getProjects, getOneProject, deleteProject, updateProject } from '../controllers/project.controller'

router.post('/', createProject)
router.get('/', getProjects)

router.get('/:id', getOneProject)
router.put('/:id', updateProject)
router.delete('/:id', deleteProject)


export default router