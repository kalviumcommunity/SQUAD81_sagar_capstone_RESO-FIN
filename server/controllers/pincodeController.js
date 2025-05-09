const Pincode = require("../models/Pincode");
const { ROLES } = require("../utils/constants");

const addPincodes = async (req, res) => {
    if (req.role !== ROLES.admin) {
        return res.status(403).json({
            success: false,
            message: "Access denied: You are not authorized to access this resource.",
        });
    }

    const { pincodes } = req.body;

    if (!Array.isArray(pincodes) || pincodes.length === 0) {
        return res.status(400).json({ success: false, message: "Invalid input: Please provide pincodes." });
    }

    try {
        const existingPincodes = await Pincode.find({
            pincode: { $in: pincodes.map((p) => p.pincode) },
        });

        const existingPincodesValue = existingPincodes.map((p) => p.pincode);

        const newPincodes = pincodes.filter(
            (p) => !existingPincodesValue.includes(p.pincode)
        );

        if (newPincodes.length === 0) {
            return res.status(400).json({ success: false, message: "No new pincodes to add: All provided pincodes already exist." });
        }

        await Pincode.insertMany(newPincodes);

        return res.status(200).json({ success: true, message: "Pincodes added successfully." });
    } catch (error) {
        console.error("Error adding pincodes:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error: " + error.message,
        });
    }
};

const getPincodes = async (req, res) => {
    const { pincode } = req.params;

    try {
        const existingPincode = await Pincode.find({ pincode });

        if (existingPincode.length === 0) {
            return res.status(404).json({ success: false, message: "Pincode not found: No delivery available." });
        }

        return res.status(200).json({ success: true, message: "Delivery available." });
    } catch (error) {
        console.error("Error retrieving pincodes:", error);
        return res.status(500).json({ success: false, message: "Internal server error: " + error.message });
    }
};

module.exports = { addPincodes, getPincodes };