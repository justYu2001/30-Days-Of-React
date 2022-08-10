import { Component } from 'react';
import frontEndTechnologiesImage from './assets/images/frontend_technologies.png';
import avatar from './assets/images/avatar.jpeg';
import Image from './Image';
import SubscriptionForm from './SubscriptionForm';
import UserCard from './UserCard';

const user = {
  name: 'justYu2001',
  avatar,
  job: 'Frontend Developer',
  country: 'Taiwan',
  skills: ['HTML', 'CSS', 'JS', 'Vue', 'Git', 'Python'],
  createdAt: '08/06/2022',
};

class App extends Component {
    render() {
      return (
        <div id='app'>
          <Image src={frontEndTechnologiesImage} alt="FrontEnd Technologies" />
          <SubscriptionForm />
          <UserCard user={user} />
        </div>
      );
    }
};

export default App;