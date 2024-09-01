export default function getIcon(label) {
    switch (label.toLowerCase()) {
        case 'ac':
            return '#ac'; // Ім'я іконки у sprite.svg для AC
        case 'bathroom':
            return '#bathroom'; // Ім'я іконки у sprite.svg для Bathroom
        case 'kitchen':
            return '#kitchen'; // Ім'я іконки у sprite.svg для Kitchen
        case 'radio':
            return '#radio'; // Ім'я іконки у sprite.svg для Radio
        case 'engine':
            return '#petrol';
        case 'automatic':
            return '#automat' // Ім'я іконки у sprite.svg для Engine
        default:
            return '#checked'; // Іконка за замовчуванням, якщо немає відповідності
    }
};