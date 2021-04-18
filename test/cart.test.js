

import thunk from 'redux-thunk'
import * as actions from '../store/actions/Cart'

import * as reducers from '../store/reducers/Cart'

import expect from 'expect' // You can use any testing library
import { useDispatch } from 'react-redux'

describe('actions', () => {
    it('should create an action to getBarbiere', () => {
      const prova = {  type: actions.ADD_CART, user: "user2" ,post : "post7" ,price:25}
      expect(actions.addCart("user2","post7",25))
     //   console.log(reducers.initialState)
    })
  })