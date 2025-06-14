function register() {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
  
    if (!username || !password) {
      alert('Please enter username and password');
      return;
    }
  
    localStorage.setItem('user', JSON.stringify({ username, password }));
    alert('Registered successfully!');
  }
  
  function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
  
    const storedUser = JSON.parse(localStorage.getItem('user'));
  
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      document.getElementById('authContainer').style.display = 'none';
      document.getElementById('securePage').style.display = 'block';
    } else {
      alert('Invalid credentials');
    }
  }
  
  function logout() {
    document.getElementById('securePage').style.display = 'none';
    document.getElementById('authContainer').style.display = 'block';
  }
  