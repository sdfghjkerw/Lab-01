function getClientCode() {
    return `

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Ready. Starting Hydration Process...');

    const initialState = window.__INITIAL_STATE__ || {};
    console.log('Hydrating with state:', initialState);

    const profileNode = document.getElementById('user-profile');
    const connectBtn = document.getElementById('connect-btn');
    const statusBadge = document.getElementById('status-badge');

    if (!profileNode || !connectBtn || !statusBadge) {
        console.error('Hydration failed: Target nodes missing.');
        return;
    }

    setTimeout(() => {
        profileNode.classList.remove('loading');
        connectBtn.removeAttribute('disabled');
        connectBtn.textContent = 'Go Online';

        connectBtn.addEventListener('click', () => {
            if (statusBadge.textContent === 'Offline') {
                statusBadge.textContent = 'Online';
                statusBadge.style.color = 'green';
                connectBtn.textContent = 'Go Offline';

                console.log('User ' + initialState.username + ' connected to socket.');
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