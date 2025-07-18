const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articalschema = new Schema({
    title: String,
    body: String,
    numberoflike: Number,
});

// تعريف ملف الأرتيكال في قاعدة البيانات
const Article = mongoose.model("Article" , articalschema);

module.exports = Article;