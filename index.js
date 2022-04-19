import axios from "axios";

const fields = [
    'shortName',
];

let payload  = [];

axios.get('https://gw.selinatech.com/locations/api/locations/').then((data) =>{
    handle(data.data);
    console.log(payload)
})

function handle(json){
    for (let i = 0; i < fields.length; i++){
        payload.push({
            'missing_field': fields[i],
            'locations': JSON.stringify(findMissingField(fields[i], json),null,4)
        })
    }
}

function findMissingField(field, json){
    let missingFieldsLocation = []
    for (let i = 0; i < json.length; i++){
        if (json[i][field] == null || json[i][field] === ""){
            // missingFieldsLocation.push(json[i]['id'])
            missingFieldsLocation.push({
                "id": json[i]['id'],
                "name": json[i]['name'],
            })
        }
    }
    return missingFieldsLocation;
}
