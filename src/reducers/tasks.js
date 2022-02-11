import * as types from './../constants/ActionTypes'
var data = JSON.parse(localStorage.getItem('tasks'))
var initialState = data ? data : [{
    id : 1,
    name : 'Hoc Lap Trinh',
    status : true
}]
var createGuid = () => {
    function s4() {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
       return s4()+s4()+s4()+s4(); // Example => 'e014026082e6237b'
}
var findId = (tasks, id) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if(task.id === id) {
            result = index
        }
    })
    return result
}
// var onCloseForm = () => {
//         this.setState({
//             isDisplayForm : false
//         })
//     }
var myReducer = (state = initialState, action) => {
    var id =''
    var index = -1
    switch(action.type) {
        case types.LIST_ALL:
            return state
        case types.SAVE_TASK:
            var task = {
                id : action.task.id,
                name : action.task.name,
                status : action.task.status
            }
            if(task.id) {
                console.log('cap nhat')
                index = findId(state, task.id)
                state[index] = task
            } else {
                console.log('tao moi')
                task.id = createGuid()
                state.push(task);
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state]
        case types.UPDATE_STATUS_TASK:
            // console.log(action)
            id = action.id
            index = findId(state, id)
            // console.log(index)
            if(index !== -1) {
                // state[index].status = !state[index].status
                var cloneTask = {...state[index]}
                cloneTask.status = !cloneTask.status
                console.log(cloneTask)

                state[index] = cloneTask
            }
            localStorage.setItem('tasks', JSON.stringify(state))
            
            return [...state]
        case types.DELETE_TASK:
            id = action.id
            index = findId(state, id)
            if(index !== -1) {
                state.splice(index, 1)
            }
            localStorage.setItem('tasks', JSON.stringify(state))
            // onCloseForm()
            
            return [...state]
        default:
            return state
    }
}

export default myReducer