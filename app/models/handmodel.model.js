module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      availability: String,
      from: String,
      ethnic: String,
      expereience: String,
      gender: String,
      height: String,
      nationality: String,
      shoesize: String,
      skintone: String,
      published: Boolean,
      filename: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const HandModel = mongoose.model("handmodel", schema);
  return HandModel;
};
