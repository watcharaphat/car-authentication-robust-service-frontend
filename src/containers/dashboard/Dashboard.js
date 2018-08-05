import { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import { setUsersKey } from '../../actions/User';
import DashboardTemplate from './Template';
import SonTemplate from './SonTemplate';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);

    this.state = {
      myCars: [],
      sonCars: [],
    };
  }

  async componentDidMount() {
    axios.defaults.baseURL = 'http://travelerhub.xyz:3000/';

    await this.setState({
      myCars: [
        {
          name: 'Sweetie Car',
          model: 'Nissan Teana',
        },
      ],
    });

    this.keepFetching();
  }

  async keepFetching() {
    while (true) {
      const response = await axios.get('/carList');
      if (response.data) {
        const sonCars = response.data.result;
        await this.setState({ sonCars });
      }
      await this.sleep(5000);
    }
  }

  sleep = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

  async componentDidUpdate(prevProps) {
    if (this.props.userId !== prevProps.userId) {
      const response = axios.get('/carList');
      const sonCars = response.data.result;
      this.setState({ sonCars });
    }
  }

  onClickUnlock() {
    alert('Unlock');
  }

  onClickLock() {
    alert('Lock');
  }

  async onClickTakeBack() {
    await axios.get('/reset');
    alert('Take car back');
  }

  async onClickBtn() {
    await axios.get('/addCar');

    alert('Provided access');

    // this.setState({
    //   sonCars: [
    //     {
    //       name: 'Sweetie Car',
    //       model: 'Nissan Teana',
    //     },
    //   ],
    // });
  }

  render() {
    switch (this.props.userId) {
      case '1':
        return DashboardTemplate.call(this);
      case '2':
        return SonTemplate.call(this);
    }
  }
}

const mapStateToProps = state => {
  return {
    userId: state.userId,
    users: state.users,
  };
};

export default connect(mapStateToProps, { setUsersKey })(Dashboard);
