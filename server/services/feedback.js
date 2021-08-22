const FeedBack = require("../models/feedback");

const create = async feedBack => {
  const newFeedBack = await FeedBack.create(feedBack);
  return newFeedBack;
};

const get = async find => {
  const newFeedBack = await FeedBack.find({});
  return newFeedBack;
};

const update = async (id, feedBack) => {
  const newFeedBack = await FeedBack.findByIdAndUpdate(
    id,
    { $set: feedBack },
    { new: true }
  ).exec();
  return newFeedBack;
};

module.exports = { create, get, update };
