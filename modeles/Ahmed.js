const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ahmedschema = new schema({
    title: String,
    body: String,
    numberoflike: Number
});

// تعريف ملف الأرتيكال في قاعدة البيانات
const Anas = mongoose.model("Ahmed" , ahmedschema);

module.exports = Anas