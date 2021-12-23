var Tool = require("../models/tool");
const { whisp, gossip, yell, ignore } = require("../helpers/whisper");
ignore(gossip);

// prettier-ignore
module.exports = {
  find_All: async (req, res) => {
    try {
      whisp("Requesting the server to give me all Tools from the database ...")
      const foundTools = await Tool
                                  .find()
                                  .populate(["owner","renters"])
                                  .select("-password");

      res.send(foundTools);
    } catch (error) {
      yell(error)
      next(error)
      res.send(error);
    }
  },
  create_A_New_One: async (req, res) => {
    const { userId, title, description, price, category, pictures } = req.body
    const tool = { title, description, price, category, pictures }

    for(attribute in tool){
      // if the attribute is undefined, empty string, or a falsy value, it will be deleted
      if(!attribute) delete tool[attribute]
    }

    try {

      whisp("Requesting the server, to save a new tool, for a specific user, into the database ...")

      // Find the user
      const foundUser = await User.findById(userId);

      // create a new Tool into the database
      const newTool = await Tool.create(tool);

      // update the user, by pushing newTool._id (the id object, and not the string id) to ownerPosts array
      let updatedUser = await User.findByIdAndUpdate(
        foundUser?._id,
        { $push: { ownedTools: newTool?._id } },
        { new: true }
      ).populate(["ownedTools", "rentedTools"])
      .select("-password")

      whisp("Server Response: ")
      whisp("Updated User: ", updatedUser, "\n")

      // update the Tool by setting the foundUser._id  (the id object, and not the string id) to user attribute
      let updatedTool = await Tool.findByIdAndUpdate(
        newTool?._id,
        { user: foundUser?._id },
        { new: true }
      ).populate("user")
      .select("-password")

      whisp("Server Response: ");
      whisp("Updated Tool: ", updatedTool, "\n");

      res.status(201).send(updatedOwnerPost);
    } catch (error) {
      yell(error)
      next(error);
      // res.send(error);
    }
  },
  find_One: async (req, res) => {
    const { toolId } = req.params
    try {
      whisp("Requesting the server to give me a specific Tool from the database ...")

      const foundTool = await Tool
                              .findById({_id: toolId})
                              .populate(["owner","renters"])
                              .select("-password")

      whisp("Server Response: ");
      whisp("Found Tool: ", foundTool, "\n");
      res.status(200).json(foundTool);

    } catch (error) {
      yell(error)
      next(error)
      // res.send(error)
    }
  },
  update_One: async (req, res) => {
    const { toolId } = req.params

    const { userId, title, description, price, category, pictures } = req.body
    const newTool = { title, description, price, category, pictures }

    for(attribute in newTool){
      // if the attribute is undefined, empty string, or a falsy value, it will be deleted
      if(!attribute) delete newTool[attribute]
    }

    try {
      whisp("Requesting the server to update a specific Tool into the database ...")

      // the server will try the following
      const updatedTool = await Tool.findByIdAndUpdate(
        {_id: toolId},
        newTool,
        { new: true }
      );
      // Success
      whisp("Server Response: ");
      whisp("Updated Tool: ", updatedTool, "\n");

      res.status(200).json(updatedTool);
    } catch (err) {
      yell(error)
      next(error)
      // res.send(err)
    }
  },
  view_Plus_PLUS: async (req, res) => {
    const { toolId } = req.params

    try {
      const updatedTool = Tool.findOneAndUpdate(
          { _id: toolId },
          { $inc: { views: 1 } },
          { useFindAndModify: false, new: true }
      ).populate(["owner","renters"])
      .select("-password")

      res.status(201).json(updatedTool)
    } catch (error) {
      yell(error)
      next(error)
      // res.send(error)
    }
  },
  remove_One: async (req, res) => {
    const { toolId } = req.params

    try {
      whisp("Requesting the server to delete a specific OwnerPost from the database ...\n");
      // the server will try the following
      const removedTool = await Tool
                                  .findByIdAndRemove({ _id: toolId })
                                  .populate(["owner","renters"])
                                  .select("-password")

      whisp("Server Response: ")
      whisp("Removed Tool: ", removedTool, "\n")

      // Once the Tool has been removed, we must delete the id from the tools of the user
      const updatedOwner = await User.findByIdAndUpdate(
          { _id: removedTool?.owner?._id },
          { $pull: { ownedTools: removedTool?._id }},
          { new: true }
      ).populate(["ownedTools","rentedTools"])
      .select("-password")

      whisp("Server Response: ");
      whisp("Updated Owner: ", updatedOwner, "\n");

      for(let tool of removedTool.renters){
        let updatedRenter = User.findByIdAndUpdate(
          { _id: tool._id },
          { $pull : { rentedTools: removedTool?._id }},
          { new: true }
        )
        whisp("Server Response: ");
        whisp("Updated Renter: ", updatedRenter, "\n");
      }

      // Success
      res.status(200).json(removedTool);
  } catch (error) {
    yell(error)
    next(error)
    res.status(500).send(error)
  }
  },
};
