const Language = require("../Models/languageModel");
const catchAsyncErr = require("../utils/catchAsyncErr");

exports.getAllLanguages = catchAsyncErr(async (req, res, next) => {
  const languages = await Language.find();
  res.status(200).json({
    status: "success",
    data: {
      languages,
    },
  });
});

exports.getlanguage = catchAsyncErr(async (req, res, next) => {
  const id = req.params.lid;
  const language = await Language.findById(id);
  res.status(200).json({
    status: "success",
    data: {
      language,
    },
  });
});

exports.addLanguage = catchAsyncErr(async (req, res, next) => {
  const language = await Language.create({ name: req.body.name });
  res.status(201).json({
    status: "success",
    language,
  });
});
