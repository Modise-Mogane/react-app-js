import React, { useState } from 'react';
import Profile from './Profile';

function Details() {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    margin: '12px',
    width: '260px',
    borderRadius: '10px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif',
  };

  const imageStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
    border: '1px solid #ccc',
  };

  const infoStyle = {
    textAlign: 'center',
    lineHeight: '1.5',
    fontSize: '14px',
  };

  const [pic, setPic] = useState(null);
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  const [profiles, setProfiles] = useState([]);

  const uploadProfile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProfile = {
      image: pic,
      name,
      job,
      phone,
      email,
      bio,
    };
    setProfiles([...profiles, newProfile]);
    setPic(null);
    setName('');
    setJob('');
    setPhone('');
    setEmail('');
    setBio('');
  };

  return (
    <>
      <form
        style={{
          marginLeft: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          margin: '12px',
          width: '260px',
          borderRadius: '10px',
          boxShadow: '0 2px 6px rgba(63, 63, 63, 0.1)',
          backgroundColor: '#fff',
          fontFamily: 'Arial, sans-serif',
        }}
        onSubmit={handleSubmit}
      >
        <input required type="file" accept="image/*" onChange={uploadProfile} />
        <input required type="text" placeholder="Enter your user name..." value={name} onChange={(e) => setName(e.target.value)} />
        <input required type="tel" placeholder="Enter your job title..." value={job} onChange={(e) => setJob(e.target.value)} />
        <input required type="tel" placeholder="Enter your phone..." value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input required type="email" placeholder="Enter your email..." value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea required placeholder="Enter your user bio..." value={bio} onChange={(e) => setBio(e.target.value)} />
        <br />
        <input type="submit" value="Submit" />
      </form>

      {profiles.map((profile, index) => (
        <Profile
          key={index}
          cardStyle={cardStyle}
          imageStyle={imageStyle}
          infoStyle={infoStyle}
          image={profile.image}
          name={profile.name}
          job={profile.job}
          phone={profile.phone}
          email={profile.email}
          bio={profile.bio}
        />
      ))}
    </>
  );
}

export default Details;