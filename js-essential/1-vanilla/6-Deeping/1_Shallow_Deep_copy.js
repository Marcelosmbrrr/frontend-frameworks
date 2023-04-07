// There are two ways to clone an object in Javascript
// Shallow copy: means that only the first level of the object is copied. Deeper levels are referenced.
// Deep copy: means that all levels of the object are copied. This is a true copy of the object.

// ==== SHALOW COPY ==== //

const obj1 = { name: 'Version 1', additionalInfo: { version: 1 } };

const shallowCopy1 = { ...obj1 };
const shallowCopy2 = Object.assign({}, obj1);

// This changes only the 'name' of this object
// After updating a property in the first level of the cloned objects, the original property is not updated.
shallowCopy1.name = 'Version 2';
// This changes both objects - the copy and the original
// After updating a property in a deeper level, the original property is also updated. This happens because, in this case, deeper levels are referenced, not copied.
shallowCopy1.additionalInfo.version = 2;

// ==== DEEP COPY ==== //

// A deep copy can be achieved using JSON.parse + JSON.stringify
// All object is copied instead of just referenced

const obj2 = { name: 'Version 1', additionalInfo: { version: 1 } };

const deepCopy = JSON.parse(JSON.stringify(obj2));

deepCopy.name = 'Version 2';
deepCopy.additionalInfo.version = 2;