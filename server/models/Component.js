import mongoose from 'mongoose';
const deepPopulate = require('mongoose-deep-populate')(mongoose);

const Schema = mongoose.Schema;

const componentSchema = new Schema({
  myId: { type: 'String', required: true },
  components: [{ type: Schema.Types.ObjectId, required: false, ref: 'Component' }],
  materials: [{ type: Schema.Types.ObjectId, required: false, ref: 'Material' }],
  status: { type: 'String', required: true },
  isProduct: { type: 'Boolean', required: true },
});

componentSchema.plugin(deepPopulate);

export default mongoose.model('Component', componentSchema);
