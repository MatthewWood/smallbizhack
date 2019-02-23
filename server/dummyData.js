import Material from './models/Material';
import Component from './models/Component';

export default function () {
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

      const roof = new Component({ myId: '1', components: [], materials: [roofMaterial, roofMaterial], status: 'ready', isProduct: false });
      const sidesAndBack = new Component({ myId: '2', components: [], materials: [sideMaterial, sideMaterial, sideMaterial], status: 'ready', isProduct: false });
      const front = new Component({ myId: '3', components: [], materials: [frontMaterial, entryMaterial], status: 'ready', isProduct: false });
      const walls = new Component({ myId: '4', components: [front, sidesAndBack], materials: [], status: 'blocked', isProduct: false });

      const house = new Component({ myId: '5', components: [walls, roof], materials: [floorMaterial], status: 'blocked', isProduct: true });

      Material.create([floorMaterial, sideMaterial, frontMaterial, entryMaterial, roofMaterial], (error) => {
        if (!error) {
          // console.log('ready to go....');
        }
        Component.create([roof, sidesAndBack, front, walls, house], (error) => {
          if (!error) {
            // console.log('ready to go....');
          }
        });
      });
    });


}
