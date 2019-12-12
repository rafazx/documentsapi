const { model, Schema } = require('mongoose');

const DocumentShema = new Schema({
    title : {
        type : String,
        require : true
    },
    content : {
        type : Schema.Types.Mixed
    },
    fileUrl : {
        type : String
    }
},
{
    timestamps: true,
    collection: 'Documents'
})

module.exports = model('Document', DocumentShema);