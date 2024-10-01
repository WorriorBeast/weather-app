import './style.css';
import { getClientLocation } from './get-user-location';
import { toggleSlideIn } from './toggle-slide-effect';

const locationInput = document.getElementById('location');
const periodInput = document.getElementById('period');

document.addEventListener('DOMContentLoaded', getClientLocation);

locationInput.addEventListener('focus', toggleSlideIn);
locationInput.addEventListener('blur', toggleSlideIn);

periodInput.addEventListener('focus', toggleSlideIn);
periodInput.addEventListener('blur', toggleSlideIn);
