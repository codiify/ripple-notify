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
                toast.style.top = '14px';
                toast.style.left = '14px';
                toast.style.animation = 'slideInLeft 0.5s ease-in-out';
                break;
            case 'top-center':
                toast.style.top = '14px';
                toast.style.left = '50%';
                toast.style.transform = 'translateX(-50%)';
                toast.style.animation = 'slideInTop 0.5s ease-in-out';
                break;
            case 'top-right':
                toast.style.top = '14px';
                toast.style.right = '14px';
                toast.style.animation = 'slideInRight 0.5s ease-in-out';
                break;
            case 'bottom-left':
                toast.style.bottom = '14px';
                toast.style.left = '14px';
                toast.style.animation = 'slideInLeft 0.5s ease-in-out';
                break;
            case 'bottom-center':
                toast.style.bottom = '14px';
                toast.style.left = '50%';
                toast.style.transform = 'translateX(-50%)';
                toast.style.animation = 'slideInBottom 0.5s ease-in-out';
                break;
            case 'bottom-right':
                toast.style.bottom = '14px';
                toast.style.right = '14px';
                toast.style.animation = 'slideInRight 0.5s ease-in-out';
                break;
            default:
                toast.style.top = '14px';
                toast.style.right = '14px';
        }

        const colorful = options.hasOwnProperty('colorful') ? options.colorful : false;

        if (colorful) {
            switch (type) {
                case 'success':
                    toast.style.backgroundColor = options.backgroundColor ?? '#ECFDF3';
                    toast.style.color = options.color ?? '#008A2E';
                    toast.style.borderColor = options.borderColor ?? '#D3FDE5';
                    break;
                case 'error':
                    toast.style.backgroundColor = options.backgroundColor || '#FFF0F0';
                    toast.style.color = options.color || '#E60000';
                    toast.style.borderColor = options.borderColor || '#FFE0E1';
                    break;
                case 'info':
                    toast.style.backgroundColor = options.backgroundColor || '#F0F8FF';
                    toast.style.color = options.color || '#0973DC';
                    toast.style.borderColor = options.borderColor || '#D3E0FD';
                    break;
                case 'warning':
                    toast.style.backgroundColor = options.backgroundColor || '#FFFCF0';
                    toast.style.color = options.color || '#DC7609';
                    toast.style.borderColor = options.borderColor || '#FDF5D3';
                    break;
                default:
                    // For other types, use default styles
                    toast.style.backgroundColor = options.backgroundColor || '#FFFFFF';
                    toast.style.color = options.color || '#171717';
                    toast.style.borderColor = options.borderColor || '#EDEDED';
            }
        } else {
            // For other types, use default styles
            toast.style.backgroundColor = options.backgroundColor || '#FFFFFF';
            toast.style.color = options.color || '#171717';
            toast.style.borderColor = options.borderColor || '#EDEDED';
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
