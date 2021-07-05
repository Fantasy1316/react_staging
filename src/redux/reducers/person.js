import { ADD_PERSON } from '../constant'

const initState = [{ id: 0, username: 'JayChou', age: 48 }]

const personReducer = (perState = initState, action) => {
  const { type, data } = action

  switch (type) {
    case ADD_PERSON:
      return [data, ...perState]

    default:
      return perState
  }
}

export default personReducer
