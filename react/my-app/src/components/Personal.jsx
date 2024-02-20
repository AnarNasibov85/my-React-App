import React from 'react';
import PersonalDesc from './PersonalDesc';

function personal({
  title,
  salary,
  married,
  address,
  imgUrl,
  color,
  desc,
  members,
}) {
  // const {title,salary,married,address,imgUrl,color}=probs
  // const marriedStatus = married ? 'evli' : 'subay';
  let marriedStatus = 'subay';
  if (married) {
    marriedStatus = 'evli';
  }
  // const totalKm=address.reduce((sum,item)=>sum+item,0)
  function totalCount() {
    let totalKm = 0;
    for (let i = 0; i < address.length; i++) {
      totalKm += address[i];
    }
    return totalKm;
  }

  const profileImg = imgUrl
    ? imgUrl
    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIBkkgE-Nw5C79K2LVbzfB7PAliWiysRZELTGV4eS_MA&s';
  return (
    <div>
      <hr />
      <img
        src={profileImg}
        alt={title + 'photo'}
        style={{ width: '200px' }}
      />
      <h1>personal:{title}</h1>
      <h2>maashi:{salary}</h2>
      <h2>aile veziyyeti:{marriedStatus}</h2>
      <h2>addim sayi:{totalCount()}</h2>
      <h2>sevdiyi reng:{color}</h2>
      <ul>
  {members?.map((item, index) => (
    <li key={'members' + index}>
      {index + 1}.{item}
    </li>
  ))}
</ul>

      {/* <p>{desc}</p> */}

      <PersonalDesc
        edu='MDIU'
        desc={desc}
      />
    </div>
  );
}

export default personal;
