import React, { Component } from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

import close from './close.png';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: ['Javascript', 'UI', 'Javascript', 'UI', 'Javascript', 'UI', 'Javascript', 'UI'],
        }
    }

    
    render() {
        var skills = this.state.skills;
        var addSkill = (event) => {
            event.preventDefault();
            var value = this.refs.skillInput.value;
            this.refs.skillInput.value = '';
            var newSkills = [...skills, value];
            if(newSkills.length<=10 && value!='')
            	this.setState({skills: newSkills});
        }

        var removeSkill = (index) => {
            skills.splice(index, 1);
           	this.setState({skills: skills});
        }
        
        var continueLog = () => {
            console.log(skills);
        }

        const SortableItem = SortableElement(({value, skillIndex}) =>
        	<div className='skill-option'>
			  	<p>{value}</p>
			  	<img src={close} onClick={() => removeSkill(skillIndex)} />
			</div>
		);

		const SortableList = SortableContainer(({skill}) => {
		  	return (
			  	<div className='skills'>
			      	{skills.map((skill, key) => (
	                    <SortableItem key={key} index={key} skillIndex={key} value={skill} />
		             ))}
			    </div>
		 	);
		});

	    const onSortEnd = ({oldIndex, newIndex}) => {
		    this.setState({
		      	skills: arrayMove(this.state.skills, oldIndex, newIndex),
		    });
		};
        
        return(
            <div className='home'>
                <div className='textDetails'>
                    <h2>What are your skills?</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <form className='inputField' onSubmit={addSkill}>
                    <p>Your Skills(Upto 10)</p>
                    <input ref='skillInput' type="text" />
                    <input type="submit" value="Add" />
                </form>
                <SortableList skills={this.state.skills} axis={'xy'} onSortEnd={onSortEnd} distance={10} />
                <button type="text" className='continue' onClick={continueLog}>Continue</button>
            </div>
        );
    }
}

export default Home;