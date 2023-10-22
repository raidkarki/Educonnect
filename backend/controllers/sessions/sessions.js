import Session from "../../models/session.js";
//hna ki lhisa tebda lprof ycreer session w yb3t fiha les etudiants absent w les etudiants present
export const createSession = async (req, res) => {

    const { group, teacher, subject,attendedStudents } = req.body
    console.log(group, teacher, subject, attendedStudents)
    try {
        const newsession = new Session({ group, teacher, subject, attendedStudents,date:new Date() })
        await newsession.save()
        res.status(200).json({ message: "session added" })

    } catch (error) {
        res.status(404).json({ message: error.message })

    }

}
export const getSessionsbyteacher = async (req, res) => {
    const { id } = req.params
    try {
        const sessions = await Session.find({teacher:id})
        res.status(200).json(sessions)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const getSessionsbygroup = async (req, res) => {
    const { id } = req.params
    try {
        const sessions = await Session.find({group:id})
        res.status(200).json(sessions)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const getSessionsbystudent = async (req, res) => {
    const { id } = req.params
    try {
        const sessions = await Session.find({attendedStudents:{ $in: [id] }})
        res.status(200).json(sessions)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const updateSession = async (req, res) => {
    const { id } = req.params
    const { group, teacher, Subject, attendedStudents } = req.body
    try {
        const session = await Session.findOne({ _id: id })
        if (!session) return res.status(404).json({ message: "session not found" })

        session.Subject = Subject
        session.attendedStudents = attendedStudents
        await session.save()
        res.status(200).json({ message: "session updated" })

    } catch (error) {
        res.status(404).json({ message: error.message })

    }

}
export const deleteSession = async (req, res) => {
    const { id } = req.params
    try {
        const session = await Session.findOne({ _id: id })
        if (!session) return res.status(404).json({ message: "session not found" })
        await session.delete()
        res.status(200).json({ message: "session deleted" })

    } catch (error) {
        res.status(404).json({ message: error.message })

    }
}

