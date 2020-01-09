module.exports = {
  name: 'idp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/idp',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
