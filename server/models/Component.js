import mongoose from 'mongoose';
import { materialSchema } from './Material';

const Schema = mongoose.Schema;

const componentSchema = new Schema();
componentSchema.add({
  components: { type: [componentSchema], required: false },
  materials: { type: [materialSchema], required: false },
  status: { type: 'String', required: true },
  isProduct: { type: 'Boolean', required: true },
});

export default mongoose.model('Component', componentSchema);
