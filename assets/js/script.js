document.addEventListener('DOMContentLoaded', () => {
	// Wellcome message
    const toastEl = document.getElementById('toast');
    if (toastEl) {
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    }
});