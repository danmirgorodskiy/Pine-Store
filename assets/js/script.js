document.addEventListener('DOMContentLoaded', () => {
	// Wellcome message
    const toastEl = document.getElementById('toast');
    if (toastEl) {
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    }

    // Authentication
    document.querySelector('#signup form').addEventListener('submit', function (e) {
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            e.preventDefault();
            alert('Passwords do not match!');
        }
    });

    function openTab(tabName) {
        const triggerTab = document.querySelector(`[data-bs-target="#${tabName}"]`);
        const tabInstance = new bootstrap.Tab(triggerTab);
        tabInstance.show(); // Відкриває відповідну вкладку
    }

    const urlParams = new URLSearchParams(window.location.search);
    const tabToOpen = urlParams.get('tab');
    if (tabToOpen) {
        openTab(tabToOpen);
    }
});