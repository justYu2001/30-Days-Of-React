import './App.css';
import avatar from './assets/images/avatar.jpeg'
import checkIcon from './assets/icons/check-circle-fill.svg';
import clockIcon from './assets/icons/clock.svg';
import frontEndTechnologiesImage from './assets/images/frontend_technologies.png';

const FrontEndTechnologiesImage = () => <img src={frontEndTechnologiesImage} alt="" />

const Button = () => <button>click me</button>;
const Input = () => <input type="text" placeholder="input" />;

const WarningAlert = () => (
  <div>
    <p>Warning!</p>
  </div>
);

const SuccessAlert = () => (
  <div>
    <p>Success!</p>
  </div>
);

const SubscriptionForm = () => (
  <div className="subscription-block">
      <h1 className='title'>SUBSCRIBE</h1>
      <p className='description'>Sign up with your email address to receive news and updates.</p>
      <div>
        <input type="text" placeholder='First name'/>
        <input type="text" placeholder='Last name'/>
        <input type="text" placeholder='Email'/>
      </div>
      <button>Subscribe</button>
  </div>
);

const generateHexColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
};

const HexColor = () => {
  const color = generateHexColor();
  const styles = {
    padding: '20px',
    backgroundColor: color,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  };
  
  return <div style={styles}>{color}</div>;
}

const createdAtTimeString = (date) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const [monthString, dayString, yearString] = date.split('/');

  return `${months[parseInt(monthString) - 1]} ${dayString}, ${yearString}`;
}

const UserCard = () => {
  const user = {
    name: 'justYu2001',
    job: 'Frontend Developer',
    country: 'Taiwan',
    skills: ['HTML', 'CSS', 'JS', 'Vue', 'Git', 'Python'],
    createdAt: '08/06/2022',
  };

  return (
    <div className="user-card">
      <img src={avatar} alt="" style={{ width: '200px', borderRadius: '50%' }}/>
      <div style={{ display: 'flex' }}>
        <span className='username'>{user.name}</span>
        <img src={checkIcon} alt="" />
      </div>
      <p style={{ margin: '0 5px', color: '#aaa' }}>{user.job}, {user.country}</p>
      <h2 style={{ fontSize: '20px' }}>SKILLS</h2>
      <ul style={{ padding: 0 }}>
        {user.skills.map(skill => <li key={skill} className='skill'>{skill}</li>)}
      </ul>
      <div style={{ display: 'flex' }}>
        <img src={clockIcon} alt="" />
        <span style={{ padding: '0 5px' }}>{createdAtTimeString(user.createdAt)}</span>
      </div>
    </div>
  );
};

const App = () => (
  <div id="app">
    <FrontEndTechnologiesImage />
    <SubscriptionForm />
    <div style={{ margin: '20px' }}>
      {[...Array(5)].map((_, index) => <HexColor key={`color${index}`} /> )}
    </div>
    <UserCard />
  </div>
);


export default App;