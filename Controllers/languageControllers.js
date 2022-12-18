const Language = require("../Models/languageModel");

exports.getAllLanguages = async (req, res, next) => {
  try {
    const languages = await Language.find();
    res.status(200).json({
      status: "success",
      data: {
        languages,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getlanguage = async (req, res, next) => {
  try {
    const id = req.params.lid;
    const language = await Language.findById(id);
    res.status(200).json({
      status: "success",
      data: {
        language,
      },
    });
  } catch (err) {
    next(err);
  }
};
