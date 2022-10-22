import type DuckAPI from '../../duckapi/main'
export default function Command_Lorem(duckapi: DuckAPI, wordsRaw: string) {
    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const LoremIpsum = [
        'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
        'adipiscing', 'elit', 'curabitur', 'vel', 'hendrerit', 'libero',
        'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut',
        'orci', 'gravida', 'imperdiet', 'nullam', 'purus', 'lacinia',
        'a', 'pretium', 'quis', 'congue', 'praesent', 'sagittis',
        'laoreet', 'auctor', 'mauris', 'non', 'velit', 'eros',
        'dictum', 'proin', 'accumsan', 'sapien', 'nec', 'massa',
        'volutpat', 'venenatis', 'sed', 'eu', 'molestie', 'lacus',
        'quisque', 'porttitor', 'ligula', 'dui', 'mollis', 'tempus',
        'at', 'magna', 'vestibulum', 'turpis', 'ac', 'diam',
        'tincidunt', 'id', 'condimentum', 'enim', 'sodales', 'in',
        'hac', 'habitasse', 'platea', 'dictumst', 'aenean', 'neque',
        'fusce', 'augue', 'leo', 'eget', 'semper', 'mattis',
        'tortor', 'scelerisque', 'nulla', 'interdum', 'tellus', 'malesuada',
        'rhoncus', 'porta', 'sem', 'aliquet', 'et', 'nam',
        'suspendisse', 'potenti', 'vivamus', 'luctus', 'fringilla', 'erat',
        'donec', 'justo', 'vehicula', 'ultricies', 'varius', 'ante',
        'primis', 'faucibus', 'ultrices', 'posuere', 'cubilia', 'curae',
        'etiam', 'cursus', 'aliquam', 'quam', 'dapibus', 'nisl',
        'feugiat', 'egestas', 'class', 'aptent', 'taciti', 'sociosqu',
        'ad', 'litora', 'torquent', 'per', 'conubia', 'nostra',
        'inceptos', 'himenaeos', 'phasellus', 'nibh', 'pulvinar', 'vitae',
        'urna', 'iaculis', 'lobortis', 'nisi', 'viverra', 'arcu',
        'morbi', 'pellentesque', 'metus', 'commodo', 'ut', 'facilisis',
        'felis', 'tristique', 'ullamcorper', 'placerat', 'aenean', 'convallis',
        'sollicitudin', 'integer', 'rutrum', 'duis', 'est', 'etiam',
        'bibendum', 'donec', 'pharetra', 'vulputate', 'maecenas', 'mi',
        'fermentum', 'consequat', 'suscipit', 'aliquam', 'habitant', 'senectus',
        'netus', 'fames', 'quisque', 'euismod', 'curabitur', 'lectus',
        'elementum', 'tempor', 'risus', 'cras'
    ];
    function lorem(numb: number){
        let str="";
        for (var i = 0; i < numb; i++) {
            const lW = LoremIpsum[ Math.floor(Math.random()*LoremIpsum.length) ];
            str = str + lW;
            if (((Math.random()*5)==1)&&(i!=numb-1)) {str = str + ","};
            str = str + " ";
        };
        str = capitalizeFirstLetter(str);
        str = str.slice(0, -1);
        str = str + '.';
        duckapi.socket.send(str);
        return str;
    }
    lorem(parseInt(wordsRaw));
}