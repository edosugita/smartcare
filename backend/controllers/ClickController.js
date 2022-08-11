import Click from "../models/ClickModel.js";

export const getClickById = async (req, res) => {
    try {
        const response = await Click.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const updateClick = async (req, res) => {
    try {
        await Click.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Click Updated"});
    } catch (error) {
        console.log(error.message);
    }
}