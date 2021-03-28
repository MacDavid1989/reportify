export default function(newObjectKey,currentObjectKey,dataArray) {
    if(currentObjectKey!==newObjectKey){
        dataArray.sort((a,b) => {
            let queryA
            let queryB

            if(Number(a[newObjectKey])){
                queryA = Number(a[newObjectKey]);
                queryB = Number(b[newObjectKey]);
            } else {
                queryA = a[newObjectKey];
                queryB = b[newObjectKey];
            }

            if(queryA > queryB){
                return 1
            }else if(queryA < queryB){
                return -1
            }else {
                return 0
            }
            
        })
    } else {
        return dataArray.reverse()
    }
}