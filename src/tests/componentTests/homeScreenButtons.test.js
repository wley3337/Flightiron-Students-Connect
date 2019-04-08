import React from 'react'
import { shallow } from 'enzyme'
//dependant components:
import HomeScreenButtons from '../../components/HomeScreenButtons'
import { Button, Item } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

describe('Home Screen Component Test: ', ()=>{

    const mockProps ={
        id: 'login',
        inverted: true,
        as: Link ,
        to: "/login",
        onClick: jest.fn()
    }
    const wrapper =  shallow(<Button {...mockProps}/>)

    it('renders consistantly', ()=>{
        expect(wrapper).toMatchSnapshot()
    })

    it('logs in onclick', ()=>{
        wrapper.find('#login').simulate('click');
        expect(mockProps.onClick).toHaveBeenCalled()
    })


})