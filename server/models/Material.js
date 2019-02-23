import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const materialSchema = new Schema({
  name: { type: 'String', required: true },
});

export { materialSchema };

export default mongoose.model('Material', materialSchema);
