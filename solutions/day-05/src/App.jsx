import './App.css'
import frontEndTechnologiesImage from './assets/images/frontend_technologies.png';
import avatar from './assets/images/avatar.jpeg';
import checkIcon from './assets/icons/check-circle-fill.svg';
import clockIcon from './assets/icons/clock.svg';

const Image = ({ src, alt }) => <img src={src} alt={alt} />;

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

const HexColor = ({ color }) => {
  const styles = {
    padding: '20px',
    backgroundColor: color,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  };
  
  return <div style={styles}>{color}</div>;
}

const HexColorList = ({ length }) => {
  const generateHexColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  };

  const hexColorList = [...Array(length)].map((_, index) => {
    const color = generateHexColor();
    return <HexColor key={color} color={color} />;
  });

  return (
    <div style={{ margin: '20px' }}>
      {hexColorList}
    </div>
  );
};

const user = {
  name: 'justYu2001',
  job: 'Frontend Developer',
  country: 'Taiwan',
  skills: ['HTML', 'CSS', 'JS', 'Vue', 'Git', 'Python'],
  createdAt: '08/06/2022',
};

const UserCard = ({ user }) => {
  const { name, job, country, skills, createdAt } = user;

  const createdAtTimeString = (date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
    const [monthString, dayString, yearString] = date.split('/');
  
    return `${months[parseInt(monthString) - 1]} ${dayString}, ${yearString}`;
  }

  return (
    <div className="user-card">
      <img src={avatar} alt="" style={{ width: '200px', borderRadius: '50%' }}/>
      <div style={{ display: 'flex' }}>
        <span className='username'>{name}</span>
        <img src={checkIcon} alt="" />
      </div>
      <p style={{ margin: '0 5px', color: '#aaa' }}>{job}, {country}</p>
      <h2 style={{ fontSize: '20px' }}>SKILLS</h2>
      <ul style={{ padding: 0 }}>
        {skills.map(skill => <li key={skill} className='skill'>{skill}</li>)}
      </ul>
      <div style={{ display: 'flex' }}>
        <img src={clockIcon} alt="" />
        <span style={{ padding: '0 5px' }}>{createdAtTimeString(createdAt)}</span>
      </div>
    </div>
  );
};

const App = () => (
  <div id="app">
    <Image src={frontEndTechnologiesImage} alt="Front End Technologies" />
    <SubscriptionForm />
    <HexColorList length={5} />
    <UserCard user={user} />
  </div>
);

export default App
