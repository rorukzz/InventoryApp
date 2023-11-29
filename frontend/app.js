const loginPage = document.getElementById('loginPage');
const registerPage = document.getElementById('registerPage');
const dashboard = document.getElementById('dashboard');
const userInfo = document.getElementById('userInfo');

function showRegister() {
  loginPage.style.display = 'none';
  registerPage.style.display = 'block';
}

function showLogin() {
  loginPage.style.display = 'block';
  registerPage.style.display = 'none';
}

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  try {
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.ok) {
      loginPage.style.display = 'none';
      dashboard.style.display = 'block';
      userInfo.innerHTML = `<p>Logged in as: ${data.user.username}</p>`;
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

document
  .getElementById('registerForm')
  .addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const email = document.getElementById('registerEmail').value;

    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Registered successfully! Please login.');
        showLogin();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });

function logout() {
  dashboard.style.display = 'none';
  loginPage.style.display = 'block';
  userInfo.innerHTML = '';
}
