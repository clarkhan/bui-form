/**
 * @fileOverview 表单域的入口文件
 * @ignore
 */
var BUI = require('bui-common'),
  Field = require('./field/base');

BUI.mix(Field, {
  Text : require('./field/text'),
  Date : require('./field/date'),
  Select : require('./field/select'),
  Hidden : require('./field/hidden'),
  Number : require('./field/number'),
  Check : require('./field/check'),
  Radio : require('./field/radio'),
  Checkbox : require('./field/checkbox'),
  Plain : require('./field/plain'),
  List : require('./field/list'),
  TextArea : require('./field/textarea'),
  Uploader : require('./field/uploader'),
  CheckList : require('./field/checklist'),
  RadioList : require('./field/radiolist')
});

module.exports = Field;
