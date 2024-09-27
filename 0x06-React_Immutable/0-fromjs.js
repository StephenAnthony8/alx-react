import { fromJS } from "immutable";

function getImmutableObject(object) {
  return (fromJS(object));
};

const rtn = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};

module.exports = getImmutableObject;