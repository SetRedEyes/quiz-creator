import axios from 'axios'

export default axios.create({
  baseURL:'https://react-quiz-setredeyes-default-rtdb.firebaseio.com/'
})