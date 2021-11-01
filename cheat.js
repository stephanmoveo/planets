exports.findVisitorSystemHandler = async (data) => {
  const response = await solarModel
    .findById({ _id: data.id })
    .select({ starName: 1, _id: 0 })
    .populate({
      path: "planets",
      select: { visitors: 1, _id: 0 },
      populate: {
        path: "visitors",
        select: "visitorName",
      },
    })
    .exec();
  const { starName, planets } = response;
  const visitorNames = planets.filter((visitor) => {
    return visitor.visitors.length > 0 && visitor;
  });
  const filtered = visitorNames.map((item) => {
    return item.visitors.map((elem) => ({
      name: elem.visitorName,
      id: elem._id,
    }));
  });
  let visitors = filtered.flat();
  const uniqueIds = [...new Set(visitors.map((v) => v.id))];
  visitors = uniqueIds.map((id) => {
    const name = visitors.find((v) => v.id === id).name;
    return {
      id,
      name,
    };
  });
  const result = {
    starName,
    visitors: visitors,
  };
  return result;
};