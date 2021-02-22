import React from 'react'
import AnswerItem from './AnswerItem'
import classes from './AnswersList.module.css'

const AnswersList = props => (
  <ul className={classes.AnswersList}>
    {props.answers.map((answer, id) => {
      return (
        <AnswerItem
          answer={answer}
          key={id}
          onAnswerClick={props.onAnswerClick}
          state={props.state ? props.state[answer.id] : null}
        />
      )
    })}
  </ul>
)

export default AnswersList
