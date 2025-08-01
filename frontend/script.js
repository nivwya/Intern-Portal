fetch('http://localhost:5000/api/user')
  .then(res => res.json())
  .then(data => {
    document.getElementById('name').innerText = data.name;
    document.getElementById('referral').innerText = data.referralCode;
    document.getElementById('raised').innerText = data.totalRaised;

    const rewardsList = document.getElementById('rewards');
    data.rewards.forEach(reward => {
      const li = document.createElement('li');
      li.innerText = reward;
      rewardsList.appendChild(li);
    });
  });
