const http = require('http');

// Имитация запроса к БД / API
const fetchUserData = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                id: 101,
                username: 'AlmauStudent2026',
                theme: 'dark'
            });
        }, 500);
    });
};

// Клиентский JS (Hydration)
function getClientCode() {
    return `
// client.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Ready. Starting Hydration Process...');

    // 1. Получаем состояние с сервера
    const initialState = window.__INITIAL_STATE__ || {};
    console.log('Hydrating with state:', initialState);

    // 2. Получаем DOM-элементы
    const profileNode = document.getElementById('user-profile');
    const connectBtn = document.getElementById('connect-btn');
    const statusBadge = document.getElementById('status-badge');

    if (!profileNode || !connectBtn || !statusBadge) {
        console.error('Hydration failed: Target nodes missing.');
        return;
    }

    // 3. Hydration (оживляем интерфейс)
    setTimeout(() => {
        profileNode.classList.remove('loading');
        connectBtn.removeAttribute('disabled');
        connectBtn.textContent = 'Go Online';

        connectBtn.addEventListener('click', () => {
            if (statusBadge.textContent === 'Offline') {
                statusBadge.textContent = 'Online';
                statusBadge.style.color = 'green';
                connectBtn.textContent = 'Go Offline';

                console.log(
                    'User ' + initialState.username + ' connected.'
                );
            } else {
                statusBadge.textContent = 'Offline';
                statusBadge.style.color = 'inherit';
                connectBtn.textContent = 'Go Online';
            }
        });

        console.log('[SUCCESS] Node Hydrated Successfully');
    }, 1000);
});
`;
}

// Сервер
const server = http.createServer(async (req, res) => {

    if (req.method === 'GET' && req.url === '/') {

        const userData = await fetchUserData();

        const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>SSR Hydration Lab</title>

    <script>
        // Передача данных с сервера на клиент
        window.__INITIAL_STATE__ = ${JSON.stringify(userData)};
    </script>

    <style>
        body {
            font-family: system-ui;
            padding: 2rem;
        }

        .hydration-target {
            border: 2px dashed #0066cc;
            padding: 1rem;
        }

        .loading {
            opacity: 0.5;
        }
    </style>
</head>

<body>
    <h1>Dashboard</h1>

    <!-- SSR: уже отрендеренный HTML -->
    <div id="user-profile" class="hydration-target loading" data-hydrate="true">
        <h2>
            Welcome, <span id="display-name">${userData.username}</span>
        </h2>

        <p>
            Status: <span id="status-badge">Offline</span>
        </p>

        <button id="connect-btn" disabled>
            Connecting...
        </button>
    </div>

    <!-- Hydration -->
    <script src="/client.js"></script>
</body>
</html>
`;

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);

    } else if (req.method === 'GET' && req.url === '/client.js') {

        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.end(getClientCode());

    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

// Запуск
server.listen(3000, () => {
    console.log('SSR server running on http://localhost:3000');
});