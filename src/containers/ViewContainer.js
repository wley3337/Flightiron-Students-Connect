import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'


const options = [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'ia', text: 'Information Architecture', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
    { key: 'meteor', text: 'Meteor', value: 'meteor' },
    { key: 'node', text: 'NodeJS', value: 'node' },
    { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
    { key: 'ruby', text: 'Ruby', value: 'ruby' },
    { key: 'ui', text: 'UI Design', value: 'ui' },
    { key: 'ux', text: 'User Experience', value: 'ux' },
  ]

class ViewContainer extends React.Component{
    state = {
        content: ""
    }


    handleOnChange= (e) =>{
        this.setState({
            content: e.target.value
        })
    }

   render(){ 
       console.log(this.props)
   return(
   <div>
        ViewContainer
        <Dropdown placeholder='Skills' fluid multiple selection options={options} />
        <button name="delete">Delete</button>
        <button name="save">Save</button>
            
        <textarea name="content" value={this.state.content} onChange={this.handleOnChange}/>
            
   </div>
   )}
}

const mapStateToProps = (state) => {
   return {categories: state.categories,
    notes: state.notes}
}

export default connect(mapStateToProps, actions)(ViewContainer)


  
  
  