
class RippleNotify {

    static success(message = 'This is a success message!') {
        this.createToast('success', message);
    }


    static createToast(type, message) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;

        const icon = document.createElement('i');
        icon.className = `toast-icon`;
        switch(type) {
            case 'success':
                icon.classList.add('fas', 'fa-check-circle');
                toast.style.backgroundColor = '#d4edda';
                break;
            case 'error':
                icon.classList.add('fas', 'fa-times-circle');
                toast.style.backgroundColor = '#f8d7da';
                break;
            case 'info':
                icon.classList.add('fas', 'fa-info-circle');
                toast.style.backgroundColor = '#d1ecf1';
                break;
            case 'warning':
                icon.classList.add('fas', 'fa-exclamation-circle');
                toast.style.backgroundColor = '#fff3cd';
                toast.style.color = '#212529';
                break;
            default:
                icon.classList.add('fas', 'fa-bell');
                toast.style.backgroundColor = '#333';
        }

        const text = document.createElement('span');
        text.textContent = message;

        toast.appendChild(icon);
        toast.appendChild(text);

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.transition = 'opacity 0.5s ease-in-out';
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 500);
        }, 3000); // Remove the toast after 3 seconds
    }
}

window.RippleNotify = RippleNotify;
