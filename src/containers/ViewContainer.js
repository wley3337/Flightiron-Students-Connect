import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'




class ViewContainer extends React.Component{
    state = {
        content: "",
        newTopic:"",
        dropDownValueArray: []
    }


    handleOnChange= (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleDropDownSelect = (e,value) => {
        this.setState({
            dropDownValueArray: value.value
        })
    }

    componentDidMount(){
        this.props.getCategories()
    }

    handleDelete = () =>{
        this.setState({
            content: "",
            newTopic:"",
            dropDownValueArray: []
        })
        this.dipslayDropDown()
    }

    handleSave = () =>{
        const categoryArry = this.state.dropDownValueArray.map(index => this.props.categories.find(cat => cat.id === index))
        
        this.props.updateUser(this.state, categoryArry)
    }

    dipslayDropDown(){
    const optionsArray = this.props.categories.map(category => ({ key: category.id, text: category.name, value: category.id }))
    return <Dropdown 
                    placeholder='Categories' 
                    fluid 
                    multiple
                    search 
                    selection 
                    options= {optionsArray}
                    value={this.state.dropDownValueArray}
                    onChange={(e,value) => this.handleDropDownSelect(e,value)}
                />
    }
   

   render(){ 
        return(
            <div>
                    {this.props.categories.length > 0 ? this.dipslayDropDown() : null}
                    <input type="text" name="newTopic" value={this.state.newTopic} placeholder="New Topic" onChange={this.handleOnChange}/>
                    <button name="delete" onClick={this.handleDelete}>Delete</button>
                    <button name="save"onClick={this.handleSave}>Save</button>
                    <textarea name="content" value={this.state.content} onChange={this.handleOnChange}/>
                        
            </div>
        )}
    }

const mapStateToProps = (state) => {
   return {
       categories: state.categories,
       notes: state.notes
    }
}

export default connect(mapStateToProps, actions)(ViewContainer)


  
  
  