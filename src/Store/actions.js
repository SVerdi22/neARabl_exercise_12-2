export function updateStoreTest1(testArg1){
    return {
        type: 'UPDATE_STORE_TEST1',
        testArg1: testArg1
    }
}

export function addDataToStore(data){
    return {
        type: 'ADD_DATA_TO_STORE',
        data: data
    }
}