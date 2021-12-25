import tripList from "../modal/modal.js";

export const getTrips = async (req, res) => {
  try {
    const getAlltrips = await tripList.find();
    if (!getAlltrips) {
      res.status(404).send("No Trips Found please Add Trip First");
    }
    res.status(200).send(getAlltrips);
  } catch (error) {
    res.status(500).send("Error while get trips list", error);
  }
};

export const createTrip = async (req, res) => {
  const { image, title, description } = req.body;
  try {
    const createATrip = new tripList({
      title,
      description,
      image,
    });
    const result = await createATrip.save();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send("Error while create trip", error);
  }
};

export const updateTrip = async (req, res) => {
  const { id } = req.params;
  const { title, description, image } = req.body;

  try {
    const updateATrip = {
      title,
      description,
      image,
      _id: id,
    };
    await tripList.findByIdAndUpdate(id, updateATrip, { new: true });
    res.status(201).send(updateATrip);
  } catch (error) {
    res.status(500).send("Error while Update trip", error);
  }
};
export const deleteTrip = async (req, res) => {
  const { id } = req.params;
  console.log("hitted");
  try {
    const deletePost = await tripList.findOneAndRemove(id);
    res.status(200).send("Deleted Successfully!!");
  } catch (error) {
    res.status(500).send("Error while Delete trip", error);
  }
};
