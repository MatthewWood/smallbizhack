import Material from './models/Material';
import Component from './models/Component';

export default async function () {
  Component.count()
    .exec((err, count) => {
      if (count > 0) {
        return;
      }

      const floorMaterial = new Material({ name: 'wooden floor' });
      const sideMaterial = new Material({ name: 'wooden side' });
      const frontMaterial = new Material({ name: 'wooden front' });
      const entryMaterial = new Material({ name: 'entry cutout' });
      const roofMaterial = new Material({ name: 'wooden roof' });

      const roof = new Component({ components: [], materials: [roofMaterial, roofMaterial], status: 'ready', isProduct: false });
      const sidesAndBack = new Component({ components: [], materials: [sideMaterial, sideMaterial, sideMaterial], status: 'ready', isProduct: false });
      const front = new Component({ components: [], materials: [frontMaterial, entryMaterial], status: 'ready', isProduct: false });
      const walls = new Component({ components: [front, sidesAndBack], materials: [], status: 'blocked', isProduct: false });

      const house = new Component({ components: [walls, roof], materials: [floorMaterial], status: 'blocked', isProduct: true });

      Material.create([floorMaterial, sideMaterial, frontMaterial, entryMaterial, roofMaterial], (error) => {
        if (!error) {
          // console.log('ready to go....');
        }
      });

      Component.create([roof, sidesAndBack, front, walls, house], (error) => {
        if (!error) {
          // console.log('ready to go....');
        }
      });
    });


}
