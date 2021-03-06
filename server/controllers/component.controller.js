import Component from '../models/Component';
const io = require('socket.io')()

io.listen(8001)

io.on('connection', function (socket) {
  console.log('CONNECTED!!!!!')
})

const updateStatus = (status) => {
  switch (status) {
    case 'blocked':
      return 'ready';
    case 'ready':
      return 'in progress';
    case 'in progress':
      return 'complete';
    default:
      return status;
  }
};

const process = async (components, id) => {
  let importantId = '';
  components.forEach(component => {
    if (component.myId === id) {
      if (component.status !== 'blocked') {
        component.status = updateStatus(component.status);
        importantId = component._id;
      }
    }
  });

  components.forEach(component => {
    if (component.components.filter(c => JSON.stringify(c) === JSON.stringify(importantId)).length > 0) {
      let requiredCompleted = component.components.length;
      let complete = 0;
      component.components.forEach(inner => {
        components.forEach(lol => {
          if (JSON.stringify(lol._id) === JSON.stringify(inner) && lol.status === 'complete') {
            complete++;
          }
        });
      });
      if (complete === requiredCompleted) {
        component.status = updateStatus(component.status)
      }
    }
  });
};

const saveAll = async (components) => {
  for (let i = 0; i < components.length; i++) {
    await components[i].save();
  }
};

export function getComponents(req, res) {
  Component.findOne({ isProduct: true })
    .deepPopulate('materials components components.materials components.components.materials ')
    .exec((err, components) => {
      if (err) {
        res.status(500)
          .send(err);
      }
      res.json({ components });
    });
}

export function updateComponent(req, res) {
  Component.find()
    .exec(async (err, components) => {
      if (err) {
        res.status(500)
          .send(err);
      }

      await process(components, req.query.id);
      await saveAll(components);
      Component.findOne({ isProduct: true })
        .deepPopulate('materials components components.materials components.components.materials ')
        .exec((err, components) => {
          if (err) {
            res.status(500)
              .send(err);
          }
          io.emit('components', components)
          res.json({ components });
        });
    });
}
