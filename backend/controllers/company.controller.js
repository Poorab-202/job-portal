import { Company } from "../models/company.model.js"

export const registerCompany = async (req, res) => {
    try {


        const { companyName } = req.body;
        console.log(req.id);
        if (!req.id) {
            return res.status(401).json({
                message: "Unauthorized! User ID is missing.",
                success: false
            });
        }

        if (!companyName) {
            return res.status(400).json({
                message: "Company name is required!",
                success: "false"
            })
        }

        let company = await Company.findOne({ name: companyName });
        if (company) {
            return res.status(400).json({
                message: "Company is already registered!",
                success: "false"
            })
        }

        company = await Company.create({
            name: companyName,
            userId: req.id
        })

        return res.status(201).json({
            message: "Company registered successfully!",
            company,
            success: true
        })


    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "error in company registration process!",
            error,
            success: false
        })

    }
}

// list of companies registered by recruiter 
export const getCompany = async (req, res) => {
    try {

        const userId = req.id;
        const companies = await Company.find({ userId });
        if (!companies) {
            return res.status(404).json({
                message: "Companies not found!",
                success: false
            })
        }

        return res.status(201).json({
            message: "Companies found!",
            companies,
            success: true
        })


    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "error in the process of getting the companies registered by the user!",
            error,
            success: false
        })
    }
}

export const getCompanyById = async (req, res) => {
    try {
        
        const companyId = req.params.id;
        console.log(companyId);
        const company = await Company.findById( companyId );
        if (!company) {
            return res.status(404).json({
                message: "Company not found",
                success: "false"
            })
        }

        return res.status(201).json({
            message: "Company found!",
            company,
            success: true
        })

    } catch (error) {
        return res.status(400).json({
            message: "error occured in getCompanyById.",
            error,
            success: false
        });
    }
}

export const updateCompany = async (req, res) => {
    const { name, description, website, location } = req.body;
    const file = req.file;
    // cloudinary will come here


    const updateData = { name, description, website, location };
    const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!company) {
        return res.status(404).json({
            message: "Company not found!",
            success: false
        });
    }

    return res.status(200).json({
        message: "Company details updated successfully",
        success: true
    });

}