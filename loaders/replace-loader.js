module.exports = function(source, sourceMap, meta) {
  console.log('replace-loader start')
  const r = source.replace('hahaha', "hi");
  return r;
};
