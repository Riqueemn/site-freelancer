import React, { Component } from 'react';


export default class SearchBar extends Component{

    render(){
        return(
            <di>
                <form>
                    <div className="form-group">
                    <input type="text" className="form-control" placeholder="search" />
                    </div>
                </form>
            </di>
        )
    }

}