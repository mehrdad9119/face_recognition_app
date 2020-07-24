import React from 'react';

class Rank extends React.Component {
  constructor() {
    super();
    this.state = {
      rank: ''
    }
  }

  componentDidMount() {
    this.generateRank(this.props.entries)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.entries === this.props.entries && prevProps.name === this.props.name) {
      return;
    }
    this.generateRank(this.props.entries);
  }

  generateRank = (entries) => {
    fetch(`https://1qshfcatw8.execute-api.us-east-1.amazonaws.com/prod/rank?rank=${entries}`)
      .then(res => res.json())
      .then(data => this.setState({ rank: data.input}))
      .catch(err => console.log(err));
  }

  render() {
    const { name, entries } = this.props 
    return (
      <div>
        <div className='white f3'>
          {`${name}, your current entry count is...`}
        </div>
        <div className='white f1'>
          {entries}
        </div>
        <div className='white f3'>
          {`Rank: ${this.state.rank}`}
        </div>
      </div>
    );
  }
}

export default Rank;