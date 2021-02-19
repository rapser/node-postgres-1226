
import Project from '../models/Project'

export async function createProject(req, res) {

    const { name, priority, description, deliverydate } = req.body

    try {
        let newProject = await Project.create({
            name: name,
            priority: priority,
            description: description,
            deliverydate: deliverydate
        }, {
            fields: ['name','priority','description','deliverydate']
        })
    
        if (newProject) {
            res.send({message: "projecto creado correctamente", data: newProject})
        }
    } catch (error) {
        res.status(500).json({
            message: "paso un error"
        })
    }



}

export async function getProjects(req, res) {

    try {
        const projects = await Project.findAll()
        res.json({
            data: projects
        })
    } catch (error) {
        res.status(500).json({
            message: "paso un error"
        })
    }


}

export async function getOneProject(req, res) {

    try {
        const { id } = req.params

        const project = await Project.findOne({
            where: {
                id: id
            }
        })
    
        res.json({ data: project})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "paso un error"
        })
    }


}

export async function deleteProject(req, res) {

    try {
        const { id } = req.params

        const deleteRowCount = await Project.destroy({
            where: {
                id: id
            }
        })
    
        res.json({message: "projecto eliminado", count: deleteRowCount})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "paso un error"
        })
    }

}

export async function updateProject(req, res) {

    try {
        const { id } = req.params
        const { name, priority, description, deliverydate} = req.body

        const projects = await Project.findAll({
            attributes: ['id', 'name', 'priority', 'description', 'deliverydate'],
            where: {
                id
            }
        })
        
        if (projects.length > 0) {

            projects.forEach( async project => {
                await project.update({
                    name,
                    priority,
                    description,
                    deliverydate
                })
            })
        }

        return res.json({
            message: "projecto actualizado", 
            data: projects
        })
    
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "paso un error"
        })
    }

}