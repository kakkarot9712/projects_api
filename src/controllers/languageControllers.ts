import Language from "../models/languageModel";
import catchAsyncErr from "../utils/catchErrors";

const getAllLanguages = catchAsyncErr(async (_, res, __) => {
  const languages = await Language.find();
  res.status(200).json({
    status: "success",
    data: {
      languages,
    },
  });
});

const getlanguage = catchAsyncErr(async (req, res, _) => {
  const id = req.params.lid;
  const language = await Language.findById(id);
  res.status(200).json({
    status: "success",
    data: {
      language,
    },
  });
});

const addLanguage = catchAsyncErr(async (req, res, _) => {
  const language = await Language.create({ name: req.body.name });
  res.status(201).json({
    status: "success",
    language,
  });
});

export { getAllLanguages, getlanguage, addLanguage };
