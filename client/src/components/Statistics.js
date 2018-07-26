import React, { Component } from 'react';
import axios from 'axios';

class Statistics extends Component {
  constructor() {
    super();
    this.state = {
      stats: {}
    };
  }

  componentDidMount() {
    this.fetchStats();
  }

  fetchStats() {
    axios.get('/api/stats').then(res => {
      this.setState(
        {
          stats: res.data
        },
        () => {
          console.log(this.state.stats);
        }
      );
    });
  }

  renderStats() {
    const stats = this.state.stats;
    const dayKeys = Object.keys(stats);

    return dayKeys.map(dayKey => {
      const itemKeys = Object.keys(stats[dayKey]);

      const items = itemKeys.map(itemKey => {
        if (itemKey === 'total') return;

        const item = stats[dayKey][itemKey];
        return (
          <div key={itemKey}>
            <div>{item.name}</div>
            <div>Count: {item.count}</div>
          </div>
        );
      });

      return (
        <div key={dayKey}>
          <div>{dayKey}:</div>
          <br />
          {items}
          <br />
          <div>
            Total for {dayKey}: ${stats[dayKey].total}
          </div>
          <br />
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderStats()}</div>;
  }
}

export default Statistics;
