class RippleNotify {
    static success(message = 'This is a success message!', options = {}) {
        this.createToast('success', message, options);
    }

    static error(message = 'This is an error message!', options = {}) {
        this.createToast('error', message, options);
    }

    static info(message = 'This is an info message!', options = {}) {
        this.createToast('info', message, options);
    }

    static warning(message = 'This is a warning message!', options = {}) {
        this.createToast('warning', message, options);
    }

    static default(message = 'This is a default message!', options = {}) {
        this.createToast('default', message, options);
    }

    static createToast(type = 'default', message, options) {
        const toast = document.createElement('div');
        toast.className = `toast toast--${type}`;

        const icon = document.createElement('i');
        icon.className = `toast-icon`;
        switch (type) {
            case 'success':
                icon.classList.add('fas', 'fa-check-circle');
                break;
            case 'error':
                icon.classList.add('fas', 'fa-times-circle');
                break;
            case 'info':
                icon.classList.add('fas', 'fa-info-circle');
                break;
            case 'warning':
                icon.classList.add('fas', 'fa-exclamation-circle');
                break;
            default:
                icon.classList.add('fas', 'fa-bell');
        }

        const text = document.createElement('span');
        text.textContent = message;

        toast.appendChild(icon);
        toast.appendChild(text);

        // Set the position of the toast
        const position = options.position || 'top-right';
        toast.style.position = 'fixed';
        switch (position) {
            case 'top-left':
                toast.style.top = '10px';
                toast.style.left = '10px';
                break;
            case 'top-right':
                toast.style.top = '10px';
                toast.style.right = '10px';
                break;
            case 'bottom-left':
                toast.style.bottom = '10px';
                toast.style.left = '10px';
                break;
            case 'bottom-right':
                toast.style.bottom = '10px';
                toast.style.right = '10px';
                break;
            default:
                toast.style.top = '10px';
                toast.style.right = '10px';
        }

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.transition = 'opacity 2s ease';
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 500);
        }, 3000); // Remove the toast after 3 seconds
    }
}

window.RippleNotify = RippleNotify;