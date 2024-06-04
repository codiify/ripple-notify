import {promises as fs} from 'fs';
import {join} from 'path';

console.log('Running postinstall script...');

// Get the root directory where npm install was run
const rootDir = process.env.INIT_CWD || process.cwd();
console.log('Project root directory:', rootDir);

const filePath = join(rootDir, 'ripple.js');
console.log('Attempting to create ripple.js at:', filePath);

const fileContent = `
export const RippleConfig = {
    timeout: 3000,
    animationSpeed: '0.5s',
    duration: 500,
    colorful: true,
    icon: true,
    position: 'bottom-right',
    colors: {
        success: {
            backgroundColor: '#ECFDF3',
            color: '#008A2E',
            borderColor: '#D3FDE5'
        },
        error: {
            backgroundColor: '#FFF0F0',
            color: '#E60000',
            borderColor: '#FFE0E1'
        },
        info: {
            backgroundColor: '#F0F8FF',
            color: '#0973DC',
            borderColor: '#D3E0FD'
        },
        warning: {
            backgroundColor: '#FFFCF0',
            color: '#DC7609',
            borderColor: '#FDF5D3'
        },
        default: {
            backgroundColor: '#FFFFFF',
            color: '#171717',
            borderColor: '#EDEDED'
        }
    }
};
`;

try {
    await fs.writeFile(filePath, fileContent);
    // console.log('ripple.js file created successfully.');
} catch (err) {
    // console.error('Failed to create ripple.js file:', err);
}
