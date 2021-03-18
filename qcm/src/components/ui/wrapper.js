import React from "react";


class Wrapper extends React.Component {
    render() {
        return (
            <div className='card' style={{ paddingLeft: 20, paddingRight: 20 }}>
                {this.props.children}
            </div>
        );
    }

}

export default Wrapper